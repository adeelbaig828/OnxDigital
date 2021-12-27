import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {styles} from './style';

export function OfferListingItem({item, navigation}) {
  return (
    <TouchableOpacity
      style={styles.mainRoot}
      onPress={() => navigation.navigate('ViewOfferCombo')}>
      <View style={styles.itemStyle}>
        <Image
          style={styles.imgStyle}
          source={require('../../../assets/handImage.png')}
        />
        <View style={styles.root}>
          <View style={styles.ratingContainer}>
            <Text style={styles.titleText}>{item.heading}</Text>

            <View style={styles.ratingTextCon}>
              <Text style={styles.ratingText}>{item.rating}</Text>
              {item.titleright === 'Book Required' ? (
                <View style={styles.ratingTextCon}>
                  <Image
                    style={styles.imgStyle2}
                    source={require('../../../assets/Bookmark1.png')}
                  />

                  <Text
                    style={
                      item.titleright === 'Discount: 20 %'
                        ? styles.hilighted
                        : styles.foodtype
                    }>
                    {item.titleright}
                  </Text>
                </View>
              ) : null}
            </View>
          </View>
          <View style={styles.ratingContainer}>
            {item.price === '30$' ? (
              <Text style={styles.beforeText}>{'Befor: '}</Text>
            ) : null}

            <Text
              style={
                item.price === '30$'
                  ? styles.cuttext
                  : item.price === 'Total: 30$'
                  ? styles.timingBlue
                  : styles.timing
              }>
              {item.price}
            </Text>
            <View
              style={
                item.titleright === 'Discount: 20 %'
                  ? styles.ratingTextShadCon
                  : styles.ratingTextCon
              }>
              {item.titleright !== 'Book Required' ? (
                <Text
                  style={
                    item.titleright === 'Discount: 20 %'
                      ? styles.hilighted
                      : styles.foodtype
                  }>
                  {item.titleright}
                </Text>
              ) : null}
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
