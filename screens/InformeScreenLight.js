import * as React from "react";
import { TouchableOpacity as Pressable, Image, Text, View, TextInput, ScrollView, SafeAreaView } from "react-native";
import { useFonts, Poppins_500Medium, Poppins_800ExtraBold } from "@expo-google-fonts/poppins";
import { Inter_400Regular } from "@expo-google-fonts/inter";;
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { styles } from "../styles/InformeScreenLightStyles";

const InformeScreenLight = () => {

  const [fontsLoaded] = useFonts({
    Poppins_500Medium,
    Poppins_800ExtraBold,
    Inter_400Regular
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.informescreenlight}>

      <View style={styles.tituloPosition}>
        <LinearGradient
          style={[styles.tituloChild, styles.tituloPosition]}
          locations={[0, 1]}
          colors={["#2e4f81", "#132c51"]}
          useAngle={true}
          angle={180}
        />
        <View style={styles.encabezado}>
          <Text style={{ ...styles.informe, ...styles.textTypo, fontFamily: "Poppins_500Medium" }}>Informe</Text>
          <Image
            style={[styles.vectorIcon, styles.eyeiconLayout]}
            resizeMode="cover"
            source={require("../assets/fileIcon.png")}
          />
        </View>
      </View>

      <View style={styles.rectanguloCard}>

        <SafeAreaView style={styles.containerScrollview}>
          <ScrollView
            horizontal={true}// Esto permite que el contenido sea deslizable horizontalmente
            contentContainerStyle={styles.filtros1Container}
            showsHorizontalScrollIndicator={false} // Agrega este estilo para el contenedor de ScrollView
          >
            <View style={styles.filtros1}>
              <View style={[styles.turnoWrapper, styles.turnoLayout]}>
                <View style={[styles.turno, styles.turnoLayout]}>
                  <View style={[styles.turnoChild, styles.turnoLayout]} />
                  <Text style={{ ...styles.turno1, ...styles.todosTypo, fontFamily: "Poppins_500Medium" }}>Turno</Text>
                  <View style={[styles.filtroturnolight, styles.filtromaqlightFlexBox]}>
                    <Text style={{ ...styles.opcin12, ...styles.opcin2Typo, fontFamily: "Poppins_500Medium" }}>Todos</Text>
                  </View>
                </View>
              </View>
              <View style={[styles.maquinaParent, styles.maquinaLayout]}>
                <View style={[styles.maquina, styles.maquinaLayout]}>
                  <View style={[styles.maquinaChild, styles.maquinaLayout]} />
                  <Text style={{ ...styles.turno1, ...styles.todosTypo, fontFamily: "Poppins_500Medium" }}>Máquina</Text>
                </View>
                <View style={[styles.filtromaqlight, styles.filtromaqlightFlexBox]}>
                  <Text style={{ ...styles.opcin11, ...styles.textTypo, fontFamily: "Poppins_500Medium" }}>Todos</Text>
                </View>
              </View>
              <View style={[styles.fechaInicioWrapper, styles.fechaWrapperLayout]}>
                <View style={[styles.fechaInicio, styles.fechaWrapperLayout]}>
                  <View
                    style={[styles.fechaInicioChild, styles.fechaWrapperLayout]}
                  />
                  <Text style={{ ...styles.fechaInicio1, ...styles.fechaTypo, fontFamily: "Poppins_500Medium" }}>
                    Fecha Inicio
                  </Text>
                  <View
                    style={[styles.calendariolight, styles.calendariolightLayout]}
                  >
                    <Text style={{ ...styles.tiempoActivo1, ...styles.opcin1Typo2, fontFamily: "Poppins_500Medium" }}>01/10/2023</Text>
                    <Image
                      style={styles.vectorIcon2}
                      resizeMode="cover"
                      source={require("../assets/calendario.png")}
                    />
                  </View>
                </View>
              </View>
              <View style={[styles.fechaFinWrapper, styles.fechaWrapperLayout]}>
                <View style={[styles.fechaInicio, styles.fechaWrapperLayout]}>
                  <View
                    style={[styles.fechaInicioChild, styles.fechaWrapperLayout]}
                  />
                  <Text style={{ ...styles.fechaFin1, ...styles.fechaTypo, fontFamily: "Poppins_500Medium" }}>Fecha Fin</Text>
                  <View
                    style={[styles.calendariolight1, styles.calendariolightLayout]}
                  >
                    <Text style={{ ...styles.tiempoActivo, ...styles.opcin1Typo, fontFamily: "Poppins_500Medium" }}>01/10/2023</Text>
                    <Image
                      style={styles.vectorIcon2}
                      resizeMode="cover"
                      source={require("../assets/calendario.png")}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.containerBuscar}>
                <Pressable style={styles.buttonBuscar}>
                  <Text style={{ ...styles.buscar, ...styles.buscarTypo, fontFamily: "Poppins_500Medium" }}>Buscar</Text>
                  <View style={styles.iconContainer}>
                    <FontAwesomeIcon icon={faSearch} size={23} style={{ color: "#ffffff", }} />
                  </View>
                </Pressable>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
        
        <View style={[styles.cardItem, styles.cardLayout]}>
          <View style={[ styles.appbarShadowBox]} /> 
          <View style={[styles.codigoMquinaParent]}>
            <Text style={{ ...styles.codigoMquina, ...styles.fechaFin1Layout, fontFamily: "Poppins_500Medium" }}>
              Codigo Máquina
            </Text>
            <Text style={{ ...styles.velocidadMxima, ...styles.fechaFin1Layout, fontFamily: "Poppins_500Medium" }}>
              Velocidad Máxima
            </Text>
            <Text style={{ ...styles.disponibilidad, ...styles.fechaFin2Layout, fontFamily: "Poppins_500Medium" }}>
              Disp.
            </Text>
            <Text
              style={{ ...styles.tiempoActivo, ...styles.fechaFin1Layout, fontFamily: "Poppins_500Medium" }}>
              Tiempo Activo
            </Text>
            <Text style={{ ...styles.text, ...styles.fechaFin1Layout, fontFamily: "Poppins_500Medium" }}>
              #
            </Text>
          </View>
        </View>

        <View style={[styles.cardChild]}>
          <View style={[styles.datosinformeLayout]}>
            <Text style={{ ...styles.cr1, ...styles.cr2Typo, fontFamily: "Poppins_500Medium" }}>CR2</Text>
            <Text style={{ ...styles.cr2, ...styles.cr2Typo, fontFamily: "Poppins_500Medium" }}>13m 36s</Text>
            <Text style={{ ...styles.text1, fontFamily: "Poppins_500Medium" }}>36.86</Text>
            <Text style={{ ...styles.cr3, ...styles.cr2Typo, fontFamily: "Poppins_500Medium" }}>32.28</Text>
            <Pressable
              style={[styles.vector, styles.textLayout]}
              onPress={() => { }}
            >
              <Image
                style={styles.icon}
                resizeMode="cover"
                source={require("../assets/verYellow.png")}
              />
            </Pressable>
          </View>
        </View>
        
        {/* <View style={[styles.appbar, styles.appbarLayout]}>
          <View style={[styles.appbarChild, styles.appbarLayout]} />
          <View style={[styles.opcionGlobal, styles.opcionChildLayout]}>

            <Image
              style={[styles.eyeicon, styles.eyeiconLayout]}
              resizeMode="cover"
              source={require("../assets/EyeIcon.png")}
            />
            <Text style={{ ...styles.global, fontFamily: "Poppins_800ExtraBold" }}>Global</Text>
            <Pressable
              style={[styles.opcionGlobalChild, styles.opcionChildBg]}
              onPress={() => { }}
            />
          </View>
          <View style={[styles.opcionInforme, styles.opcionLayout]}>
            <View style={[styles.opcionInformeChild, styles.opcionLayout]} />
            <Image
              style={[styles.fileicon, styles.eyeiconLayout]}
              resizeMode="cover"
              source={require("../assets/FileIcon2.png")}
            />
            <Text style={{ ...styles.informe1, ...styles.ajustesTypo, fontFamily: "Inter_400Regular" }}>{`Informe`}
            </Text>
            <View style={[styles.opcionInformeItem, styles.opcionLayout]} />
          </View>
          <View style={[styles.opcionAjustes, styles.opcionPosition]}>
            <Image
              style={[styles.cogicon, styles.eyeiconLayout]}
              resizeMode="cover"
              source={require("../assets/CogIcon.png")}
            />
            <Text style={{ ...styles.ajustes, ...styles.ajustesTypo, fontFamily: "Inter_400Regular" }}>Ajustes</Text>
            <Pressable
              style={[styles.opcionAjustesChild, styles.opcionChildBg]}
              onPress={() => { }}
            />
          </View>
        </View> */}
        
        <View style={styles.btnexportarlight}>
          <Text style={{ ...styles.tiempoActivo, ...styles.opcin1Typo, fontFamily: "Poppins_500Medium" }}>Exportar</Text>
          <View style={styles.iconContainer}>
            <Image
              style={styles.vectorIcon5}
              resizeMode="cover"
              source={require("../assets/excel.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default InformeScreenLight;
