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

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#30287b',
  },
  content: {
    flexDirection: 'column',
    height: '90%',
    justifyContent: 'space-evenly',
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
    // backgroundColor: 'red',
  },
  rowOneButton: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  textNumber: {
    color: '#30287b',
    fontSize: 90,
  },
  backgroundColorButtons: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    width: '30%',
  },
  rowTwoButton: {
    flexDirection: 'row',
    justifyContent: 'space-around',
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
            <View style={style.rowOneButton}>
              <TouchableOpacity style={style.backgroundColorButtons}>
                <Text style={style.textNumber}>1</Text>
              </TouchableOpacity>

              <TouchableOpacity style={style.backgroundColorButtons}>
                <Text style={style.textNumber}>2</Text>
              </TouchableOpacity>
            </View>
            <View style={style.rowTwoButton}>
              <TouchableOpacity style={style.backgroundColorButtons}>
                <Text style={style.textNumber}>3</Text>
              </TouchableOpacity>

              <TouchableOpacity style={style.backgroundColorButtons}>
                <Text style={style.textNumber}>4</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Screen;
