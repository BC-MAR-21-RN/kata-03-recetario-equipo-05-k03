import React from 'react';
import 'react-native-gesture-handler';
import {ListItem} from 'react-native-elements';
import {Text, View, ImageBackground, FlatList} from 'react-native';
import styles from '../styles/styles';

export default function DetailsRecipe({route}) {
  const {type, name, ingredients, image, serving} = route.params;

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View>
        <ImageBackground source={{uri: image}} style={styles.recipeImage}>
          <View style={styles.overlay}>
            <Text style={styles.typeRecipe}> {type} </Text>
            <Text style={styles.nameRecipe}> {name} </Text>
          </View>
        </ImageBackground>
        <Text style={styles.titleIngredients}>Ingredients</Text>
        <Text style={styles.titleServing}>{serving}</Text>
        <View>
          <FlatList
            data={ingredients}
            renderItem={(ingredient) => (
              <ListItem>
                <ListItem.Content>
                  <View style={styles.ingredientView}>
                    <View style={styles.ingredientNQ}>
                      <Text style={styles.listIngredient}>{ingredient.item.name}</Text>
                    </View>
                    <View style={styles.ingredientNQ}>
                      <Text style={styles.listIngredient2}>{ingredient.item.quantity}</Text>
                    </View>
                  </View>
                </ListItem.Content>
              </ListItem>
            )}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    </View>
  );
}
