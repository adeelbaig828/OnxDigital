import React, {useState} from 'react';
import {KeyboardAvoidingView} from 'react-native';
import {
  BorderColor,
  fontColorDark,
  fontColorLight,
  mediumSizeFont,
  OnxGreen,
  PickWatch,
  sliderColorOrange,
  textBackColor,
} from 'src/assets/Colors/colors';
import {CustomButton} from 'src/Components/CustomButton';
import {CustomCard} from 'src/Components/customCard';
import OnxHeader from 'src/Components/Header';
import MultiColorText from 'src/Components/HighlightedColorText';
import OnxIcon from 'src/Components/OnxIcons';
import Separator from 'src/Components/separator';
import Text from 'src/Components/Text';
import TextFeild from 'src/Components/TextFeild';
import TextHeader from 'src/Components/TextHeader';
import View from 'src/Components/View';
import {heightRef, widthRef} from 'src/config/screenSize';
import {Grade, Grade1, Grade2} from 'src/utils/JSON';
import styles from './style';
const OnBoarding_123 = ({navigation}) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={styles.container}>
      <View style={styles.container}>
        <OnxHeader
          left={
            <View style={styles.header}>
              <OnxIcon
                onPress={() => {
                  navigation.navigate('OnBoarding_98');
                }}
                colorIcon={fontColorLight}
                name={'arrow-left'}
                type={'MaterialCommunityIcons'}
              />
              <Text bold={'600'} paddingLeft={15} color={fontColorLight}>
                Request for grade change
              </Text>
            </View>
          }
        />
        <View style={styles.bottomContainer}>
          <TextFeild
            // value={''}
            onChangeText={() => {}}
            title={'Name'}
            titleColor={fontColorLight}
            titleSize={mediumSizeFont}
            placeholder={'Enter your name'}
            placeholderColor={fontColorDark}
            maxLengthValidation={1000}
            showPassword={false}
          />
          <TextFeild
            // value={''}
            onChangeText={() => {}}
            title={'Reason for Change'}
            titleColor={fontColorLight}
            titleSize={mediumSizeFont}
            placeholder={'Enter Reason for Change'}
            placeholderColor={fontColorDark}
            maxLengthValidation={1000}
            showPassword={false}
          />
          <TextFeild
            // value={''}
            onChangeText={() => {}}
            title={'More info'}
            titleColor={fontColorLight}
            titleSize={mediumSizeFont}
            placeholder={'Enter More Info'}
            placeholderColor={fontColorDark}
            maxLengthValidation={1000}
            showPassword={false}
          />
        </View>
        <View style={styles.ButtonContainer}>
          <CustomButton
            onPress={() => {
              navigation.navigate('BottomNavigation', {
                screen: 'Home',
              });
            }}
            btnHeight={12 * heightRef}
            backColor={OnxGreen}
            text={'Submit'}
            btnWidth={'95%'}
            btnHeight={60}
            textColor={'white'}
            textSize={heightRef * 15}
            fontWeight={'bold'}
            justifyContent={'center'}
            alignItems={'center'}
            btnRadius={5}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default OnBoarding_123;
