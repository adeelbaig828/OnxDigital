import * as React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {RatingComponent} from '../components/Rating/Rating';
import {styles} from './Search/style';
export function ItemRender({item, navigation}) {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('ItemDetail', {item: item})}>
      <View style={styles.itemStyle}>
        <Image
          style={styles.imgStyle}
          source={require('../assets/default.png')}
        />
        <View style={styles.root}>
          <Text style={styles.titleText}>{item.title}</Text>
          <View style={styles.ratingContainer}>
            <RatingComponent backColor={'white'} />
            <View style={styles.ratingTextCon}>
              <Text style={styles.ratingText}>{item.rating}</Text>
            </View>
          </View>
          <View style={styles.TimeContainer}>
            <Text style={styles.timing}>open 10.30-21.00</Text>
            <View style={styles.ratingTextCon}>
              <Text style={styles.foodtype}>corean food</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.divider} />
    </TouchableOpacity>
  );
}
