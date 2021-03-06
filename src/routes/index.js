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
      <StackApp.Navigator initialRouteName="WelcomeOnBoarding">
        <StackApp.Screen
          name="WelcomeOnBoarding"
          component={Screens.WelcomeOnBoarding}
          options={navOptionsHandler}
        />
        <StackApp.Screen
          name="SignIn"
          component={Screens.Signin}
          options={navOptionsHandler}
        />
      </StackApp.Navigator>
    </NavigationContainer>
  );
}
