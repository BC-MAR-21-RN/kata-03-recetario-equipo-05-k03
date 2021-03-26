import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Navigator from './Navigators/Navigator'

export default class App extends React.Component {
  render(){
    return (
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    );
  }
}
