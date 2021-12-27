import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {
  fontColorDark,
  fontColorLight,
  OnxGreen,
  sliderColorOrange,
  textBackColor,
} from 'src/assets/Colors/colors';
import {CustomButton} from 'src/Components/CustomButton';
import MultiColorText from 'src/Components/HighlightedColorText';
import Text from 'src/Components/Text';
import View from 'src/Components/View';
import {heightRef} from 'src/config/screenSize';
import style from './style';
const RedeemGoldSuccessfull = ({navigation}) => {
  return (
    <View style={style.rootContainer}>
      <View style={style.upperCon}>
        <Image
          resizeMode={'contain'}
          style={style.imageStyle}
          source={require('../../assets/successImage.png')}
        />
        <Text
          fontSize={16}
          bold={'600'}
          paddingVertical={20}
          color={fontColorLight}>
          Redeem Successful
        </Text>

        {/* <MultiColorText
          color={fontColorLight}
          highlightedColor={sliderColorOrange}
          highlightedText={'12 Gold'}
          textArray={'We have successfully credited 12 Gold coins in your account'}
        /> */}

        <Text
          paddingVertical={13}
          padding={30}
          textAlign={'center'}
          fontSize={12}
          color={fontColorDark}
          backColor={textBackColor}>
          We have successfully credited 12 Gold coins in your account
        </Text>
      </View>
      <View style={style.bottomCon}>
        <CustomButton
          backColor={OnxGreen}
          btnRadius={5}
          textSize={16}
          // onPress={() => {
          //   navigation.navigate('SilverToGoldSuccessfull');
          // }}
          btnWidth={'100%'}
          btnHeight={43 * heightRef}
          text={'Play Tournaments'}
          fontWeight={'600'}
          marginT={15 * heightRef}
          paddingVertical={10}
        />
        <CustomButton
          btnRadius={5}
          textColor={fontColorDark}
          textSize={16}
          btnWidth={'100%'}
          onPress={() => {
            navigation.navigate('Home');
          }}
          btnHeight={43 * heightRef}
          borderWidth={0.2}
          text={'Go Home'}
          fontWeight={'bold'}
          paddingVertical={10}
          borderColor={fontColorDark}
        />
      </View>
    </View>
  );
};

export default RedeemGoldSuccessfull;
