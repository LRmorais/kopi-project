import React, {
  createContext,
  useContext as useReactContext,
  useEffect,
  useState,
} from 'react';
import {Alert} from 'react-native';
import socketIOClient from 'socket.io-client';

const Context = createContext();
export const useContext = () => useReactContext(Context);
const username = 'teste';

const Provider = props => {
  const {navigate} = props.navigation;
  const [ipAdress, setIpAdress] = useState('');
  const [checkConnection, setCheckConnection] = useState(false);

  let endpoint = `http://${ipAdress}:8080`;
  const socket = socketIOClient(endpoint);

  useEffect(() => {
    socket.on('connect', () => {
      if (socket.id) {
        setCheckConnection(true);
      }
    });
  }, [socket, checkConnection]);

  function goToHome() {
    // socket.on('connect', () => {
    //   if (socket.id) {
    //     setCheckConnection(true);
    //   }
    // });
    if (checkConnection) {
      navigate('Home', {endpoint: endpoint});
    } else {
      Alert.alert('Código errado !', 'Digite novamente !', [
        {
          text: 'Cancelar',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
        ,
      ]);
    }
    // socket.on('ip', data => {
    //   console.log('data', data);
    // });
    // console.log(socket.connected);
  }
  const value = {
    ipAdress,
    setIpAdress,
    goToHome,
  };

  return <Context.Provider value={value}>{props.children}</Context.Provider>;
};

export default Provider;
