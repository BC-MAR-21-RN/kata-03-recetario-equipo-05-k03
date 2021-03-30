import React from 'react';
import SearchBar from 'react-native-search-bar';

export default class SearchBars extends React.Component {
  updateSearch = search => {
    this.setState({search});
  };

  render() {
    const {search} = '';
    return (
      <SearchBar
        placeholder="What do you want to eat?"
        onChangeText={this.updateSearch}
        value={search}
        textColor="dimgray"
      />
    );
  }
}
