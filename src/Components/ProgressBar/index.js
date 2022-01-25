import React from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {BgColor, fontColorLight, OnxGreen} from 'src/assets/Colors/colors';
import {heightRef, widthRef} from 'src/config/screenSize';
import {ProgressBarData} from 'src/utils/JSON';
const HeaderHeight = 40 * heightRef;

const MultiColorProgressBar = ({number}) => {
  const inset = useSafeAreaInsets();
  return (
    <View
      style={{
        backgroundColor: BgColor,
        paddingTop: Platform.OS === 'ios' ? inset.top : 10,
        width: '100%',
        flexDirection: 'row',
      }}>
      {ProgressBarData.map((i, index) => (
        <View
          key={index + 'multiColor'}
          style={{
            flexDirection: 'row',
            backgroundColor: i.id <= number ? OnxGreen : fontColorLight,
            width: 84 * widthRef,
            height: 6 * heightRef,
            marginRight: 8 * widthRef,
          }}
        />
      ))}
    </View>
  );
};
const styles = StyleSheet.create({});
export default MultiColorProgressBar;
