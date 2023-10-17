import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,  } from 'react-native';
import React, { useState, useEffect } from 'react';


export default function App() {
  const [maquinas, setMaquinas] = useState([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      fetch('http://opto.indama.cl/api/bitacora/datatest?api_key=key_cur_prod_ifnndPaqmTa5xQEi5Vcb9wKwbCf65c3BjVGyBB')
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
    <View>
      <View>
        <Text>Código de máquina: {maquinas[0]?.codigo}</Text>
        <Text>Estado: {maquinas[0]?.estado}</Text>
        <Text>Velocidad: {maquinas[0]?.velocidad}</Text>
        <Text>Tiempo Activo: {maquinas[0]?.tiempoActivo}</Text>
        <Text>cantidad: {maquinas[0]?.cantidad}</Text>
        <Text>Cantidad por minuto: {maquinas[0]?.cantidadMin}</Text>
        <Text>Inicio: {maquinas[0]?.inicio}</Text>
        <Text>Ultimo Status: {maquinas[0]?.ultimoStatus}</Text>
        <Text>Tiempo Activa: {maquinas[0]?.tiempoActiva}</Text>
        <Text>disponibilidad: {maquinas[0]?.disponibilidad}</Text>
        <Text>Cliente SAP: {maquinas[0]?.SAPCLIENTE}</Text>
      </View>

      <View>
        <Text>Código de máquina: {maquinas[1]?.codigo}</Text>
        <Text>Estado: {maquinas[1]?.estado}</Text>
        <Text>Velocidad: {maquinas[1]?.velocidad}</Text>
        <Text>Tiempo Activo: {maquinas[1]?.tiempoActivo}</Text>
        <Text>cantidad: {maquinas[1]?.cantidad}</Text>
        <Text>Cantidad por minuto: {maquinas[1]?.cantidadMin}</Text>
        <Text>Inicio: {maquinas[1]?.inicio}</Text>
        <Text>Ultimo Status: {maquinas[1]?.ultimoStatus}</Text>
        <Text>Tiempo Activa: {maquinas[1]?.tiempoActiva}</Text>
        <Text>disponibilidad: {maquinas[1]?.disponibilidad}</Text>
        <Text>Cliente SAP: {maquinas[1]?.SAPCLIENTE}</Text>
      </View>

      <View>
        <Text>Código de máquina: {maquinas[2]?.codigo}</Text>
        <Text>Estado: {maquinas[2]?.estado}</Text>
        <Text>Velocidad: {maquinas[2]?.velocidad}</Text>
        <Text>Tiempo Activo: {maquinas[2]?.tiempoActivo}</Text>
        <Text>cantidad: {maquinas[2]?.cantidad}</Text>
        <Text>Cantidad por minuto: {maquinas[2]?.cantidadMin}</Text>
        <Text>Inicio: {maquinas[2]?.inicio}</Text>
        <Text>Ultimo Status: {maquinas[2]?.ultimoStatus}</Text>
        <Text>Tiempo Activa: {maquinas[2]?.tiempoActiva}</Text>
        <Text>disponibilidad: {maquinas[2]?.disponibilidad}</Text>
        <Text>Cliente SAP: {maquinas[2]?.SAPCLIENTE}</Text>
      </View>

      <View>
        <Text>Código de máquina: {maquinas[3]?.codigo}</Text>
        <Text>Estado: {maquinas[3]?.estado}</Text>
        <Text>Velocidad: {maquinas[3]?.velocidad}</Text>
        <Text>Tiempo Activo: {maquinas[3]?.tiempoActivo}</Text>
        <Text>cantidad: {maquinas[3]?.cantidad}</Text>
        <Text>Cantidad por minuto: {maquinas[3]?.cantidadMin}</Text>
        <Text>Inicio: {maquinas[3]?.inicio}</Text>
        <Text>Ultimo Status: {maquinas[3]?.ultimoStatus}</Text>
        <Text>Tiempo Activa: {maquinas[3]?.tiempoActiva}</Text>
        <Text>disponibilidad: {maquinas[3]?.disponibilidad}</Text>
        <Text>Cliente SAP: {maquinas[3]?.SAPCLIENTE}</Text>
      </View>

      <View>
        <Text>Código de máquina: {maquinas[4]?.codigo}</Text>
        <Text>Estado: {maquinas[4]?.estado}</Text>
        <Text>Velocidad: {maquinas[4]?.velocidad}</Text>
        <Text>Tiempo Activo: {maquinas[4]?.tiempoActivo}</Text>
        <Text>cantidad: {maquinas[4]?.cantidad}</Text>
        <Text>Cantidad por minuto: {maquinas[4]?.cantidadMin}</Text>
        <Text>Inicio: {maquinas[4]?.inicio}</Text>
        <Text>Ultimo Status: {maquinas[4]?.ultimoStatus}</Text>
        <Text>Tiempo Activa: {maquinas[4]?.tiempoActiva}</Text>
        <Text>disponibilidad: {maquinas[4]?.disponibilidad}</Text>
        <Text>Cliente SAP: {maquinas[4]?.SAPCLIENTE}</Text>
      </View>

      <View>
        <Text>Código de máquina: {maquinas[5]?.codigo}</Text>
        <Text>Estado: {maquinas[5]?.estado}</Text>
        <Text>Velocidad: {maquinas[5]?.velocidad}</Text>
        <Text>Tiempo Activo: {maquinas[5]?.tiempoActivo}</Text>
        <Text>cantidad: {maquinas[5]?.cantidad}</Text>
        <Text>Cantidad por minuto: {maquinas[5]?.cantidadMin}</Text>
        <Text>Inicio: {maquinas[5]?.inicio}</Text>
        <Text>Ultimo Status: {maquinas[5]?.ultimoStatus}</Text>
        <Text>Tiempo Activa: {maquinas[5]?.tiempoActiva}</Text>
        <Text>disponibilidad: {maquinas[5]?.disponibilidad}</Text>
        <Text>Cliente SAP: {maquinas[5]?.SAPCLIENTE}</Text>
      </View>

      <View>
        <Text>Código de máquina: {maquinas[6]?.codigo}</Text>
        <Text>Estado: {maquinas[6]?.estado}</Text>
        <Text>Velocidad: {maquinas[6]?.velocidad}</Text>
        <Text>Tiempo Activo: {maquinas[6]?.tiempoActivo}</Text>
        <Text>cantidad: {maquinas[6]?.cantidad}</Text>
        <Text>Cantidad por minuto: {maquinas[6]?.cantidadMin}</Text>
        <Text>Inicio: {maquinas[6]?.inicio}</Text>
        <Text>Ultimo Status: {maquinas[6]?.ultimoStatus}</Text>
        <Text>Tiempo Activa: {maquinas[6]?.tiempoActiva}</Text>
        <Text>disponibilidad: {maquinas[6]?.disponibilidad}</Text>
        <Text>Cliente SAP: {maquinas[6]?.SAPCLIENTE}</Text>
      </View>
      <View>
        <Text>Código de máquina: {maquinas[7]?.codigo}</Text>
        <Text>Estado: {maquinas[7]?.estado}</Text>
        <Text>Velocidad: {maquinas[7]?.velocidad}</Text>
        <Text>Tiempo Activo: {maquinas[7]?.tiempoActivo}</Text>
        <Text>cantidad: {maquinas[7]?.cantidad}</Text>
        <Text>Cantidad por minuto: {maquinas[7]?.cantidadMin}</Text>
        <Text>Inicio: {maquinas[7]?.inicio}</Text>
        <Text>Ultimo Status: {maquinas[7]?.ultimoStatus}</Text>
        <Text>Tiempo Activa: {maquinas[7]?.tiempoActiva}</Text>
        <Text>disponibilidad: {maquinas[7]?.disponibilidad}</Text>
        <Text>Cliente SAP: {maquinas[7]?.SAPCLIENTE}</Text>
      </View>

      <View>
        <Text>Código de máquina: {maquinas[8]?.codigo}</Text>
        <Text>Estado: {maquinas[8]?.estado}</Text>
        <Text>Velocidad: {maquinas[8]?.velocidad}</Text>
        <Text>Tiempo Activo: {maquinas[8]?.tiempoActivo}</Text>
        <Text>cantidad: {maquinas[8]?.cantidad}</Text>
        <Text>Cantidad por minuto: {maquinas[8]?.cantidadMin}</Text>
        <Text>Inicio: {maquinas[8]?.inicio}</Text>
        <Text>Ultimo Status: {maquinas[8]?.ultimoStatus}</Text>
        <Text>Tiempo Activa: {maquinas[8]?.tiempoActiva}</Text>
        <Text>disponibilidad: {maquinas[8]?.disponibilidad}</Text>
        <Text>Cliente SAP: {maquinas[8]?.SAPCLIENTE}</Text>
      </View>


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});