import * as React from "react";
import { Image, StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const SplashScreen = () => {
  return (
    <LinearGradient
      style={styles.splashscreen}
      locations={[0, 0.56, 1]}
      colors={["#3b6098", "#23416e", "#11294e"]}
      useAngle={true}
      angle={180}
    >
      <Image
        style={styles.tituloIcon}
        resizeMode="cover"
        source={require("../assets/titulo.png")}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  tituloIcon: {
    position: "absolute",
    top: 275,
    left: 55,
    width: 250,
    height: 250,
  },
  splashscreen: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: "transparent",
  },
});

export default SplashScreen;