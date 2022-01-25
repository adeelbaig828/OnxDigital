import React from 'react';
import {StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';
import View from '../View';
import Text from '../Text';
import {BgColor} from 'src/assets/Colors/colors';
import {heightRef} from 'src/config/screenSize';

const OnxLoading = ({BackGroundColor, Button}) => {
  return (
    <View
      style={[
        styles.Container,
        {
          backgroundColor: BackGroundColor ? BackGroundColor : BgColor,
        },
      ]}>
      <LottieView
        speed={1.5}
        style={{
          height: Button ? 62 * heightRef : 92 * heightRef,
          width: Button ? 62 * heightRef : 92 * heightRef,
        }}
        source={
          Button
            ? require('../../utils/loadingWhite.json')
            : require('../../utils/loading.json')
        }
        autoPlay
        loop
      />
    </View>
  );
};

export default OnxLoading;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
  },
});
