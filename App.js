import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

// import { Container } from './styles';

const App = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity onPress={() => console.log('ok')}>
        <Text>Inicio do projeto</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;
