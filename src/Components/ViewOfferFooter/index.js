import React, {useState} from 'react';
import {styles} from './style';
import {View, Text, Image} from 'react-native';

export function ViewOfferFooter(item) {
  return (
    <View style={styles.priceComponent}>
      <View style={styles.priceSubRoot}>
        <Text style={styles.totlaText}>{item.heading}</Text>
        <View style={styles.priceTextStyle}>
          <Text style={styles.cutText}>{item.time}</Text>
        </View>
        <View style={styles.iconBack}>
          <Image style={styles.img} source={require('../../assets/2.png')} />
        </View>
      </View>
    </View>
  );
}
