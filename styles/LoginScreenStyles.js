import { FontSize, Color, Border, Padding } from "./GlobalStyles";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  logooptoIconPosition: {
    left: 0,
    top: 0,
  },
  tituloLayout: {
    height: 92,
    position: "absolute",
  },
  indamaTypo: {
    // fontFamily: FontFamily.poppinsSemiBold,
    fontSize: FontSize.size_xl,
    fontWeight: "600",
    textAlign: "left",
  },
  fieldContentBg: {
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_xl,
  },
  ingresarPosition: {
    zIndex: 1,
    position: "absolute",
  },
  ingresarTypo: {
    // fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_xs,
    textAlign: "left",
  },
  containerElipse: {
    flex: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  Elipse: {
    backgroundColor: "transparent",
    height: "50%", // ajusta la altura según tus necesidades
    width: "145%", // ajusta el ancho según tus necesidades
    borderBottomLeftRadius: 180, // ajusta el radio según tus necesidades
    borderBottomRightRadius: 180,
    position: "absolute",
    top: 0, // ajusta el radio según tus necesidades
  },
  buttonIngresar: {
    backgroundColor: '#10294F',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 20,
    top: 17,
  },
  containerIngresar: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Border.br_xl,
  },
  iconContainer: {
    marginLeft: 90, // Puedes ajustar este valor para cambiar la posición de izquierda a derecha
    marginTop: -1, // Puedes ajustar este valor para cambiar la posición de arriba hacia abajo
  },
  opto: {
    marginLeft: 15,
    top: 8,
    fontSize: 30,
    fontWeight: "900",
    // fontFamily: FontFamily.poppinsBlack,
    textAlign: "left",
    color: Color.colorWhite,
    left: "50%",
    position: "absolute",
  },
  indama: {
    marginLeft: 16,
    top: 53,
    color: Color.colorWhite,
    left: "50%",
    position: "absolute",
  },
  logooptoIcon: {
    width: 92,
    left: 0,
    top: 0,
  },
  titulo: {
    marginLeft: -115,
    top: 43,
    width: 202,
    left: "50%",
    height: 92,
  },
  cardloginChild: {
    marginLeft: "8%",
    boxShadowRadius: 10,
    elevation: 10,
    width: "100%",
    backgroundColor: Color.colorWhite,
    boxShadowOpacity: 1,
    boxShadowOffset: {
      width: 0,
      height: 4,
    },
    boxShadowColor: "rgba(0, 0, 0, 0.25)",
    height: 372,
    top: '0%',
    position: "absolute",
  },
  cardlogin: {
    zIndex: 0,
    position: 'absolute',
    top: "2%",
    left: "-2%",
    right: "0%",
    // transform: 'translate(-50%, -50%)',
    width: '90%', // Ajusta este valor según tus necesidades
    boxShadowOpacity: 1,
    elevation: 4,
    boxShadowRadius: 4,
    boxShadowOffset: {
      width: 0,
      height: 4,
    },
    boxShadowColor: "rgba(0, 0, 0, 0.25)",
    height: '50vh', // Ajusta este valor según tus necesidades
  },
  iniciarSesin: {
    color: "#10294f",
  },
  label1: {
    fontSize: FontSize.size_mini,
    // fontFamily: FontFamily.openSansSemiBold,
    color: Color.colorDarkslategray,
    width: 200,
    fontWeight: "600",
    textAlign: "left",
  },
  label: {
    width: '100%',
    flexDirection: "row",
  },
  placeholder: {
    color: Color.colorSilver,
    flex: 1,
  },
  fieldContent: {
    borderStyle: "solid",
    borderColor: Color.colorSilver,
    borderWidth: 1,
    width: "125%",
    height: 42,
    justifyContent: "center",
    paddingHorizontal: Padding.p_mini,
    paddingVertical: Padding.p_5xs,
    marginTop: 8,
    alignItems: "center",
    flexDirection: "row",
  },
  input: {
    alignItems: "center",
    color: "black",
  },
  input1: {
    marginTop: 12,
    alignItems: "center",
  },
  inputParent: {
    marginTop: 17,
    width: "100%",
    justifyContent: "center",
  },
  btnIngresarChild: {
    width: 140,
    height: 42,
    borderRadius: Border.br_xl,
    zIndex: 0,
  },
  ingresar: {
    top: 12,
    width: '90%',
    zIndex: 1,
    position: "absolute",
    color: Color.colorWhite,
    left: 32,
  },
  vectorIcon: {
    height: "39.53%",
    width: "7.19%",
    top: "30.23%",
    right: "13.67%",
    bottom: "30.23%",
    left: "79.14%",
    maxWidth: "100%",
    maxHeight: "100%",
    zIndex: 2,
    position: "absolute",
    overflow: "hidden",
  },
  btnIngresar: {
    marginTop: 17,
    boxShadowOpacity: 1,
    elevation: 4,
    boxShadowRadius: 4,
    boxShadowOffset: {
      width: 0,
      height: 4,
    },
    boxShadowColor: "rgba(0, 0, 0, 0.25)",
  },
  iniciarSesinParent: {
    top: "13%",
    justifyContent: 'center',
    alignItems: 'center',
    width: "50%"
  },
  cardloginParent: {
    top: '25%',
    left: '10%',
    right: '0%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center', // Centrado vertical
    height: '50%', // Ajusta el valor según sea necesario
    width: '80%', // Ajusta el valor según sea necesario
    position: 'absolute',
  },
  loginscreen: {
    backgroundColor: "#f0f2fa",
    width: "100%",
    height: 800,
    overflow: "hidden",
    flex: 1,
  },
});