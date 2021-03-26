import React from 'react';
import SearchBar from 'react-native-search-bar';

export default class SearchBars extends React.Component {
  state = {
    search: ''
  };

  updateSearch = (search) => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      <SearchBar
        ref="searchBar"
        placeholder="What do you want to eat?"
        onChangeText={this.updateSearch}
        value={search}
        textColor="dimgray" />
    );
  }
}
