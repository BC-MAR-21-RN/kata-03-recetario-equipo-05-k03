import React from 'react';
import SearchBars from '../Components/SearchBar';
import FlatListView from '../Components/FlatList';
import 'react-native-gesture-handler';
import {Text, View} from 'react-native';
import styles from '../styles/styles';

export default function HomeScreen() {
  return (
    <View style={styles.containerDetails}>
      <View style={styles.containerSearchBar}>
        <Text style={styles.titleApp}>Recipe book!</Text>
        <View style={styles.searchBarView}>
          <SearchBars />
        </View>
      </View>
      <View>
        <Text style={styles.titleList}>Trending</Text>
        <FlatListView typeRecipe={'Trending'} />
      </View>
      <View>
        <Text style={styles.titleList}>Recent</Text>
        <FlatListView typeRecipe={'Recent'} />
      </View>
    </View>
  );
}
