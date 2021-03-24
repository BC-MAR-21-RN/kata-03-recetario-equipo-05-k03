import React from 'react';
import SearchBars  from './Components/SearchBar'
import Trending  from './Components/Trending'
import Recent  from './Components/Recent'
import { ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import { Colors, DebugInstructions, Header, LearnMoreLinks, ReloadInstructions } from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <View style={{ flex: 1, backgroundColor: 'ghostwhite'}}>
      <View>
        <SearchBars />
      </View>
      <View style ={{}}>
          <Text style={styles.titleList}>Trending</Text>
        <Trending />
      </View>
      <View style ={{}}>
        <Text style={styles.titleList}>Recent</Text>
        <Recent />
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
