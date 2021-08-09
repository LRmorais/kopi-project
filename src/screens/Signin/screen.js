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
  const {goBackOnboarding: handlePress} = useContext();
  const [text, onChangeText] = React.useState('');

  return (
    <View style={{backgroundColor: '#30287b', flex: 1}}>
      <SafeAreaView
        style={{
          // backgroundColor: 'red',
          height: '10%',
          alignItems: 'center',
          justifyContent: 'flex-start',
          flexDirection: 'row',
        }}>
        <TouchableOpacity onPress={handlePress}>
          <Icon
            name="arrow-back-outline"
            size={30}
            style={{marginHorizontal: 20}}
            color="#fff"
          />
        </TouchableOpacity>
      </SafeAreaView>
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'space-around',
          alignItems: 'center',
          height: '60%',
        }}>
        <View style={{width: '100%'}}>
          <Text style={{marginHorizontal: 30, fontSize: 30, color: '#fff'}}>
            Entrar
          </Text>
        </View>

        <View
          style={{
            // backgroundColor: 'red',
            flexDirection: 'column',
            height: '40%',
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'center',
              height: '100%',
              width: '100%',
            }}>
            <View
              style={{
                flexDirection: 'row',
                height: '15%',
                width: '80%',
              }}>
              <Text style={{color: '#fff'}}>Matricula</Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                height: '40%',
              }}>
              <TextInput
                placeholder="Informe sua Matrícula"
                style={{
                  borderRadius: 10,
                  backgroundColor: '#fff',
                  borderWidth: 1,
                  borderColor: '#fff',
                  height: '75%',
                  width: '80%',
                  paddingLeft: 8,
                  paddingRight: 8,
                }}
                onChangeText={onChangeText}
                value={text}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                height: '15%',
                width: '80%',
              }}>
              <Text style={{color: '#fff'}}>Senha</Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                height: '40%',
              }}>
              <TextInput
                style={{
                  borderRadius: 10,
                  backgroundColor: '#fff',
                  borderWidth: 1,
                  borderColor: '#fff',
                  height: '75%',
                  width: '80%',
                  paddingLeft: 8,
                  paddingRight: 8,
                }}
                placeholder="Informe sua senha"
                onChangeText={onChangeText}
                value={text}
              />
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: '#ffc94d',
            width: '80%',
            height: '15%',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 20,
          }}>
          <Text>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Screen;
