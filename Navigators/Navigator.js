import React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Components/Home'
import DetailRecipe from '../Components/Details'

const Stack = createStackNavigator();

export default function Navigator() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}} />
        <Stack.Screen name="Detail" component={DetailRecipe} options={{headerShown:false}} />
      </Stack.Navigator>
  );
}
