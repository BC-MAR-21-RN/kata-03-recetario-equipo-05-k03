import React from 'react';
import { ListItem, Image } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { FlatList, StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import kitchenRecipes from '../data/kitchenRecipes.json'

export default function Trending(){
  const navigation = useNavigation(); 
  
  renderItem = ({ item }) => {
    if(item.type == "Trending"){
      return <TouchableHighlight onPress={() => {
                                          navigation.navigate('Detail', {
                                          type: item.type,
                                          name: item.name,
                                          ingredients: item.ingredients,
                                          image: item.imageURL,
                                          serving: item.servings})
                                        }} >
              <ListItem>
                <ListItem.Content>
                  <View style={styles.subtitleView}>
                    <Image source={{uri:item.imageURL}} style={styles.ratingImage}/>
                    <Text style={styles.ratingText}>{item.name}</Text>
                  </View>
                </ListItem.Content>
              </ListItem>
            </TouchableHighlight>
    }
  }

    return (
      <View>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={kitchenRecipes}
            renderItem={this.renderItem}
            keyExtractor={item => item.id} />
      </View>
    )
};

const styles = StyleSheet.create({
  subtitleView: {
    flexDirection: 'column',
    width: 110
  },
  ratingImage: {
    height: 110,
    width: 110,
    borderRadius: 10
  },
  ratingText: {
    textAlign: 'left',
    fontSize: 14,
    marginTop: 5
  }
});
