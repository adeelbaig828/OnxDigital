import React from 'react';

import {FlatList, StyleSheet, Text, View} from 'react-native';
import {heightRef, widthRef} from 'src/config/screenSize';

const CustomFlatList = ({
  height = 96 * heightRef,
  width = 282 * widthRef,
  data,
  style,
  padding,
  contentContainerStyle,
  children,
  margin,
}) => {
  return (
    <FlatList
      data={data}
      style={style}
      horizontal={true}
      decelerationRate={0.9}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={[{flexGrow: 1}, contentContainerStyle]}
      renderItem={({item, index}) => {
        return (
          <View
            style={[
              {
                width: width,
                height: height,
                margin,
                padding,
              },
              styles.itemContainer,
            ]}>
            {children}
          </View>
        );
      }}
    />
  );
};

export default CustomFlatList;

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: 'black',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
