import React from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View, ImageBackground} from 'react-native';

export default function DetailsRecipe({route}){
  const { type, name, ingredients, image, serving } = route.params;

  return (
    <View style={{ flex: 1, backgroundColor: 'white'}}>
      <View>
        <ImageBackground source={{uri:image}} style={styles.ratingImage}>
          <View style={styles.overlay}>
            <Text style={styles.typeRecipe}> {type} </Text>
            <Text style={styles.nameRecipe}> {name} </Text>
          </View>
        </ImageBackground>
        <Text style={styles.titleIngredients}>Ingredients</Text>
        <Text style={styles.titleServing}>{serving}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  typeRecipe: {
    textTransform: 'uppercase',
    fontSize: 20,
    color: 'white',
    marginTop: 270,
    paddingLeft: 25
  },
  overlay:{
    backgroundColor:'rgba(0,0,0,0.5)',
    height: 360,
    width: 450
  },
  nameRecipe: {
    fontSize: 24,
    color: 'white',
    paddingLeft: 25
  },
  ratingImage: {
    height: 360,
    width: 450
  },
  titleIngredients:{
    fontSize: 20,
    paddingLeft: 25,
    marginTop: 18
  },
  titleServing:{
    fontSize: 16,
    paddingLeft: 25
  }
});
