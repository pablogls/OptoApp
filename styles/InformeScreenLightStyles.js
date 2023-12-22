import { FontSize, Color, Border, Padding } from "./GlobalStyles";
import { StyleSheet, StatusBar } from "react-native";

export const styles = StyleSheet.create({
  tituloPosition: {
    height: 300,
    width: "100%",
    left: 0,
    top: 0,
    position: "absolute",
  },
  iconContainer: {
    marginLeft: 74, // Puedes ajustar este valor para cambiar la posición de izquierda a derecha
    marginTop: -1, // Puedes ajustar este valor para cambiar la posición de arriba hacia abajo
  },
  textTypo: {
    // // fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "center",
  },
  eyeiconLayout: {
    maxHeight: "100%",
    position: "absolute",
  },

  codigoLayout: {
    height: 29,
  },
  opcin1Typo: {
    textAlign: "left",
    // fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    left: 20,
    top: 5,

  },
  opcin1Typo2: {
    textAlign: "left",
    // fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    left: -45,

  },
  opcin2Typo: {
    textAlign: 'center',
    // fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    left: 19,

  },
  fechaFin1Layout: {
    width: 62,
    color: Color.colorBlack,
  },
  fechaFin2Layout: {
    width: 100,
    color: Color.colorBlack,
  },
  textLayout: {
    width: 30,
    position: "absolute",
  },
  cr2Typo: {
    height: 14,
    top: 7,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: Color.colorBlack,
    fontSize: FontSize.size_3xs,
    textAlign: "center",
    // fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  datosinformeLayout: {
    top: 5,
  },
  btnexportarLayout: {
    height: 45,
    width: 100,
    position: "absolute",
  },
  childPosition: {
    backgroundColor: Color.colorDarkslateblue,
    borderRadius: Border.br_xl,
    left: 0,
    top: 0,
  },
  fechaTypo: {
    left: 11,
    fontSize: 12,
    top: 13,
    textAlign: "left",
    // fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  buscarTypo: {
    left: 25,
    fontSize: FontSize.size_xs,
    top: 12,
    textAlign: "left",
    // fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  vectorIconPosition: {
    bottom: "26.67%",
    right: "15.84%",
    top: "26.67%",
    height: "46.67%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  appbarLayout: {
    width: 350,
    height: 60,
    position: "absolute",
  },
  opcionChildLayout: {
    width: 110,
    position: "absolute",
  },
  opcionChildBg: {
    backgroundColor: Color.colorGainsboro,
    left: 0,
  },
  opcionLayout: {
    width: 130,
    height: 60,
    top: 0,
    position: "absolute",
  },
  ajustesTypo: {
    height: 16,
    // fontFamily: FontFamily.InterRegular,
    top: 37,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  opcionPosition: {
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  turnoLayout: {
    width: 155,
    height: "15%",
    backgroundColor: 'white',
    borderTopLeftRadius: 20, // Radio de la esquina superior izquierda
    borderTopRightRadius: 20, // Radio de la esquina superior derecha
    borderBottomLeftRadius: 20, // Radio de la esquina inferior izquierda
    borderBottomRightRadius: 20, // Radio de la esquina inferior derecha
  },
  todosTypo: {
    top: 14,
    left: 23,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    color: Color.colorBlack,
    // // fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  turnoItemLayout: {
    height: 28,
    width: 75,
    top: "50%",
    position: "absolute",
  },
  filtromaqlightFlexBox: {
    paddingVertical: Padding.p_smi,
    paddingHorizontal: Padding.p_5xl,
    top: 8,
    flexDirection: "row",
    height: 28,
    width: 75,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorGhostwhite,
    position: "absolute",
  },
  maquinaLayout: {
    width: 160,
    height: "15%",
    backgroundColor: 'white',
    borderTopLeftRadius: 20, // Radio de la esquina superior izquierda
    borderTopRightRadius: 20, // Radio de la esquina superior derecha
    borderBottomLeftRadius: 20, // Radio de la esquina inferior izquierda
    borderBottomRightRadius: 20, // Radio de la esquina inferior derecha
  },
  fechaWrapperLayout: {
    width: 240,
    height: "15%",
    backgroundColor: 'white',
    borderTopLeftRadius: 20, // Radio de la esquina superior izquierda
    borderTopRightRadius: 20, // Radio de la esquina superior derecha
    borderBottomLeftRadius: 20, // Radio de la esquina inferior izquierda
    borderBottomRightRadius: 20, // Radio de la esquina inferior derecha
  },
  calendariolightLayout: {
    width: 115,
    paddingVertical: Padding.p_smi,
    paddingHorizontal: Padding.p_5xl,
    flexDirection: "row",
    top: 8,
    height: 28,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorGhostwhite,
    position: "absolute",
  },
  btnLayout: {
    width: 101,
    height: 45,
    position: "absolute",
  },
  tituloChild: {
    backgroundColor: "transparent",
  },
  informe: {
    marginLeft: -113,
    top: 33,
    fontSize: 30,
    textAlign: "center",
    color: Color.colorWhite,
    left: "50%",
    position: "absolute",
  },
  vectorIcon: {
    width: "35.4%",
    left: "64.6%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    bottom: "0%",
    top: "0%",
    height: "100%",
    right: "0%",
  },
  encabezado: {
    marginLeft: -59,
    top: "8%",
    width: 226,
    height: 105,
    left: "50%",
    position: "absolute",
  },
  cardChild: {
    width: '85%',
    height: 0, // Ajusta la altura según sea necesario para mostrar solo el borde superior
    position: 'absolute',
    top: 150,
    left: '7.5%',
    backgroundColor: 'white',
    borderRadius: 20,
    borderBottomWidth: 60, // Altura del borde inferior
    borderBottomColor: 'transparent', // Hace que el borde inferior sea transparente
    shadowColor: 'rgba(0, 0, 0, 0.8)',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardItem: {
    backgroundColor: 'white',
    borderRadius: 20,
    width: '85%',
    aspectRatio: 2,
    alignSelf: 'center',
    top: 100, // Ajusta el porcentaje según tus necesidades
    shadowColor: 'black',
    shadowOffset: {
      width: 4,
      height: 4, // Altura positiva para la sombra solo en la parte inferior
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
    height: '45%',
    position: 'absolute',
  },
  codigoMquina: {
    left: "5%",
    width: 55,
    color: Color.colorBlack,
    fontSize: 11,
    top: 4,
    textAlign: "center",
    // // fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  velocidadMxima: {
    marginLeft: -20,
    width: 100,
    color: Color.colorBlack,
    fontSize: 11,
    top: 4,
    height: 29,
    position: "absolute",
    left: "47%",
    textAlign: 'center',
  },
  disponibilidad: {
    marginRight: -77,
    width: 100,
    color: Color.colorBlack,
    fontSize: 11,
    top: 4,
    height: 29,
    position: "absolute",
    right: "30%",
  },
  tiempoActivo: {
    width: 80,
    color: Color.colorBlack,
    fontSize: 11,
    top: 4,
    height: 29,
    position: "absolute",
    left: "24%",
    marginLeft: -10,
    textAlign: 'center',
    marginLeft: -7,
  },
  tiempoActivo1: {
    width: 80,
    color: Color.colorBlack,
    fontSize: 12,
    top: 5,
    height: 29,
    position: "absolute",
    marginLeft: 61,
    left: 100,
  },

  text: {
    marginRight: -40,
    width: 100,
    color: Color.colorBlack,
    fontSize: 12,
    top: 4,
    height: 29,
    position: "absolute",
    right: "10%",
  },
  codigoMquinaParent: {
    top: 0,
    flexDirection: 'row', // Para ubicar los textos horizontalmente
    justifyContent: 'space-between', // Para distribuir los textos de manera uniforme
    alignItems: 'center', // Para centrar verticalmente los textos
    borderBottomWidth: 1, // Altura de la línea
    borderBottomColor: 'rgba(0, 0, 0, 0.1)', // Cambia la opacidad aquí
    paddingBottom: 5, // Espacio entre la línea y los textos
  },
  menudatosinforme: {
    width: 306,
    height: 29,
  },
  cr1: {
    left: 12,
    width: 200,
  },
  cr2: {
    left: 100,
    width: 200,
  },
  cr3: {
    left: 200,
    width: 200,
  },
  m36s: {
    left: 61,
    width: 57,
  },
  text1: {
    top: 100,
    left: "20%",
    width: "40%",
    height: 11,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: Color.colorBlack,
    fontSize: FontSize.size_3xs,
    textAlign: "center",
    // // fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  text2: {
    left: 196,
    width: 60,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  vector: {
    left: 279,
    height: 20,
    top: 4,
  },
  datosinforme11: {
    marginTop: 4,
  },
  datos: {
    marginLeft: 30,
    top: 145,
    shadowRadius: 0,
    elevation: 0,
    width: "80%",
    height: "40%",
    paddingRight: 16,
    shadowOpacity: 1,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    left: -10,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_xl,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  card: {
    top: 100,
    width: "95%",
    height: "100%",
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorWhite,
    right: -10,
  },
  rectanguloCard: {
    width: "100%",
    height: "100%",
    top: "19%",
    backgroundColor: 'white',
    borderTopLeftRadius: 45, // Radio de la esquina superior izquierda
    borderTopRightRadius: 45, // Radio de la esquina superior derecha
    borderBottomLeftRadius: 20, // Radio de la esquina inferior izquierda
    borderBottomRightRadius: 20, // Radio de la esquina inferior derecha
  },
  filtros1Container: {
    flexDirection: 'row', // Alinear horizontalmente los elementos
    width: 1100,
    left: 10,
    height: 1000,
  },
  btnexportarChild: {
    height: 45,
    width: 100,
    position: "absolute",
  },
  exportar: {
    fontSize: FontSize.size_xs,
    width: 53,
    color: Color.colorWhite,
  },
  vectorIcon1: {
    width: "15.84%",
    left: "68.32%",
  },
  btnexportar: {
    top: 665,
    left: 130,
    display: "none",
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  appbarChild: {
    backgroundColor: "#122a4e",
    height: 60,
    borderRadius: Border.br_xl,
    left: 0,
    top: 0,
  },
  eyeicon: {
    height: "26.67%",
    marginLeft: -15.51,
    top: "25%",
    bottom: "48.33%",
    width: 22,
    left: "50%",
  },
  global: {
    marginLeft: -23.97,
    top: 35,
    fontWeight: "800",
    // fontFamily: FontFamily.interExtraBold,
    width: 39,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    color: Color.colorWhite,
    left: "50%",
    position: "absolute",
  },
  opcionGlobalChild: {
    borderTopLeftRadius: Border.br_xl,
    borderBottomLeftRadius: Border.br_xl,
    width: 110,
    position: "absolute",
    height: 60,
    top: 0,
  },
  opcionGlobal: {
    marginLeft: -175,
    bottom: "0%",
    top: "0%",
    height: "100%",
    width: 110,
    left: "50%",
  },
  opcionInformeChild: {
    backgroundColor: "#2d4e80",
    left: 0,
  },
  fileicon: {
    height: "45%",
    top: "13.33%",
    right: 56,
    bottom: "41.67%",
    width: 18,
  },
  informe1: {
    left: 43,
    width: 45,
  },
  opcionInformeItem: {
    backgroundColor: Color.colorGainsboro,
    left: 0,
  },
  opcionInforme: {
    left: 110,
  },
  cogicon: {
    height: "33.33%",
    width: "18.56%",
    top: "21.67%",
    right: "40.53%",
    bottom: "45%",
    left: "40.91%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  ajustes: {
    left: 34,
    width: 42,
  },
  opcionAjustesChild: {
    borderTopRightRadius: Border.br_xl,
    borderBottomRightRadius: Border.br_xl,
    width: 110,
    position: "absolute",
    height: 60,
    top: 0,
  },
  opcionAjustes: {
    width: "31.43%",
    left: "68.57%",
    right: "0%",
    bottom: "0%",
    top: "0%",
    position: "absolute",
  },
  appbar: {
    top: 724,
    left: 5,
    height: 60,
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  turnoChild: {
    borderRadius: Border.br_xl,
    left: 0,
    top: 0,
    backgroundColor: Color.colorWhite,
  },
  turno1: {
    left: 9,
    fontSize: FontSize.size_xs,
  },
  turnoItem: {
    left: 0,
    marginTop: -13.5,
    width: 75,
    display: "none",
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorGhostwhite,
  },
  todos: {
    left: 79,
    fontSize: FontSize.size_xs,
    display: "none",
  },
  opcin1: {
    fontSize: FontSize.size_xs,
    color: Color.colorBlack,
  },
  filtroturnolight: {
    left: 55,
  },
  turno: {
    left: 0,
    top: 0,
  },
  turnoWrapper: {
    left: "55%",
    zIndex: 0,
    elevation: 4,
    shadowRadius: 4,
    top: "-40%",
    shadowOpacity: 1,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  maquinaChild: {
    borderRadius: Border.br_xl,
    top: 0,
    backgroundColor: Color.colorWhite,
  },
  groupChild: {
    marginTop: -14,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorGhostwhite,
    left: 0,
  },
  todos1: {
    top: 5,
    left: 19,
    fontSize: FontSize.size_xs,
    color: Color.colorBlack,
    position: "absolute",
  },
  rectangleParent: {
    left: 68,
    marginTop: -13.5,
    width: 75,
    display: "none",
  },
  maquina: {
    top: 0,
  },
  opcin11: {
    width: 54,
    left: 11,
    top: 1,
    fontSize: FontSize.size_xs,
    color: Color.colorBlack,
    textAlign: "center",
  },
  opcin12: {
    width: 54,
    left: 12,
    top: 1,
    fontSize: FontSize.size_xs,
    color: Color.colorBlack,
    textAlign: "center",
  },
  filtromaqlight: {
    left: 66,
  },
  maquinaParent: {
    zIndex: 1,
    elevation: 4,
    shadowRadius: 4,
    top: "-55%",
    shadowOpacity: 1,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  fechaInicioChild: {
    borderRadius: Border.br_xl,
    left: 0,
    top: 0,
    backgroundColor: Color.colorWhite,
  },
  fechaInicio1: {
    width: 89,
    fontSize: FontSize.size_xs,
    color: Color.colorBlack,
  },
  text61: {
    width: 74,
    fontSize: FontSize.size_xs,
    color: Color.colorBlack,
  },
  vectorIcon2: {
    width: 17,
    height: 17,
  },
  calendariolight: {
    left: 87,
  },
  fechaInicio: {
    left: 20,
    top: 0,
  },
  fechaInicioWrapper: {
    left: "110%",
    zIndex: 2,
    elevation: 4,
    shadowRadius: 4,
    top: "-70%",
    shadowOpacity: 1,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  fechaFin1: {
    fontSize: FontSize.size_xs,
    width: 82,
    color: Color.colorBlack,
  },
  calendariolight1: {
    left: 78,
  },
  fechaFinWrapper: {
    left: "195%",
    zIndex: 3,
    elevation: 4,
    shadowRadius: 4,
    top: "-85%",
    shadowOpacity: 1,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  btnBuscarChild: {
    backgroundColor: Color.colorDarkslateblue,
    borderRadius: Border.br_xl,
    left: 0,
    top: 0,
  },
  buscar: {
    width: 48,
    fontSize: FontSize.size_xs,
    color: Color.colorWhite,

  },
  vectorIcon4: {
    width: "20.79%",
    left: "63.37%",
  },
  btnBuscar: {
    left: 0,
    top: 0,
  },
  buttonBuscar: {
    backgroundColor: '#10294F',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 20,
    top: -280,
    left: 815,
  },
  containerBuscar: {
    flex: 1,
    alignItems: 'center',
    borderRadius: Border.br_xl,
  },
  btnBuscarWrapper: {
    left: 780,
    zIndex: 4,
    elevation: 4,
    shadowRadius: 4,
    top: 3,
    shadowOpacity: 1,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  filtros1: {
    top: 180,
    left: 15,
    width: 330,
    height: 280,
  },
  exportar1: {
    fontSize: FontSize.size_xs,
    width: 53,
    color: Color.colorWhite,
  },
  vectorIcon5: {
    width: 16,
    height: 21,
    marginLeft: 4,
  },
  btnexportarlight: {
    top: 667,
    left: 132,
    paddingHorizontal: Padding.p_2xs,
    paddingVertical: Padding.p_xs,
    flexDirection: "row",
    backgroundColor: Color.colorDarkslateblue,
    alignItems: "center",
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  informescreenlight: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },




  dato1: {
    marginLeft: 125.5,
    width: 100,
    color: Color.colorBlack,
    fontSize: 12,
    top: 4,
    height: 29,
    position: "absolute",
    left: "50%",
  },
  dato2: {
    marginLeft: 125.5,
    width: 100,
    color: Color.colorBlack,
    fontSize: 12,
    top: 4,
    height: 29,
    position: "absolute",
    left: "50%",
  },
  dato3: {
    marginLeft: 125.5,
    width: 100,
    color: Color.colorBlack,
    fontSize: 12,
    top: 4,
    height: 29,
    position: "absolute",
    left: "50%",
  },
  dato4: {
    marginLeft: 125.5,
    width: 100,
    color: Color.colorBlack,
    fontSize: 12,
    top: 4,
    height: 29,
    position: "absolute",
    left: "50%",
  },


  container: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#ffffff', // Fondo blanco completamente opaco
    padding: 10,
    margin: 5,
    borderRadius: 15, // Bordes más ovalados
    borderWidth: 1, // Añade un borde para destacar
    borderColor: '#3498db', // Color del borde
  },
  dateButton: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 10,
    margin: 5,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#3498db',
    alignItems: 'center',
  },
  searchButton: {
    backgroundColor: '#10294F',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 20,
    top: -278,
    left: 815,
  },
  buttonText: {
    color: '#000', // Texto negro
    fontSize: 16,
    marginRight: 10,
  },
  icon: {
    width: 20,
    height: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
  },
  containerScrollview: {
    flex: 1,
    top: -20,
  },
});