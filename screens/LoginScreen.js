import * as React from "react";
import { TouchableOpacity as Pressable, Image, Text, View, TextInput } from "react-native";
import { styles } from "../styles/LoginScreenStyles";
import { useFonts, Poppins_400Regular, Poppins_900Black, Poppins_600SemiBold } from "@expo-google-fonts/poppins";
import { OpenSans_600SemiBold } from "@expo-google-fonts/open-sans";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from "@react-navigation/native";
import InformeScreenLight from "./InformeScreenLight";

const LogInScreen = () => {

  const navigation = useNavigation();

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_900Black,
    OpenSans_600SemiBold
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.loginscreen}>
      <View style={styles.containerElipse}>
        <LinearGradient colors={['#3B6098', '#11294E']} style={styles.Elipse} />
      </View>
      <View style={[styles.titulo, styles.tituloLayout]}>
        <Text style={{ ...styles.opto, fontFamily: "Poppins_900Black" }}>OPTO</Text>
        <Text style={{ ...styles.indama, ...styles.indamaTypo, fontFamily: "Poppins_600SemiBold" }}>Indama</Text>
        <Image
          style={[styles.logooptoIcon, styles.tituloLayout]}
          resizeMode="cover"
          source={require("../assets/logoopto.png")}
        />
      </View>
      <View style={styles.cardloginParent}>
        <View style={styles.cardlogin}>
          <View style={[styles.cardloginChild, styles.fieldContentBg]} />
        </View>
        <View style={[styles.iniciarSesinParent, styles.ingresarPosition]}>
          <Text style={{ ...styles.iniciarSesin, ...styles.indamaTypo, fontFamily: "Poppins_600SemiBold" }}>
            Iniciar Sesión
          </Text>
          <View style={styles.inputParent}>
            <View style={styles.input}>
              <View style={styles.label}>
                <Text style={{ ...styles.label1, fontFamily: "OpenSans_600SemiBold" }}>Usuario</Text>
              </View>
              <View style={[styles.fieldContent, styles.fieldContentBg]}>
                <TextInput
                  style={{ ...styles.placeholder, ...styles.ingresarTypo, fontFamily: "Poppins_400Regular", color: "black" }}
                  placeholder="Nombre de usuario"
                />
              </View>
            </View>
            <View style={styles.input1}>
              <View style={styles.label}>
                <Text style={{ ...styles.label1, fontFamily: "OpenSans_600SemiBold" }}>Contraseña</Text>
              </View>
              <View style={[styles.fieldContent, styles.fieldContentBg]}>
                <TextInput
                  style={{ ...styles.placeholder, ...styles.ingresarTypo, fontFamily: "Poppins_400Regular", color: "black" }}
                  placeholder="***********"
                  secureTextEntry={true} // Asegura que el texto esté oculto
                />
              </View>
            </View>
          </View>
          <View style={styles.containerIngresar}>
            <Pressable
              style={styles.buttonIngresar}
              onPress={() => {
                // Realiza cualquier lógica de autenticación o validación aquí si es necesario
            
                // Navega a la pantalla InformeScreenLight
                navigation.navigate("InformeScreenLight");
              }}
            >
              <Text style={{ ...styles.ingresar, ...styles.ingresarTypo, fontFamily: "Poppins_400Regular" }}>Ingresar</Text>
              <View style={styles.iconContainer}>
                <FontAwesomeIcon icon={faAngleRight} size={23} style={{ color: "#ffffff" }} />
              </View>
            </Pressable>
          </View>
        </View>
      </View>
    </View >
  );
};

export default LogInScreen;