import React, { useState, useEffect } from 'react';
import { View, Switch } from 'react-native';
import PushNotification from 'react-native-push-notification';

const Notification = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);

  useEffect(() => {
    let machineOffTime = null;

    if (notificationsEnabled) {
      const intervalId = setInterval(() => {
        fetch('url-de-tu-api')
          .then(response => response.json())
          .then(data => {
            if (data.maquina.nEstado === 0) {
              if (machineOffTime === null) {
                machineOffTime = Date.now();
              } else if (Date.now() - machineOffTime >= 15 * 60 * 1000) {
                sendNotification(`La máquina ${data.maquina.cCodMaquina} ha estado apagada durante 15 minutos`);
                machineOffTime = null;
              }
            } else {
              machineOffTime = null;
            }
          });
      }, 60 * 1000);

      return () => clearInterval(intervalId);
    }
  }, [notificationsEnabled]);

  function sendNotification(message) {
    PushNotification.localNotification({
      message: message,
    });
  }

  return (
    <View>
      hola
    </View>
  );
};

export default Notification;
