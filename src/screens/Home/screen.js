import React from 'react';
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import {useContext} from './context';

import Icon from 'react-native-vector-icons/Ionicons';
import {ButtonGame} from '../../components/Button';

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#30287b',
  },
  content: {
    flexDirection: 'column',
    height: '90%',
    justifyContent: 'space-evenly',
    padding: 10,
  },
  header: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  time: {
    color: '#fff',
    fontSize: 90,
  },
  buttonsContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '50%',
  },
  rowOneButton: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  textNumber: {
    color: '#30287b',
    fontSize: 90,
  },
});

const Screen = () => {
  const {
    goBackOnboarding: handlePress,
    sendAnswer,
    realTime,
    nextState,
  } = useContext();
  const [text, onChangeText] = React.useState('');

  return (
    <View style={style.container}>
      <SafeAreaView>
        <View style={style.content}>
          <View style={style.header}>
            <Text style={style.time}>{realTime}</Text>
          </View>
          {nextState ? null : (
            <View style={style.buttonsContainer}>
              <ButtonGame
                title="Alternativa A"
                background="red"
                onPress={() => {
                  sendAnswer('a');
                }}
              />
              <ButtonGame
                title="Alternativa B"
                background="#0000FF"
                onPress={() => {
                  sendAnswer('b');
                }}
              />
              <ButtonGame
                title="Alternativa C"
                background="#DAA520"
                onPress={() => {
                  sendAnswer('c');
                }}
              />
              <ButtonGame
                title="Alternativa D"
                background="#3CB371"
                onPress={() => {
                  sendAnswer('d');
                }}
              />
            </View>
          )}
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Screen;
