import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {styles} from './style';
import {FlatListItem} from '../FlatList';
import {OfferListingItem} from './OfferListingItem';
import {ViewOfferoftheDay} from '../../utils/JSON';

export function OfferListing({navigation}) {
  function renderItem({item}) {
    return <OfferListingItem item={item} navigation={navigation} />;
  }
  return (
    <View>
      <View style={styles.filterView}>
        <Image
          style={styles.imgStyle}
          source={require('../../assets/filter.png')}
        />
        <Text style={styles.textStyle}>cheepest</Text>
      </View>
      <View style={styles.flatListComp}>
        <FlatListItem data={ViewOfferoftheDay} renderItem={renderItem} />
      </View>
    </View>
  );
}
