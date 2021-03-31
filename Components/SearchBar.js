import React from 'react';
import SearchBar from 'react-native-search-bar';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {View} from 'react-native';
import styles from '../styles/styles';

export default class SearchBars extends React.Component {
  updateSearch = search => {
    this.setState({search});
  };

  render() {
    const {search} = '';
    return (
      <View style={styles.srchBar}>
        <SearchBar
          placeholder="What do you want to eat?"
          onChangeText={this.updateSearch}
          value={search}
          textColor="dimgray"
          style={styles.viewSB}
        />
        <FontAwesome5
          name={'microphone'}
          size={22}
          color="dimgray" 
          style={styles.microphoneIcon} 
        />
      </View> 
    );
  }
}
