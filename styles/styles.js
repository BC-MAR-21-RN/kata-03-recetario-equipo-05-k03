import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  searchBarView: {
    width: 360,
    height: 41,
    alignSelf: 'center',
    marginVertical: 25,
    backgroundColor: 'lightgray',
    borderRadius: 11,
    padding: 3,
  },
  titleList: {
    color: 'midnightblue',
    fontWeight: 'bold',
    fontSize: 23,
    marginLeft: 15,
  },
  typeRecipe: {
    textTransform: 'uppercase',
    fontSize: 20,
    color: 'white',
    marginTop: 270,
    paddingLeft: 18,
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    height: 360,
    width: 450,
  },
  nameRecipe: {
    fontSize: 24,
    color: 'white',
    paddingLeft: 18,
  },
  recipeImage: {
    height: 360,
    width: 450,
  },
  titleIngredients: {
    fontSize: 20,
    paddingLeft: 25,
    marginTop: 18,
  },
  titleServing: {
    fontSize: 16,
    paddingLeft: 25,
  },
  subtitleView: {
    flexDirection: 'column',
    width: 110,
  },
  listImage: {
    height: 110,
    width: 110,
    borderRadius: 10,
  },
  listText: {
    textAlign: 'left',
    fontSize: 14,
    marginTop: 5,
  },
  listIngredient:{
    textAlign: 'left',
    fontSize: 14,
  },
  listIngredient2:{
    textAlign: 'right',
    fontSize: 14,
  },
  ingredientView:{
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
  },
  ingredientNQ:{
    flexGrow: 1,
  }
});
