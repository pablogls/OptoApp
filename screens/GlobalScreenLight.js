import React, { useState, useEffect } from 'react';
import { styles , pickerSelectStyles} from "../styles/GlobalScreenLightStyles";
import { useFonts, Poppins_400Regular, Poppins_900Black, Poppins_600SemiBold, Poppins_500Medium } from "@expo-google-fonts/poppins";
import { Inter_800ExtraBold } from "@expo-google-fonts/inter";
import { OpenSans_600SemiBold } from "@expo-google-fonts/open-sans";
import { LinearGradient } from "expo-linear-gradient";
import { GLOBAL_URL } from '../GlobalURL.js';
import { TouchableOpacity as Pressable, Image, Text, View, TextInput, Padding, Select, TouchableOpacity, ActivityIndicator  } from "react-native";
import RNPickerSelect from 'react-native-picker-select';


const GlobalScreenLight = () => {
  const [selectedValue, setSelectedValue] = useState('');
  const [maquinaSeleccionada, setMaquinaSeleccionada] = useState(null);
  const [maquinas, setMaquinas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [statusImageSource, setStatusImageSource] = useState(null);
  const handleMaquinaChange = (value) => {
    setLoading(true); // Activar la carga al cambiar de máquina
    const maquinaSeleccionada = maquinas.find((maquina) => maquina.codigo === value);
    setMaquinaSeleccionada(maquinaSeleccionada);
  };

  // OBTENCIÓN Y ACTUALIZACIÓN DATOS DE LA API
  useEffect(() => {
    const intervalId = setInterval(() => {
      fetch(`${GLOBAL_URL}`)
        .then(response => response.json())
        .then(data => {
          const maquinas = data.data.map(maquina => {
            return {
              codigo: maquina.cCodMaquina,
              estado: maquina.nEstado,
              velocidad: maquina.nVelOnline,
              velocidadMax: maquina.nVelMax,
              cantidad: maquina.nCantidad,
              cantidadMin: maquina.nBarrasMin,
              inicio: maquina.fInicioActividad,
              ultimoStatus: maquina.fUltimoStatus,
              tiempoActiva: maquina.nTiempoActivo,
              disponibilidad: maquina.nDisponibilidad,
              potencia: maquina.APIPOTENCIAMAQUINA,
              ultimaFechaSAP: maquina.SAPULTIMAFECHAPROD,
              itemSAP: maquina.SAPDESCRIPCIONPROD,
              spSAP: maquina.SAPSP,
              clienteSAP: maquina.SAPCLIENTE,
              cantSolicitadaSAP: maquina.SAPCANTIDADSOLICITADA,
              cantFabricadaSAP: maquina.SAPCANTIDADFABRICADA,
              cantUltIngresoSAP: maquina.SAPCANTIDADULTIMAPROD
            };
          });
          setMaquinas(maquinas);

          // ACTUALIZO LOS DATOS DE LA MÁQUINA SELECCIONADA CADA 3 SEGUNDOS
          if (selectedValue) {
            const maquinaActualizada = maquinas.find((maquina) => maquina.codigo === selectedValue);
            setMaquinaSeleccionada(maquinaActualizada);
  
            // Lógica para establecer la imagen según las condiciones
            if (maquinaActualizada) {
              if (maquinaActualizada.estado === "0" && maquinaActualizada.inicio !== null) {
                setStatusImageSource(require("../assets/red.png"));
              } else if (maquinaActualizada.estado === "0") {
                setStatusImageSource(require("../assets/ni.png"));
              } else if (maquinaActualizada.estado === "1") {
                setStatusImageSource(require("../assets/green.png"));
              }
            }
          }
          setLoading(false);
        })
        .catch(error => {
          console.error(error);
          setLoading(false); 
        });
    }, 3000);
  
    return () => clearInterval(intervalId);
  }, [selectedValue]);
  


  // DATOS QUE MOSTRARÁ EL PICKER
  const dropdownItems = maquinas.map(maquina => ({
    label: "Máquina " + maquina.codigo,
    value: maquina.codigo,
  }));

   // CAMBIO DE SEGUNDOS A HORAS Y MINUTOS
  function timeConverter(segundos) {
    const horas = Math.floor(segundos / 3600);
    const minutos = Math.floor((segundos % 3600) / 60);
  
    if (horas > 0 && minutos > 0) {
      return `${horas} hrs ${minutos} min`;
    } else if (horas > 0) {
      return `${horas} hrs`;
    } else if (minutos > 0) {
      return `${minutos} min`;
    } else {
      return 'Menos de un min';
    }
  }  

  function formatFechaSeg(fechaString) {
    if (fechaString === null) {
      return '-';
    }
    const fecha = new Date(fechaString);
    const dia = fecha.getDate().toString().padStart(2, '0');
    const mes = (fecha.getMonth() + 1).toString().padStart(2, '0'); // Los meses en JavaScript van de 0 a 11
    const hora = fecha.getHours().toString().padStart(2, '0');
    const minutos = fecha.getMinutes().toString().padStart(2, '0');
    const segundos = fecha.getSeconds().toString().padStart(2, '0');
  
    return `${dia}-${mes} ${hora}:${minutos}:${segundos}`;
  }
  
  function formatFecha(fechaString) {
    if (fechaString === null) {
      return '-';
    }
    let fecha = new Date(fechaString);
    let dia = fecha.getDate().toString().padStart(2, '0');
    let mes = (fecha.getMonth() + 1).toString().padStart(2, '0'); // Los meses en JavaScript van de 0 a 11
    let hora = fecha.getHours().toString().padStart(2, '0');
    let minutos = fecha.getMinutes().toString().padStart(2, '0');
  
    return `${dia}-${mes} ${hora}:${minutos}`;
  }

  // CARGA DE FONTS
  const [fontsLoaded] = useFonts({
      Poppins_400Regular,
      Poppins_600SemiBold,
      Poppins_900Black,
      OpenSans_600SemiBold,
      Inter_800ExtraBold,
      Poppins_500Medium
    });
  
    if (!fontsLoaded) {
      return null;
    }

    return (
      <View style={styles.globalscreenlight}>
          <LinearGradient
            style={[styles.gradient]}
            locations={[0, 1]}
            colors={["#2e4f81", "#132c51"]}
          />

        <View style={styles.tituloPosition}>

          <View style={styles.encabezado}>
            <Image
              style={[styles.eyeicon, styles.eyeiconLayout]}
              contentFit="cover"
              source={require("../assets/eyeicon.png")}
            />
            <Text style={styles.global}>Global</Text>
          </View>
        </View>
        <View style={[styles.card, styles.cardLayout]}>
          <View style={[styles.cardChild, styles.cardLayout]} />
        </View>
        <View style={[styles.scroll, styles.scrollLayout]}>
          <View style={[styles.datosMaquina, styles.datosLayout2]}>
            <View style={[styles.datosMaquinaChild, styles.appbarShadowBox]} />
            <View style={[styles.tablaDatos, styles.tablaLayout4]}>
              <View style={[styles.tablaDatosChild, styles.tablaChildLayout1]} />
              <View style={styles.tablaDatosItem} />
              <View style={[styles.tablaDatosInner, styles.tablaLayout3]} />
              <View style={styles.rectangleView} />
              <View style={[styles.tablaDatosChild1, styles.tablaChildLayout]} />
              <View style={[styles.tablaDatosChild2, styles.tablaChildLayout]} />
              <View style={[styles.tablaDatosChild3, styles.tablaLayout3]} />
              <View style={[styles.datos, styles.datosLayout1]}>
                <View style={styles.nombreDatos}>
                  <Text style={[styles.mquina, styles.minTypo]}>Máquina</Text>
                  <Text style={[styles.estado, styles.minTypo]}>Estado</Text>
                  <Text style={[styles.velocidad, styles.minTypo]}>Velocidad</Text>
                  <Text style={[styles.velocidadMax, styles.minTypo]}>Velocidad Max</Text>
                  <Text style={[styles.cantidad, styles.minTypo]}>Cantidad</Text>
                  <Text style={[styles.cantidadXMin, styles.minTypo]}>Cantidad x Min</Text>
                  <Text style={[styles.inicio, styles.minTypo]}>Inicio</Text>
                  <Text style={[styles.ultimoStatus, styles.minTypo]}>Ultimo Status</Text>
                  <Text style={[styles.tiempoActiva, styles.minTypo]}>Tiempo Activa</Text>
                  <Text style={[styles.disponibilidad, styles.minTypo]}>Disponibilidad</Text>
                  <Text style={[styles.p, styles.minTypo]}>ΣP</Text>
                </View>

                {maquinaSeleccionada && (
                <View style={[styles.resultadoDatos, styles.datosLayout1]}>
                  <Text style={[styles.mquina, styles.minTypo]}>{`Máquina ${maquinaSeleccionada.codigo}`}</Text>
                  <Text style={[styles.detenida, styles.minTypo]}>{maquinaSeleccionada.estado === "1" ? "Activa" : "Detenida"}</Text>
                  <Text style={[styles.text2, styles.minTypo]}>{parseFloat(maquinaSeleccionada.velocidad).toFixed(2)}</Text>
                  <Text style={[styles.text3, styles.minTypo]}>{parseFloat(maquinaSeleccionada.velocidadMax).toFixed(2)}</Text>
                  <Text style={[styles.text4, styles.minTypo]}>{parseFloat(maquinaSeleccionada.cantidad).toFixed(0)}</Text>
                  <Text style={[styles.text5, styles.minTypo]}>{parseFloat(maquinaSeleccionada.cantidadMin).toFixed(2)}</Text>
                  <Text style={[styles.text6, styles.minTypo]}>{formatFechaSeg(maquinaSeleccionada.inicio)}</Text>
                  <Text style={[styles.text, styles.minTypo]}>{formatFechaSeg(maquinaSeleccionada.ultimoStatus)}</Text>
                  <Text style={[styles.min, styles.minTypo]}>{maquinaSeleccionada.tiempoActiva !== null ? timeConverter(maquinaSeleccionada.tiempoActiva) : ''}</Text>
                  <Text style={[styles.text1, styles.minTypo]}>{`${parseFloat(maquinaSeleccionada.disponibilidad).toFixed(2)}%`}</Text>
                  <Text style={[styles.kw, styles.minTypo]}>{`${Number(maquinaSeleccionada.potencia).toLocaleString('en-US', {maximumFractionDigits: 0})} kW`}</Text>
                </View>
                )}

                <Image
                  style={[styles.lineIcon, styles.itemPosition]}
                  contentFit="cover"
                  source={require("../assets/line.png")}
                />

              </View>
            </View>

            <View style={[styles.tablaDatos2, styles.tablaLayout2]}>
              <View style={[styles.tablaDatos2Child, styles.tablaLayout2]} />
              <View style={[styles.tablaDatos2Item, styles.tablaLayout1]} />
              <View style={[styles.tablaDatos2Inner, styles.tablaLayout1]} />
              <View style={[styles.tablaDatos2Child1, styles.tablaLayout1]} />
              <View style={[styles.datos2, styles.datosLayout]}>
                <View style={[styles.nombreDatos2, styles.datosLayout]}>
                  <Text style={[styles.mquina, styles.minTypo]}>Ultima Fecha Produccion</Text>
                  <Text style={[styles.item, styles.itemPosition]}>ITEM</Text>
                  <Text style={[styles.cliente, styles.minTypo]}>Cliente</Text>
                  <Text style={[styles.sp, styles.minTypo]}>SP</Text>
                  <Text style={[styles.cantSolicitada, styles.minTypo]}>Cant. Solicitada</Text>
                  <Text style={[styles.cantFabricada, styles.minTypo]}>Cant. Fabricada</Text>
                  <Text style={[styles.cantUltIngreso, styles.minTypo]}>Cant. Ult Ingreso</Text>
                </View>
                {maquinaSeleccionada && (
                <View style={[styles.resultadoDatos2, styles.datosLayout]}>
                  <Text style={[styles.mquina, styles.minTypo]}>{formatFecha(maquinaSeleccionada.ultimaFechaSAP)}</Text>
                  <Text style={[styles.text9, styles.text9Position]}>{maquinaSeleccionada.itemSAP}</Text>
                  <Text style={[styles.text8, styles.minTypo]}>{maquinaSeleccionada.clienteSAP}</Text>
                  <Text style={[styles.text7, styles.minTypo]}>{maquinaSeleccionada.spSAP}</Text>
                  <Text style={[styles.cantSolicitada, styles.minTypo]}>{`${Number(maquinaSeleccionada.cantSolicitadaSAP).toLocaleString('en-US', {maximumFractionDigits: 0})}`}</Text>
                  <Text style={[styles.cantFabricada, styles.minTypo]}>{`${Number(maquinaSeleccionada.cantFabricadaSAP).toLocaleString('en-US', {maximumFractionDigits: 0})}`}</Text>
                  <Text style={[styles.cantUltIngreso, styles.minTypo]}>{maquinaSeleccionada.cantUltIngresoSAP}</Text>
                </View>
)}
                <Image
                  style={[styles.lineIcon1, styles.text9Position]}
                  contentFit="cover"
                  source={require("../assets/line1.png")}
                />
              </View>
            </View>
          </View>
          <View style={[styles.tablaSonometro, styles.tablaLayout]}>
            <View style={styles.tablaChildShadowBox} />
            <Text style={[styles.sonmetroDb, styles.cr2Typo]}>Sonómetro (dB)</Text>
            <View style={[styles.sonometro, styles.sonometroLayout]}>
              <Text style={[styles.min1, styles.cr2Typo]}>Min</Text>
              <Text style={[styles.max, styles.cr2Typo]}>Max</Text>
              <Image
                style={[styles.sonometroChild, styles.childLayout]}
                contentFit="cover"
                source={require("../assets/ellipse-6.png")}
              />
              <Text style={[styles.text14, styles.textTypo]}>0</Text>
              <View style={[styles.sonometroItem, styles.itemLayout]} />
            </View>
          </View>
          <View style={[styles.tablaTemSolubleC, styles.tablaLayout]}>
            <View style={styles.tablaChildShadowBox} />
            <View style={styles.temSolubleC}>
              <Text style={[styles.min2, styles.min2Typo]}>Min</Text>
              <Text style={[styles.max1, styles.min2Typo]}>Max</Text>
              <Image
                style={[styles.temSolubleCChild, styles.temPosition]}
                contentFit="cover"
                source={require("../assets/ellipse-61.png")}
              />
              <Text style={[styles.text15, styles.textTypo]}>0</Text>
              <View style={[styles.temSolubleCItem, styles.temPosition]} />
              <Text style={[styles.cr2Tem, styles.cr2Typo]}>CR2 - Tem. Soluble (°C)</Text>
            </View>
          </View>
          <View style={[styles.tablaTemTinaEnfriamiento, styles.scrollLayout]}>
            <View style={styles.tablaChildShadowBox} />
            <View style={[styles.temTinaEnfriamientoC, styles.sonometroLayout]}>
              <Text style={[styles.min1, styles.cr2Typo]}>Min</Text>
              <Text style={[styles.max, styles.cr2Typo]}>Max</Text>
              <Image
                style={[styles.sonometroChild, styles.childLayout]}
                contentFit="cover"
                source={require("../assets/ellipse-62.png")}
              />
              <Text style={[styles.text14, styles.textTypo]}>0</Text>
              <View style={[styles.sonometroItem, styles.itemLayout]} />
            </View>
            <Text style={[styles.cr2Tem1, styles.cr2Typo]}>
              CR2 - Tem. Tina enfriamiento (°C)
            </Text>
          </View>

          {loading ? (
            <ActivityIndicator style={styles.loadingIndicator} size="large" color="#132c51" />
              ) : (
              maquinaSeleccionada ? (
                  <Image
                  style={styles.image1Icon}
                  contentFit="cover"
                   source={statusImageSource}
                  />
             ) : (
               <Image
                  style={styles.image1Icon}
                   contentFit="cover"
                  source={require("../assets/ni.png")}
    />
  )
)}
        </View>

        {/*  APPBAR */}
        <View style={[styles.appbar, styles.appbarChildLayout]}>
          <View style={[styles.appbarChild, styles.appbarChildLayout]} />
          <View style={[styles.opcionGlobal, styles.appbarChildLayout]}>
            <View style={[styles.opcionGlobalChild, styles.appbarChildLayout]} />
            <Image
              style={[styles.eyeicon1, styles.eyeiconLayout]}
              contentFit="cover"
              source={require("../assets/eyeicon1.png")}
            />
            <Text style={styles.global1}>Global</Text>
          </View>
          <View style={[styles.opcionInforme, styles.opcionPosition]}>
            <Image
              style={[styles.fileicon, styles.eyeiconLayout]}
              contentFit="cover"
              source={require("../assets/fileicon.png")}
            />
            <Text style={[styles.informe, styles.informeTypo]}>{`Informe`}</Text>
            <Pressable
              style={[styles.opcionInformeChild, styles.opcionChildPosition]}
              onPress={() => {}}
            />
          </View>
          <View style={[styles.opcionAjustes, styles.opcionPosition]}>
            <Image
              style={[styles.cogicon, styles.eyeiconLayout]}
              contentFit="cover"
              source={require("../assets/cogicon.png")}
            />
            <Text style={[styles.ajustes, styles.informeTypo]}>Ajustes</Text>
            <Pressable
              style={[styles.opcionAjustesChild, styles.opcionChildPosition]}
              onPress={() => {}}/>
          </View>
        </View>

        {/*  APPBAR */}
        
        <View style={styles.selecopcionlight}>
      <RNPickerSelect
        placeholder={{ label: 'Seleccione una opción...', value: '' }} // Cambia el valor a un string vacío
        onValueChange={(value) => {
          setSelectedValue(value);
          handleMaquinaChange(value);
        }}
        items={dropdownItems}
        useNativeAndroidPickerStyle={false}
        style={pickerSelectStyles}
        textInputProps={textInputProps}
      />
      </View>
      </View>
    );
  };
  
  const textInputProps = {
    style: {
      fontFamily: 'Poppins_500Medium',
    fontWeight: "500",
    fontSize: 15,
    color: 'black',
    },
  };


  
  export default GlobalScreenLight;