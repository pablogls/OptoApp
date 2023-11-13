import React, { useState, useEffect, useRef } from 'react';
import { styles } from "../styles/GlobalScreenLightStyles";
import { useFonts, Poppins_400Regular, Poppins_900Black, Poppins_600SemiBold, Poppins_500Medium } from "@expo-google-fonts/poppins";
import { Inter_800ExtraBold } from "@expo-google-fonts/inter";
import { OpenSans_600SemiBold } from "@expo-google-fonts/open-sans";
import { LinearGradient } from "expo-linear-gradient";
import { GLOBAL_URL } from '../GlobalURL.js';
import { TouchableOpacity as Pressable, Image, Text, View, TextInput, Padding, Select, TouchableOpacity } from "react-native";
import RNPickerSelect from 'react-native-picker-select';
import DropDownPicker from 'react-native-dropdown-picker';


const GlobalScreenLight = () => {
  const [selectedValue, setSelectedValue] = useState('');
  const pickerRef = useRef(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [maquinaSeleccionada, setMaquinaSeleccionada] = useState(null);
  const [maquinas, setMaquinas] = useState([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      fetch(`${GLOBAL_URL}`)
        .then(response => response.json())
        .then(data => {
          const maquinas = data.data.map(maquina => {
            return {
              codigo: maquina.cCodMaquina,
              estado: maquina.nEstado,
              velocidad: maquina.nTiempoActivo,
              tiempoActivo: maquina.nVelMaquina,
              cantidad: maquina.nCantidad,
              cantidadMin: maquina.nBarrasMin,
              inicio: maquina.fInicioActividad,
              ultimoStatus: maquina.fUltimoStatus,
              tiempoActiva: maquina.nTiempoActivo,
              disponibilidad: maquina.nDisponibilidad,
              SAPCLIENTE: maquina.SAPCLIENTE
            };
          });
          setMaquinas(maquinas);
        })
        .catch(error => console.error(error));
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);  

  const dropdownItems = maquinas.map(maquina => ({
    label: maquina.codigo,
    value: maquina.codigo,
  }));

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    if (!isDropdownOpen && pickerRef.current) {
      pickerRef.current.focus();
    }
  };
  
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
                  <Text style={[styles.velocidad, styles.minTypo]}>
                    Velocidad
                  </Text>
                  <Text style={[styles.velocidadMax, styles.minTypo]}>
                    Velocidad Max
                  </Text>
                  <Text style={[styles.cantidad, styles.minTypo]}>Cantidad</Text>
                  <Text style={[styles.cantidadXMin, styles.minTypo]}>
                    Cantidad x Min
                  </Text>
                  <Text style={[styles.inicio, styles.minTypo]}>Inicio</Text>
                  <Text style={[styles.ultimoStatus, styles.minTypo]}>
                    Ultimo Status
                  </Text>
                  <Text style={[styles.tiempoActiva, styles.minTypo]}>
                    Tiempo Activa
                  </Text>
                  <Text style={[styles.disponibilidad, styles.minTypo]}>
                    Disponibilidad
                  </Text>
                  <Text style={[styles.p, styles.minTypo]}>ΣP</Text>
                </View>
                <View style={[styles.resultadoDatos, styles.datosLayout1]}>
                  <Text style={[styles.kw, styles.minTypo]}>8,928 kW</Text>
                  <Text style={[styles.text, styles.minTypo]}>
                    17-10 13:02:30
                  </Text>
                  <Text style={[styles.min, styles.minTypo]}>35 min</Text>
                  <Text style={[styles.text1, styles.minTypo]}>10.36%</Text>
                  <Text style={[styles.mquina, styles.minTypo]}>CR2</Text>
                  <Text style={[styles.detenida, styles.minTypo]}>Detenida</Text>
                  <Text style={[styles.text2, styles.minTypo]}>0.00</Text>
                  <Text style={[styles.text3, styles.minTypo]}>103.11</Text>
                  <Text style={[styles.text4, styles.minTypo]}>0</Text>
                  <Text style={[styles.text5, styles.minTypo]}>0.00</Text>
                  <Text style={[styles.text6, styles.minTypo]}>
                    17-10 09:29:24
                  </Text>
                </View>
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
                  <Text style={[styles.mquina, styles.minTypo]}>
                    Ultima Fecha Produccion
                  </Text>
                  <Text style={[styles.item, styles.itemPosition]}>ITEM</Text>
                  <Text style={[styles.cliente, styles.minTypo]}>Cliente</Text>
                  <Text style={[styles.sp, styles.minTypo]}>SP</Text>
                  <Text style={[styles.cantSolicitada, styles.minTypo]}>
                    Cant. Solicitada
                  </Text>
                  <Text style={[styles.cantFabricada, styles.minTypo]}>
                    Cant. Fabricada
                  </Text>
                  <Text style={[styles.cantUltIngreso, styles.minTypo]}>
                    Cant. Ult Ingreso
                  </Text>
                </View>
                <View style={[styles.resultadoDatos2, styles.datosLayout]}>
                  <Text style={[styles.text7, styles.minTypo]}>-</Text>
                  <Text style={[styles.text8, styles.minTypo]}>-</Text>
                  <Text style={[styles.text9, styles.text9Position]}>-</Text>
                  <Text style={[styles.mquina, styles.minTypo]}>17-10 13:52</Text>
                  <Text style={[styles.cantSolicitada, styles.minTypo]}>0</Text>
                  <Text style={[styles.cantFabricada, styles.minTypo]}>0</Text>
                  <Text style={[styles.cantUltIngreso, styles.minTypo]}>0</Text>
                </View>
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
            <Text style={[styles.sonmetroDb, styles.cr2Typo]}>
              Sonómetro (dB)
            </Text>
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
              <Text style={[styles.cr2Tem, styles.cr2Typo]}>
                CR2 - Tem. Soluble (°C)
              </Text>
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
          <Image
            style={styles.image1Icon}
            contentFit="cover"
            source={require("../assets/image-1.png")}
          />
        </View>

        {/* ... Contenido del appbar ... */}
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
              onPress={() => {}}
            />
          </View>
        </View>

        {/* ... Contenido del appbar ... */}

        <View style={styles.selecopcionlight}>
      <RNPickerSelect
        placeholder={{ label: 'Selecciona una opción...', value: '' }} // Cambia el valor a un string vacío
        onValueChange={(value) => setSelectedValue(value)}
        items={dropdownItems}
        onOpen={toggleDropdown}
        onClose={toggleDropdown}
        useNativeAndroidPickerStyle={false}
      />
    </View>

      

      </View>
    );
  };
  export default GlobalScreenLight;