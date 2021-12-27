import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {
  BorderColor,
  fontColorDark,
  fontColorLight,
  mediumSizeFont,
  OnxGreen,
  pureWhiteColor,
  sliderBAckColorOrange,
} from 'src/assets/Colors/colors';
import {CustomButton} from 'src/Components/CustomButton';
import {CustomCard} from 'src/Components/customCard';
import CustomText from 'src/Components/CustomText';
import OnxHeader from 'src/Components/Header';
import OnxIcon from 'src/Components/OnxIcons';
import Separator from 'src/Components/separator';
import Text from 'src/Components/Text';
import TextFeild from 'src/Components/TextFeild';
import TextHeader from 'src/Components/TextHeader';
import View from 'src/Components/View';
import {fullWidth, heightRef, widthRef} from 'src/config/screenSize';
import styles from './style';

const RedeemScreen = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <OnxHeader
        left={
          <View style={styles.header}>
            <OnxIcon
              onPress={() => {
                navigation.navigate('Home');
              }}
              colorIcon={fontColorLight}
              name={'arrow-left'}
              type={'MaterialCommunityIcons'}
            />
            <Text bold={'600'} paddingLeft={16} color={fontColorLight}>
              Redeem Coins
            </Text>
          </View>
        }
      />
      <View style={styles.root}>
        <Image
          style={styles.imageStyle}
          source={require('../../assets/Frame.png')}
        />
        <TextFeild
          textFieldStyle={{width: '95%'}}
          onChangeText={() => {}}
          titleSize={mediumSizeFont}
          placeholder={'Please enter your 12 digit pin here'}
          placeholderColor={fontColorDark}
          maxLengthValidation={1000}
          borderColor={BorderColor}
        />
        <CustomButton
          onPress={() => {
            navigation.navigate('RedeemGoldSuccessfull');
          }}
          backColor={OnxGreen}
          btnRadius={5}
          textSize={16}
          btnWidth={136 * widthRef}
          btnHeight={40 * heightRef}
          text={'Redeem Now'}
          fontWeight={'600'}
          marginT={20}
        />
        <Separator />
        <TextHeader
          fontWeight={'600'}
          Header={'How to redeem?'}
          Description={'Please follow below steps to redeem your card'}
          marginL={30}
        />
        <CustomText
          numbering={1}
          fontSize={12}
          color={fontColorLight}
          ViewMarginVertical={10}
          ViewMarginTop={15}>
          Scatch your card first
        </CustomText>
        <CustomText
          numbering={2}
          fontSize={12}
          color={fontColorLight}
          ViewMarginVertical={10}>
          Enter the 12 digit number on the above field
        </CustomText>
        <CustomText
          numbering={3}
          fontSize={12}
          color={fontColorLight}
          ViewMarginVertical={10}>
          Click "Redeem Now" to get your gold coins
        </CustomText>
      </View>
    </View>
  );
};

export default RedeemScreen;
