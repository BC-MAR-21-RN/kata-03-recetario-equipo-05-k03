import React from 'react';
import {ListItem, Image} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {Text, View, TouchableHighlight} from 'react-native';
import styles from '../styles/styles';

const ListItemView = ({item}) => {
  var navigation = useNavigation();
  return (
    <TouchableHighlight
      underlayColor="lightgrey"
      onPress={() => {
        navigation.navigate('Detail', {
          id: item.id,
          type: item.type,
          name: item.name,
          ingredients: item.ingredients,
          image: item.imageURL,
          serving: item.servings,
          like: item.like,
        });
      }}>
      <ListItem>
        <View style={item.type === 'Recent' ? styles.subViewR : styles.subView}>
          <Image
            source={{uri: item.imageURL}}
            style={item.type === 'Recent' ? styles.listImgR : styles.listImg}
          />
          <Text style={styles.listText}>{item.name}</Text>
        </View>
      </ListItem>
    </TouchableHighlight>
  );
};

export default ListItemView;
