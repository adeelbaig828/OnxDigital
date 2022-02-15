import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {
  fontColorDark,
  fontColorLight,
  OnxGreen,
  textBackColor,
} from 'src/assets/Colors/colors';
import {CustomButton} from 'src/Components/CustomButton';
import Text from 'src/Components/Text';
import View from 'src/Components/View';
import {heightRef} from 'src/config/screenSize';
import style from './style';
const RedeemSuccessfull = ({navigation}) => {
  return (
    <View style={style.rootContainer}>
      <View style={style.upperCon}>
        <Image
          resizeMode={'contain'}
          style={style.imageStyle}
          source={require('../../assets/successImage.png')}
        />
        <Text bold={'500'} paddingVertical={20} color={fontColorLight}>
          Subscription Successful
        </Text>
        <Text
          paddingVertical={13}
          padding={30}
          textAlign={'center'}
          fontSize={12}
          color={fontColorDark}
          backColor={textBackColor}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
      </View>
      <View style={style.bottomCon}>
        <CustomButton
          backColor={OnxGreen}
          btnRadius={5}
          textSize={16}
          onPress={() => {
            navigation.reset({
              index: 0,
              routes: [{name: 'Home'}],
            });
          }}
          btnWidth={'100%'}
          btnHeight={43 * heightRef}
          text={'Go to Home'}
          fontWeight={'bold'}
          marginT={15 * heightRef}
          paddingVertical={10}
        />
      </View>
    </View>
  );
};

export default RedeemSuccessfull;
