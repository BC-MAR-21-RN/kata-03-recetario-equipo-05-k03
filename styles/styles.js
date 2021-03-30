import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  titleApp: {
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginTop: 25,
    color: 'navy',
    marginHorizontal: 15,
  },
  searchBarView: {
    width: 360,
    height: 41,
    alignSelf: 'center',
    marginVertical: 25,
    backgroundColor: '#E8E5E1',
    borderRadius: 11,
    padding: 3,
  },
  titleList: {
    color: 'tomato',
    fontWeight: 'bold',
    fontSize: 23,
    marginLeft: 15,
  },
  typeRecipe: {
    textTransform: 'uppercase',
    fontSize: 20,
    color: 'white',
    marginTop: 200,
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
  subView: {
    flexDirection: 'column',
    width: 110,
  },
  subViewR: {
    flexDirection: 'column',
    width: 140,
  },
  listImg: {
    height: 110,
    width: 110,
    borderRadius: 10,
  },
  listImgR: {
    height: 140,
    width: 140,
    borderRadius: 10,
  },
  listText: {
    textAlign: 'left',
    fontSize: 14,
    marginTop: 5,
  },
  listIngredient: {
    textAlign: 'left',
    fontSize: 14,
    flexGrow: 1,
  },
  listIngredient2: {
    textAlign: 'right',
    fontSize: 14,
    flexGrow: 1,
  },
  ingredientView: {
    flexDirection: 'row',
  },
  containerDetails: {
    flex: 1,
    backgroundColor: 'white',
  },
  flatListView: {
    marginHorizontal: 10,
    marginTop: 20,
    marginBottom: 900,
  },
  listItemView: {
    borderBottomWidth: 1.5,
    borderBottomColor: 'lightgray',
  },
  barIcons: {
    marginTop: 55,
    paddingHorizontal: 30,
    color: 'white',
    flexDirection: 'row',
  },
  barIconsRight: {
    marginLeft: 245,
    flexDirection: 'row',
  },
  iconRight: {
    marginRight: 20,
  },
  like: {
    color: 'crimson',
  },
  notLike: {
    color: 'white',
  },
});
