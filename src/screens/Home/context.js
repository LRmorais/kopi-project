import React, {
  createContext,
  useContext as useReactContext,
  useEffect,
  useState,
} from 'react';

const Context = createContext();
export const useContext = () => useReactContext(Context);
import socketIOClient from 'socket.io-client';

const Provider = props => {
  const {navigate} = props.navigation;
  // const {endpoint} = props.route.params;
  const endpoint = 'http://192.168.0.18:8080';
  const io = socketIOClient(endpoint);
  const [realTime, setRealTime] = useState(0);
  const [nextState, setNextState] = useState(false);

  useEffect(() => {
    io.emit('select_room', {
      username: 'commonUser',
      room: 'atividade',
    });

    io.on('realTime', data => {
      console.log('time', data);
      setRealTime(data.time);
      if (data.next === true) {
        setNextState(false);
      }
    });
  }, []);

  function goBackOnboarding() {
    navigate('WelcomeOnBoarding');
  }

  function sendAnswer(answer) {
    setNextState(true);
    const data = {
      room: 'atividade',
      username: 'commonUser',
      message: answer,
    };

    io.emit('message', data);
  }
  const value = {
    nextState,
    realTime,
    goBackOnboarding,
    sendAnswer,
  };

  return <Context.Provider value={value}>{props.children}</Context.Provider>;
};

export default Provider;
