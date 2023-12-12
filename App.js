import { StyleSheet, Text, View,  } from 'react-native';
import React, { useState, useEffect } from 'react';
import SplashScreen from './screens/SplashScreen';
import { GLOBAL_URL } from './GlobalURL.js';
import GlobalScreenLight from './screens/GlobalScreenLight';




export default function App() {
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

  return (
    <GlobalScreenLight />


  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
});