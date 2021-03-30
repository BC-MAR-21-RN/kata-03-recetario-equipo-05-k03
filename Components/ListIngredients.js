import React from 'react';
import 'react-native-gesture-handler';
import {ListItem} from 'react-native-elements';
import {Text, View, VirtualizedList} from 'react-native';
import styles from '../styles/styles';

const getItemCount = data => data.length;
const getItem = (data, index) => ({
  id: index,
  name: data[index].name,
  quantity: data[index].quantity,
});

const ListIngredients = ({ingredients}) => {
  return (
    <View>
      <VirtualizedList
        data={ingredients}
        renderItem={ingredient => (
          <ListItem style={styles.listItemView}>
            <View style={styles.ingredientView}>
              <Text style={styles.listIngredient}>{ingredient.item.name}</Text>
              <Text style={styles.listIngredient2}>
                {ingredient.item.quantity}
              </Text>
            </View>
          </ListItem>
        )}
        keyExtractor={item => item.id}
        style={styles.flatListView}
        getItemCount={getItemCount}
        getItem={getItem}
      />
    </View>
  );
};

export default ListIngredients;
