import * as React from 'react';
// Componentes do React Navigator
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// importação das screens
import Screens from '../screens';

// Options p/ stack
const navOptionsHandler = () => ({
  headerShown: false,
});

// Stacks da area de login ----------------------------------------------
const StackApp = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StackApp.Navigator initialRouteName="Login">
        <StackApp.Screen
          name="Login"
          component={Screens.WelcomeOnBoarding}
          options={navOptionsHandler}
        />
      </StackApp.Navigator>
    </NavigationContainer>
  );
}
