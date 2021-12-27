import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {BorderColor} from 'src/assets/Colors/colors';
import {heightRef, widthRef} from 'src/config/screenSize';
import View from '../View';

const Separator = ({width, marginVertical, borderBottomWidth}) => {
  return (
    <View
      style={{
        borderBottomColor: BorderColor,
        borderBottomWidth: borderBottomWidth ? borderBottomWidth : 1,
        width: width ? width : 333 * widthRef,
        marginVertical: marginVertical
          ? marginVertical * heightRef
          : 20 * heightRef,
      }}
    />
  );
};

export default Separator;

const styles = StyleSheet.create({});
