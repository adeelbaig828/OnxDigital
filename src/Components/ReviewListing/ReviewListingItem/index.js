import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {FlatListItem} from '../../FlatList';
import {RatingComponent} from '../../Rating/Rating';
import {ReviewSubListisngItems} from './ReviewSubListingItems';
import {styles} from './style';

export function ReviewListingItem({item}) {
  function ratingItems() {
    return <FlatListItem data={item.subItems} renderItem={renderItem} />;
  }
  function renderItem({item}) {
    return <ReviewSubListisngItems item={item} />;
  }
  return (
    <TouchableOpacity>
      <View style={item.subItems ? styles.itemSubStyle : styles.itemStyle}>
        <Image
          style={styles.imgStyle}
          source={{
            uri: item.img,
          }}
        />
        <View style={styles.root}>
          <View style={styles.ratingContainer}>
            <Text style={styles.titleText}>{item.title}</Text>
            <View style={styles.ratingTextCon}>
              <Text
                style={
                  item.subItems
                    ? [styles.ratingText, styles.textColor]
                    : styles.ratingText
                }>
                {item.subItems ? 'whiskey sour combo' : '1 day'}
              </Text>
            </View>
          </View>
          <View style={styles.ratingContainer}>
            <RatingComponent backColor={'#F7F7F7'} iconSize={17} />
            <Text style={styles.ratingText}>{item.rating}</Text>
          </View>
          {item.subItems ? (
            ratingItems(item)
          ) : (
            <View style={styles.ratingContainer}>
              <Text style={styles.timing}>offer: Buy 2 get 1</Text>
              <View style={styles.ratingTextCon}>
                <Text style={styles.foodtype}>{item.viewFull}</Text>
              </View>
            </View>
          )}
        </View>
      </View>
      <View style={styles.divider} />
    </TouchableOpacity>
  );
}
