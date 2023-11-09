import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { Color, FontFamily } from "../GlobalStyles";

const Icon1 = () => {
  return (
    <View style={styles.icon}>
      <View style={[styles.titulo, styles.tituloLayout]}>
        <View style={styles.texto}>
          <Text style={[styles.opto, styles.optoPosition]}>OPTO</Text>
          <Text style={[styles.indama, styles.optoPosition]}>Indama</Text>
        </View>
        <Image
          style={[styles.logooptoIcon, styles.tituloLayout]}
          resizeMode="cover"
          source={require("../assets/logoopto.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tituloLayout: {
    height: 190,
    width: 190,
    position: "absolute",
  },
  optoPosition: {
    textAlign: "left",
    color: Color.colorWhite,
    left: "50%",
    position: "absolute",
  },
  opto: {
    marginLeft: -64.98,
    fontSize: 60,
    fontWeight: "900",
    fontFamily: FontFamily.poppinsBlack,
    height: 68,
    top: 0,
    width: 130,
  },
  indama: {
    marginLeft: -45.98,
    top: 51,
    fontSize: 30,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    width: 92,
    height: 34,
  },
  texto: {
    marginLeft: -60.61,
    top: 78,
    height: 85,
    display: "none",
    width: 130,
    left: "50%",
    position: "absolute",
  },
  logooptoIcon: {
    left: 0,
    top: 0,
  },
  titulo: {
    marginLeft: -95,
    top: 10,
    left: "50%",
  },
  icon: {
    borderRadius: 20,
    backgroundColor: "#3a5f97",
    flex: 1,
    width: "100%",
    height: 210,
    overflow: "hidden",
  },
});

export default Icon1;