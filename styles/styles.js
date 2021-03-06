import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  titleApp: {
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 20,
    color: 'black',
    marginHorizontal: 15,
  },
  srchBar: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  viewSB: {
    width: 320,
    height: 40,
  },
  microphoneIcon: {
    alignSelf: 'center',
  },
  searchBarView: {
    width: 360,
    height: 40,
    alignSelf: 'center',
    marginVertical: 25,
    backgroundColor: 'ghostwhite',
    borderRadius: 11,
  },
  titleList: {
    color: 'black',
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
  containerSearchBar: {
    backgroundColor: '#F2622E',
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10,
    marginBottom: 25,
  },
});
