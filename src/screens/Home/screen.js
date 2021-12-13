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
  const {goBackOnboarding: handlePress} = useContext();
  const [text, onChangeText] = React.useState('');

  return (
    <View style={style.container}>
      <SafeAreaView>
        <View style={style.content}>
          <View style={style.header}>
            <Text style={style.time}>25</Text>
          </View>

          <View style={style.buttonsContainer}>
            <ButtonGame title="Alternativa A" background="red" />
            <ButtonGame title="Alternativa B" background="#0000FF" />
            <ButtonGame title="Alternativa C" background="#DAA520" />
            <ButtonGame title="Alternativa D" background="#3CB371" />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Screen;
