import React from 'react';
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  Text,
  TextInput,
} from 'react-native';
import {useContext} from './context';

import Icon from 'react-native-vector-icons/Ionicons';

const Screen = () => {
  const {goToHome: handlePress} = useContext();
  const [text, onChangeText] = React.useState('');

  return (
    <View style={{backgroundColor: '#30287b', flex: 1}}>
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          width: '100%',
        }}>
        <View
          style={{
            flexDirection: 'column',
            height: '30%',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              width: '80%',
            }}>
            <Text style={{color: '#fff', fontSize: 20, textAlign: 'center'}}>
              Inserir Código fornecido pelo professor
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              height: '25%',
            }}>
            <TextInput
              placeholder="Código"
              style={{
                borderRadius: 10,
                backgroundColor: '#fff',
                borderWidth: 1,
                borderColor: '#fff',
                // height: '100%',
                width: '80%',
                // paddingTop: 10,
                paddingLeft: 8,
                paddingRight: 8,
              }}
              onChangeText={onChangeText}
              value={text}
            />
          </View>

          <View style={{flexDirection: 'row', height: '25%'}}>
            <TouchableOpacity
              onPress={handlePress}
              style={{
                backgroundColor: '#ffc94d',
                width: '80%',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 20,
              }}>
              <Text>Iniciar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Screen;
