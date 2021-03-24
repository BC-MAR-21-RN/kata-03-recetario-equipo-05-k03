import React from 'react';
import { SearchBar } from 'react-native-elements';

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
        placeholder="What do you want to eat?"
        onChangeText={this.updateSearch}
        value={search} />
    );
  }
}
