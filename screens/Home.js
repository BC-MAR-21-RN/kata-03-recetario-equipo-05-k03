import React from 'react';
import SearchBars from '../Components/SearchBar';
import Trending from '../Components/Trending';
import Recent from '../Components/Recent';
import 'react-native-gesture-handler';
import {Text, View} from 'react-native';
import styles from '../styles/styles';

export default function HomeScreen() {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.searchBarView}>
        <SearchBars />
      </View>
      <View>
        <Text style={styles.titleList}>Trending</Text>
        {<Trending />}
      </View>
      <View>
        <Text style={styles.titleList}>Recent</Text>
        <Recent />
      </View>
    </View>
  );
}
