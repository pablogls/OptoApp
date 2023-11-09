import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Pressable, Picker, Dimensions  } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { Border, Color, FontFamily, FontSize, Padding } from "../GlobalStyles";
import * as Font from 'expo-font';
import GlobalStyles from "../GlobalStyles";
import { GLOBAL_URL } from "../GlobalURL";


const { width, height } = Dimensions.get('window');

const GlobalScreenLight = () => {
    const [fontsLoaded, setFontsLoaded] = React.useState(false);
    const [maquinas, setMaquinas] = useState([]);
    const [selectedMachine, setSelectedMachine] = useState(null);
    const [selectedMachineValue, setSelectedMachineValue] = useState(null);


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


    React.useEffect(() => {
      async function loadFont() {
        await Font.loadAsync({
          'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
          'Inter-Regular': require('../assets/fonts/Inter-Regular.ttf'),
          'Inter-ExtraBold': require('../assets/fonts/Inter-ExtraBold.ttf'),
        });
        setFontsLoaded(true); // Marcar las fuentes como cargadas
      }
      loadFont();
    }, []);
  
    // Renderizar el componente solo si las fuentes están cargadas
    if (!fontsLoaded) {
      return null; // O cualquier otro indicador de carga que desees mostrar
    }
  
    return (
    <View style={styles.globalscreenlight}>
      <View style={styles.tituloPosition}>
        <LinearGradient
          style={[styles.tituloChild, styles.tituloPosition]}
          locations={[0, 1]}
          colors={["#2e4f81", "#132c51"]}
        />
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
                <Text style={[styles.mquina, styles.minTypo]}>selected Machine.cCodMaquina</Text>
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
          <Text style={[styles.informe, styles.informeTypo]}>{`Informe
`}</Text>
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
      <View style={[styles.selecopcionlight, styles.appbarShadowBox]}>
      <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
  <Picker
    selectedValue={selectedMachine}
    onValueChange={(itemValue, itemIndex) => {
      setSelectedMachine(itemValue);
    }}
    style={styles.picker}
    itemStyle={styles.pickerContainer}
  >
    
  <Picker.Item label="Selecciona una máquina" value={null} />
  {maquinas.map((maquina, index) => (
    <Picker.Item
      key={index}
      label={maquina.codigo}
      value={maquina}
    />
  ))}
</Picker>
</View>
    </View>
  );
};

const styles = StyleSheet.create({
  tituloPosition: {
    height: 0.52 * height,
    width: width,
    left: 0,
    top: 0,
    position: "absolute",
  },
  eyeiconLayout: {
    maxHeight: "100%",
    position: "absolute",
  },
  cardLayout: {
    height: 0.65 * height,
    width: width,
    left: 0,
    position: "absolute",
  },
  scrollLayout: {
    width: 0.867 * width,
    position: "absolute",
  },
  datosLayout2: {
    height: 0.42 * height, // Aproximadamente el 42% de la altura de la pantalla
    width: width,
    left: 0,
    top: 0,
  },
  appbarShadowBox: {
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  tablaLayout4: {
    height: 0.24 * height, // Aproximadamente el 24% de la altura de la pantalla
    width: 0.588 * width, // El 58.8% del ancho de la pantalla
    position: "absolute",
  },
  tablaChildLayout1: {
    borderRadius: Border.br_3xs,
    top: 0,
  },
  tablaLayout3: {
    height: 0.016 * height, // Aproximadamente el 1.6% de la altura de la pantalla
    backgroundColor: Color.colorMistyrose,
    width: 0.588 * width, // El 58.8% del ancho de la pantalla
    left: 0,
    position: "absolute",
  },
  tablaChildLayout: {
    backgroundColor: Color.colorMistyrose,
    height: '2%',
    width: '70%',
    left: 0,
    position: 'absolute',
  },
  datosLayout1: {
    height: '35%',
    position: 'absolute',
  },
  minTypo: {
    color: Color.colorBlack,
    fontFamily: GlobalStyles.FontFamily.poppinsMedium,
    fontWeight: '500',
  },
  itemPosition: {
    top: '2%',
    left: 0,
    position: 'absolute',
  },
  tablaLayout2: {
    height: '12%',
    width: '50%',
    left: '50%',
    position: 'absolute',
  },
  tablaLayout1: {
    width: '49%',
    height: '1%',
    backgroundColor: Color.colorMistyrose,
    left: 0,
    position: 'absolute',
  },
  datosLayout: {
    height: '8%',
    position: 'absolute',
  },
  text9Position: {
    top: '1%',
    left: 0,
    position: 'absolute',
  },
  tablaLayout: {
    height: '15%',
    width: '80%',
    left: 0,
    position: 'absolute',
  },
  cr2Typo: {
    fontSize: FontSize.size_sm,
    color: Color.colorBlack,
    lineHeight: 15,
    textAlign: 'center',
    fontFamily: GlobalStyles.FontFamily.poppinsMedium,
    fontWeight: '500',
    position: 'absolute',
  },
  sonometroLayout: {
    height: '31%',
    width: '30%',
    position: 'absolute',
  },
  childLayout: {
    marginLeft: '-25%',
    height: '31%',
    width: '30%',
  },
  textTypo: {
    marginLeft: '-1%',
    fontSize: FontSize.size_sm,
    color: Color.colorBlack,
    lineHeight: 15,
    textAlign: 'center',
    fontFamily: GlobalStyles.FontFamily.poppinsMedium,
    fontWeight: '500',
    left: '50%',
    position: 'absolute',
  },
  itemLayout: {
    height: '7%',
    width: '0.1%',
    borderRightWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: 'solid',
    marginLeft: '-0.15%',
  },
  min2Typo: {
    top: '66%',
    fontSize: FontSize.size_sm,
    color: Color.colorBlack,
    lineHeight: 15,
    textAlign: 'center',
    fontFamily: GlobalStyles.FontFamily.poppinsMedium,
    fontWeight: '500',
    position: 'absolute',
  },
  temPosition: {
    top: '6%',
    left: '50%',
    position: 'absolute',
  },
  appbarChildLayout: {
    height: '10%',
    position: 'absolute',
  },
  opcionPosition: {
    bottom: '0%',
    top: '0%',
    height: '100%',
    position: 'absolute',
  },
  informeTypo: {
    textAlign: 'left',
    fontSize: FontSize.size_xs,
  },
  opcionChildPosition: {
    backgroundColor: Color.colorGainsboro,
    height: '8%',
    left: 0,
    top: 0,
    position: 'absolute',
  },
  tituloChild: {
    backgroundColor: 'transparent',
  },
  eyeicon: {
    height: '60%',
    marginLeft: '-28.3%',
    top: '20%',
    bottom: '20%',
    width: '18.8%',
    left: '50%',
    position: 'absolute',
  },
  global: {
    marginLeft: '-3.4%',
    fontSize: '6.3%',
    textAlign: 'center',
    color: Color.colorWhite,
    fontFamily: GlobalStyles.FontFamily.poppinsMedium,
    fontWeight: '500',
    left: '50%',
    top: 0,
    position: 'absolute',
  },
  encabezado: {
    height: '8.25%',
    marginLeft: '-28.6%',
    top: '12%',
    bottom: '64.75%',
    width: '57%',
    left: '50%',
    position: 'absolute',
  },
  cardChild: {
    borderTopLeftRadius: Border.br_31xl,
    borderTopRightRadius: Border.br_31xl,
    top: 0,
    backgroundColor: Color.colorGhostwhite_100,
  },
  card: {
    top: '38%',
  },
  datosMaquinaChild: {
    backgroundColor: Color.colorWhite,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    borderRadius: Border.br_xl,
    position: 'absolute',
    height: '88%',
    width: '100%',
    left: 0,
    top: 0,
  },
  tablaDatosChild: {
    backgroundColor: '#eef0f8',
    height: '53.57%',
    width: '66.03%',
    position: 'absolute',
    left: 0,
  },
  tablaDatosItem: {
    top: '47.5%',
    borderBottomRightRadius: Border.br_3xs,
    borderBottomLeftRadius: Border.br_3xs,
    backgroundColor: '#f4dd83',
    height: '4.76%',
    width: '66.03%',
    left: 0,
    position: 'absolute',
  },
  tablaDatosInner: {
    top: '40.18%',
  },
  rectangleView: {
    top: '31.16%',
    height: '4.18%',
    backgroundColor: Color.colorMistyrose,
    width: '66.03%',
    left: 0,
    position: 'absolute',
  },
  tablaDatosChild1: {
    top: '23.21%',
  },
  tablaDatosChild2: {
    top: '15.26%',
  },
  tablaDatosChild3: {
    top: '7.31%',
  },
  máquina: {
    lineHeight: '4.18%',
    fontSize: FontSize.size_3xs,
    color: Color.colorBlack,
    textAlign: 'center',
    left: 0,
    top: 0,
    position: 'absolute',
  },
  estado: {
    lineHeight: '4.18%',
    fontSize: FontSize.size_3xs,
    color: Color.colorBlack,
    textAlign: 'center',
    top: '4.18%',
    left: 0,
    position: 'absolute',
  },
  velocidad: {
    top: '8.36%',
    lineHeight: '4.18%',
    fontSize: FontSize.size_3xs,
    color: Color.colorBlack,
    textAlign: 'center',
    left: 0,
    position: 'absolute',
  },
  velocidadMax: {
    top: '12.54%',
    lineHeight: '4.18%',
    fontSize: FontSize.size_3xs,
    color: Color.colorBlack,
    textAlign: 'center',
    left: 0,
    position: 'absolute',
  },
  cantidad: {
    top: 64,
    lineHeight: 15,
    fontSize: FontSize.size_3xs,
    color: Color.colorBlack,
    textAlign: "center",
    left: 0,
    position: "absolute",
  },
  cantidadXMin: {
    top: 80,
    lineHeight: 15,
    fontSize: FontSize.size_3xs,
    color: Color.colorBlack,
    textAlign: "center",
    left: 0,
    position: "absolute",
  },
  inicio: {
    top: 96,
    lineHeight: 15,
    fontSize: FontSize.size_3xs,
    color: Color.colorBlack,
    textAlign: "center",
    left: 0,
    position: "absolute",
  },
  ultimoStatus: {
    top: 112,
    lineHeight: 15,
    fontSize: FontSize.size_3xs,
    color: Color.colorBlack,
    textAlign: "center",
    left: 0,
    position: "absolute",
  },
  tiempoActiva: {
    top: 128,
    lineHeight: 15,
    fontSize: FontSize.size_3xs,
    color: Color.colorBlack,
    textAlign: "center",
    left: 0,
    position: "absolute",
  },
  disponibilidad: {
    top: 144,
    lineHeight: 15,
    fontSize: FontSize.size_3xs,
    color: Color.colorBlack,
    textAlign: "center",
    left: 0,
    position: "absolute",
  },
  p: {
    top: 160,
    lineHeight: 15,
    fontSize: FontSize.size_3xs,
    color: Color.colorBlack,
    textAlign: "center",
    left: 0,
    position: "absolute",
  },
  nombreDatos: {
    top: 1,
    left: 7,
    width: 76,
    height: 175,
    position: "absolute",
  },
  kw: {
    top: 162,
    lineHeight: 15,
    fontSize: FontSize.size_3xs,
    color: Color.colorBlack,
    textAlign: "center",
    left: 0,
    position: "absolute",
  },
  text: {
    top: 114,
    lineHeight: 15,
    fontSize: FontSize.size_3xs,
    color: Color.colorBlack,
    textAlign: "center",
    left: 0,
    position: "absolute",
  },
  min: {
    top: 130,
    lineHeight: 15,
    fontSize: FontSize.size_3xs,
    color: Color.colorBlack,
    textAlign: "center",
    left: 0,
    position: "absolute",
  },
  text1: {
    top: 145,
    lineHeight: 15,
    fontSize: FontSize.size_3xs,
    color: Color.colorBlack,
    textAlign: "center",
    left: 0,
    position: "absolute",
  },
  detenida: {
    top: 18,
    lineHeight: 15,
    fontSize: FontSize.size_3xs,
    color: Color.colorBlack,
    textAlign: "center",
    left: 0,
    position: "absolute",
  },
  text2: {
    top: 33,
    lineHeight: 15,
    fontSize: FontSize.size_3xs,
    color: Color.colorBlack,
    textAlign: "center",
    left: 0,
    position: "absolute",
  },
  text3: {
    top: 49,
    lineHeight: 15,
    fontSize: FontSize.size_3xs,
    color: Color.colorBlack,
    textAlign: "center",
    left: 0,
    position: "absolute",
  },
  text4: {
    top: 66,
    lineHeight: 15,
    fontSize: FontSize.size_3xs,
    color: Color.colorBlack,
    textAlign: "center",
    left: 0,
    position: "absolute",
  },
  text5: {
    top: 82,
    lineHeight: 15,
    fontSize: FontSize.size_3xs,
    color: Color.colorBlack,
    textAlign: "center",
    left: 0,
    position: "absolute",
  },
  text6: {
    top: 98,
    lineHeight: 15,
    fontSize: FontSize.size_3xs,
    color: Color.colorBlack,
    textAlign: "center",
    left: 0,
    position: "absolute",
  },
  resultadoDatos: {
    left: 125,
    width: 70,
    top: 0,
  },
  lineIcon: {
    height: 147,
    width: 206,
  },
  datos: {
    top: 3,
    width: 206,
    left: 0,
  },
  tablaDatos: {
    left: 91,
    top: 16,
  },
  tablaDatos2Child: {
    marginLeft: -144.5,
    borderRadius: Border.br_3xs,
    top: 0,
    backgroundColor: Color.colorGhostwhite_100,
  },
  tablaDatos2Item: {
    top: 20,
  },
  tablaDatos2Inner: {
    top: 50,
  },
  tablaDatos2Child1: {
    top: 80,
  },
  item: {
    color: Color.colorBlack,
    fontFamily: GlobalStyles.FontFamily.poppinsMedium,
    fontWeight: "500",
    lineHeight: 15,
    fontSize: FontSize.size_3xs,
    textAlign: "center",
  },
  cliente: {
    top: 30,
    lineHeight: 15,
    fontSize: FontSize.size_3xs,
    color: Color.colorBlack,
    textAlign: "center",
    left: 0,
    position: "absolute",
  },
  sp: {
    top: 45,
    lineHeight: 15,
    fontSize: FontSize.size_3xs,
    color: Color.colorBlack,
    textAlign: "center",
    left: 0,
    position: "absolute",
  },
  cantSolicitada: {
    top: 60,
    lineHeight: 15,
    fontSize: FontSize.size_3xs,
    color: Color.colorBlack,
    textAlign: "center",
    left: 0,
    position: "absolute",
  },
  cantFabricada: {
    top: 75,
    lineHeight: 15,
    fontSize: FontSize.size_3xs,
    color: Color.colorBlack,
    textAlign: "center",
    left: 0,
    position: "absolute",
  },
  cantUltIngreso: {
    top: 90,
    lineHeight: 15,
    fontSize: FontSize.size_3xs,
    color: Color.colorBlack,
    textAlign: "center",
    left: 0,
    position: "absolute",
  },
  nombreDatos2: {
    left: 6,
    width: 126,
    top: 0,
  },
  text7: {
    top: 44,
    lineHeight: 15,
    fontSize: FontSize.size_3xs,
    color: Color.colorBlack,
    textAlign: "center",
    left: 0,
    position: "absolute",
  },
  text8: {
    top: 29,
    lineHeight: 15,
    fontSize: FontSize.size_3xs,
    color: Color.colorBlack,
    textAlign: "center",
    left: 0,
    position: "absolute",
  },
  text9: {
    color: Color.colorBlack,
    fontFamily: GlobalStyles.FontFamily.poppinsMedium,
    fontWeight: "500",
    lineHeight: 15,
    fontSize: FontSize.size_3xs,
    textAlign: "center",
  },
  resultadoDatos2: {
    left: 174,
    width: 52,
    top: 0,
  },
  lineIcon1: {
    height: 76,
    width: 289,
  },
  datos2: {
    top: 5,
    width: 289,
    left: 0,
  },
  tablaDatos2: {
    marginLeft: -145,
    top: 215,
  },
  datosMaquina: {
    position: "absolute",
  },
  tablaChildShadowBox: {
    height: 171,
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_xl,
    width: 312,
    left: 0,
    top: 0,
    position: "absolute",
  },
  sonmetroDb: {
    marginLeft: -57,
    top: 11,
    left: "50%",
  },
  min1: {
    left: 1,
    top: 96,
  },
  max: {
    left: 157,
    top: 96,
  },
  sonometroChild: {
    left: "50%",
    top: 0,
    position: "absolute",
  },
  text14: {
    top: 66,
  },
  sonometroItem: {
    left: "50%",
    top: 0,
    position: "absolute",
  },
  sonometro: {
    top: 41,
    left: 64,
    height: 178,
  },
  tablaSonometro: {
    top: 357,
  },
  min2: {
    left: 1,
  },
  max1: {
    left: 157,
  },
  temSolubleCChild: {
    marginLeft: -93,
    height: 178,
    width: 186,
  },
  text15: {
    top: 92,
  },
  temSolubleCItem: {
    height: 46,
    width: 1,
    borderRightWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    marginLeft: -1.5,
  },
  cr2Tem: {
    marginLeft: -85,
    left: "50%",
    top: 0,
  },
  temSolubleC: {
    height: 204,
    width: 186,
    left: 64,
    top: 15,
    position: "absolute",
  },
  tablaTemSolubleC: {
    top: 553,
  },
  temTinaEnfriamientoC: {
    left: 65,
    top: 44,
  },
  cr2Tem1: {
    marginLeft: -121,
    top: 18,
    left: "50%",
  },
  tablaTemTinaEnfriamiento: {
    top: 746,
    height: 222,
    left: 0,
  },
  image1Icon: {
    top: 21,
    width: 77,
    height: 172,
    left: 5,
    position: "absolute",
  },
  scroll: {
    top: 222,
    height: 494,
    marginLeft: -156,
    left: "50%",
  },
  appbarChild: {
    backgroundColor: "#122a4e",
    width: 350,
    height: 60,
    borderRadius: Border.br_xl,
    left: 0,
    top: 0,
  },
  opcionGlobalChild: {
    borderTopLeftRadius: Border.br_xl,
    borderBottomLeftRadius: Border.br_xl,
    backgroundColor: "#2d4e80",
    width: 110,
    left: 0,
    top: 0,
  },
  eyeicon1: {
    height: "26.67%",
    marginLeft: -15.51,
    top: "25%",
    bottom: "48.33%",
    width: 22,
    left: "50%",
  },
  global1: {
    marginLeft: -23.97,
    top: 35,
    fontWeight: "800",
    fontFamily: GlobalStyles.FontFamily.interExtraBold,
    width: 39,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    color: Color.colorWhite,
    left: "50%",
    position: "absolute",
  },
  opcionGlobal: {
    width: 110,
    left: 0,
    top: 0,
  },
  fileicon: {
    height: "45%",
    top: "13.33%",
    right: 56,
    bottom: "41.67%",
    width: 18,
  },
  informe: {
    left: 43,
    width: 45,
    fontFamily: GlobalStyles.FontFamily.interRegular,
    top: 37,
    textAlign: "left",
    height: 16,
    color: Color.colorWhite,
    position: "absolute",
  },
  opcionInformeChild: {
    width: 130,
  },
  opcionInforme: {
    right: 110,
    width: 130,
  },
  cogicon: {
    height: "33.33%",
    width: "18.56%",
    top: "21.67%",
    right: "40.53%",
    bottom: "45%",
    left: "40.91%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  ajustes: {
    left: 34,
    width: 42,
    fontFamily: GlobalStyles.FontFamily.interRegular,
    top: 37,
    textAlign: "left",
    height: 16,
    color: Color.colorWhite,
    position: "absolute",
  },
  opcionAjustesChild: {
    borderTopRightRadius: Border.br_xl,
    borderBottomRightRadius: Border.br_xl,
    width: 110,
  },
  opcionAjustes: {
    width: "31.43%",
    right: "0%",
    left: "68.57%",
  },
  appbar: {
    top: 725,
    width: 350,
    height: 60,
    left: 5,
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  vectorIcon: {
    width: 16,
    height: 13,
  },
  mquinaCr2: {
    width: 108,
    height: 20,
    marginLeft: 61,
    color: Color.colorBlack,
    fontFamily: GlobalStyles.FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  vectorIcon1: {
    width: 17,
    height: 9,
    marginLeft: 61,
  },
  
  pickerContainer: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    borderRadius: 5,
    margin: 10,
    padding: 5,
    width: 400,
    height: 40,
    textAlign: 'center'

  },
  picker: {
    width: 250,
    height: 40,
    color: 'black',
    fontFamily: 'Poppins-Medium',
    borderWidth: 0,
    textAlign: 'center'
  },
  
  selecopcionlight: {
    top: 153,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_smi,
    backgroundColor: Color.colorWhite,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_xl,
    position: "absolute",
    marginLeft: -156,
    left: "50%",
  },
  globalscreenlight: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.colorGhostwhite_100,
  },
});

export default GlobalScreenLight;
