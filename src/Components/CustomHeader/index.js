import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {styles} from './style';

export function CustomHeader({
  headingText,
  customSize,
  borderRadius,
  cancel,
  navigation,
}) {
  return (
    <View style={[styles.root, {flex: customSize}]}>
      <View style={[styles.subRoot]}>
        <TouchableOpacity
          style={styles.backIcon}
          onPress={() => navigation.goBack()}>
          <Image
            style={styles.backIconImgStyle}
            source={require('../../assets/Chevron2.png')}
          />
        </TouchableOpacity>
        <Text style={styles.textHeading}>{headingText}</Text>
        <Image
          style={styles.backIconImgStyle}
          source={require('../../assets/cancel.png')}
        />
      </View>
    </View>
  );
}
