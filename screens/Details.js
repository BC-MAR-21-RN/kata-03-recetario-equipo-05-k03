import React, {useState} from 'react';
import 'react-native-gesture-handler';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';
import {Text, View, ImageBackground, StatusBar} from 'react-native';
import styles from '../styles/styles';
import kitchenRecipes from '../data/kitchenRecipes.json';
import ListIngredients from '../Components/ListIngredients';

export default function DetailsRecipe({route}) {
  const navigation = useNavigation();
  const {id, type, name, ingredients, image, serving, like} = route.params;
  const [stateLike, setLike] = useState(like);
  const statusChange = () => {
    kitchenRecipes.map(recipe => {
      if (recipe.id === id) {
        recipe.like = !stateLike;
        setLike(recipe.like);
      }
    });
  };

  return (
    <View style={styles.containerDetails}>
      <StatusBar translucent backgroundColor="transparent" />
      <View>
        <ImageBackground source={{uri: image}} style={styles.recipeImage}>
          <View style={styles.overlay}>
            <View style={styles.barIcons}>
              <FontAwesome5
                name={'times'}
                size={25}
                color="white"
                onPress={() => {
                  navigation.navigate('Home');
                }}
              />
              <View style={styles.barIconsRight}>
                <FontAwesome5
                  name={'share-square'}
                  size={25}
                  color="white"
                  style={styles.iconRight}
                />
                <FontAwesome5
                  name={'heart'}
                  size={25}
                  onPress={statusChange}
                  style={stateLike ? styles.like : styles.notLike}
                  solid
                />
              </View>
            </View>
            <Text style={styles.typeRecipe}> {type} </Text>
            <Text style={styles.nameRecipe}> {name} </Text>
          </View>
        </ImageBackground>
        <Text style={styles.titleIngredients}>Ingredients</Text>
        <Text style={styles.titleServing}>{serving}</Text>
        <ListIngredients ingredients={ingredients} />
      </View>
    </View>
  );
}
