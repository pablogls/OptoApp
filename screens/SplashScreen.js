import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import GlobalStyles from "../styles/GlobalStyles";
import * as Font from 'expo-font';

const SplashScreen = () => {
  const [fontsLoaded, setFontsLoaded] = React.useState(false);

  React.useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        'Poppins-Black': require('../assets/fonts/Poppins-Black.ttf'),
        'Poppins-SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
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
    <LinearGradient
      style={styles.splashscreen}
      locations={[0, 1]}
      colors={["#3b6098", "#11294e"]}
    >
      <View style={[styles.titulo, styles.tituloLayout]}>
        {/*<Text style={[styles.opto, styles.optoPosition]}>OPTO</Text>
        <Text style={[styles.indama, styles.optoPosition]}>Indama</Text>*/}
        <Image
          style={[styles.logooptoIcon, styles.tituloLayout]}
          contentFit="cover"
          source={require("../assets/LogoOPTO.png")}
        />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  tituloLayout: {
    heigh: 400,
    position: "absolute",
  },
  optoPosition: {
    textAlign: "left",
    color: GlobalStyles.Color.colorWhite,
    left: "50%",
    position: "absolute",
  },
  opto: {
    marginLeft: -86,
    top: 193,
    fontSize: 60,
    fontWeight: "900",
    fontFamily: GlobalStyles.FontFamily.poppinsBlack,
    width: 171,
  },
  indama: {
    marginLeft: -61,
    top: 260,
    fontSize: 30,
    fontWeight: "600",
    fontFamily: GlobalStyles.FontFamily.poppinsSemiBold,
  },
  logooptoIcon: {
    top: 120,
    left: -15,
    height: 250,
    width: 250,
    position: "absolute",
  },
  titulo: {
    marginLeft: -100,
    top: 184,
    height: 305,
    left: "50%",
    width: 400,
    position: "absolute",
  },
  splashscreen: {
    flex: 1,
    width: "100%",
    height: "100%",
    overflow: "hidden",
    backgroundColor: "transparent",
  },
});

export default SplashScreen;