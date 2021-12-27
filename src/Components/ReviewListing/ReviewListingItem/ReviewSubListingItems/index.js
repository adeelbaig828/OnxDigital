import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {RatingComponent} from '../../../Rating/Rating';
import {styles} from './style';

export function ReviewSubListisngItems({item}) {
  return (
    <View style={styles.root}>
      <Text style={styles.itemName}>{item.foodName}</Text>
      <RatingComponent backColor={'#F7F7F7'} iconSize={17} />
      <Text style={styles.ratingText}>{item.rating}</Text>
    </View>
  );
}
