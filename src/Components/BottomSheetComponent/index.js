import React, {useRef, useState} from 'react';

import {StyleSheet} from 'react-native';
import Text from '../Text';
import View from '../View';

const BottomSheetComponent = () => {
  return (
    <View style={styles.mainContainer}>
      <Text>BottomSheet</Text>
    </View>
  );
};

export default BottomSheetComponent;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'transparent',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
});
