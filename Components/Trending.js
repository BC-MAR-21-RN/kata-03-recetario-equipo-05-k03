import React from 'react';
import {ListItem, Image} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {FlatList, Text, View, TouchableHighlight} from 'react-native';
import kitchenRecipes from '../data/kitchenRecipes.json';
import styles from '../styles/styles';

export default function Trending() {
  const navigation = useNavigation();

  renderItem = ({item}) => {
    if (item.type == 'Trending') {
      return (
        <TouchableHighlight
          onPress={() => {
            navigation.navigate('Detail', {
              type: item.type,
              name: item.name,
              ingredients: item.ingredients,
              image: item.imageURL,
              serving: item.servings,
            });
          }}>
          <ListItem>
            <ListItem.Content>
              <View style={styles.subtitleView}>
                <Image source={{uri: item.imageURL}} style={styles.listImage} />
                <Text style={styles.listText}>{item.name}</Text>
              </View>
            </ListItem.Content>
          </ListItem>
        </TouchableHighlight>
      );
    }
  };

  return (
    <View>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={kitchenRecipes}
        renderItem={this.renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}
