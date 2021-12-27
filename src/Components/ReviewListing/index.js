import React, {useState} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {styles} from './style';
import {FlatListItem} from '../FlatList';
import {ReviewListingItem} from './ReviewListingItem';
import {ReviewDATA} from '../../utils/JSON';

export function ReviewListing() {
  function renderItem({item}) {
    return <ReviewListingItem item={item} />;
  }

  return (
    <View>
      <FlatListItem data={ReviewDATA} renderItem={renderItem} />
    </View>
  );
}
