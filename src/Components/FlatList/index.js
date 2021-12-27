import * as React from 'react';
import {FlatList} from 'react-native';
import {styles} from './style';
export function FlatListItem({data, renderItem}) {
  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
}
