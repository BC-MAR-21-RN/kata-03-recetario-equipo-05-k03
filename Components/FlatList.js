import React from 'react';
import {FlatList, View} from 'react-native';
import kitchenRecipes from '../data/kitchenRecipes.json';
import ListItemView from './ListItem';

const FlatListView = ({typeRecipe}) => {
  return (
    <View>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={kitchenRecipes}
        renderItem={({item}) => {
          if (item.type === typeRecipe) {
            return <ListItemView item={item} />;
          }
        }}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default FlatListView;
