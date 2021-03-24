import React from 'react';
import { ListItem, Image } from 'react-native-elements'
import { FlatList, StyleSheet, Text, View } from 'react-native';
import kitchenRecipes from '../data/kitchenRecipes.json'

const Recent = () => {
  renderItem = ({ item }) => {
    if(item.type == "Recent"){
      return <ListItem>
              <ListItem.Content style={styles.listView}>
                <View style={styles.subtitleView}>
                  <Image source={{uri:item.imageURL}} style={styles.ratingImage}/>
                  <Text style={styles.ratingText}>{item.name}</Text>
                </View>
              </ListItem.Content>
            </ListItem>
    }
  }

  return (
    <View>
      <FlatList
      horizontal={true}
      data={kitchenRecipes}
      renderItem={this.renderItem}
      keyExtractor={item => item.id} />
    </View>
  )
};

const styles = StyleSheet.create({
  listView:{
    backgroundColor: 'ghostwhite',
  },
  item: {
    padding: 20,
    fontSize: 20,
    height: 44,
  },
  subtitleView: {
    flexDirection: 'column',
    justifyContent: 'center'
  },
  ratingImage: {
    height: 100,
    width: 100,
    borderRadius: 10
  },
  ratingText: {
    textAlign: 'left'
  }
});

export default Recent;
