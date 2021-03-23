/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SearchBar, ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import { Colors, DebugInstructions, Header, LearnMoreLinks, ReloadInstructions } from 'react-native/Libraries/NewAppScreen';
import kitchenRecipes from './data/kitchenRecipes.json'

const App = () => {
  return (
    <View style={{ flex: 1, backgroundColor: 'gainsboro'}}>
      <View style ={{}}>
          <Text>
            Search Bar pending 
          </Text>
      </View>
      <View style ={{}}>
          <Text style={styles.titleList}>Trending</Text>
      </View>
      <View style ={{}}>
        <Text style={styles.titleList}>Recent</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titleList: {
    color: 'darkblue',
    fontWeight: 'bold',
    fontSize: 23
  }
});

export default App;
