import React from 'react';
import SearchBars  from './SearchBar'
import Trending  from './Trending'
import Recent  from './Recent'
import 'react-native-gesture-handler';
import { StyleSheet, Text, View} from 'react-native';

export default function HomeScreen() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white'}}>
        <View style={styles.searchBarView}>
          <SearchBars/>
        </View>
        <View>
          <Text style={styles.titleList}>Trending</Text>
          {<Trending /> }
        </View>
        <View>
          <Text style={styles.titleList}>Recent</Text>
          <Recent />
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  searchBarView:{
    width: 360,
    height: 41,
    alignSelf: "center",
    marginVertical: 25,
    backgroundColor: "lightgray",
    borderRadius: 11,
    padding: 3,
  },
  titleList: {
    color: 'midnightblue',
    fontWeight: 'bold',
    fontSize: 23,
    marginLeft: 15
  }
});
