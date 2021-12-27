import React, {useRef} from 'react';
import {Platform, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';
import {
  fontColorDark,
  fontColorLight,
  mediumSizeFont,
  OnxGreen,
} from 'src/assets/Colors/colors';
import {CustomButton} from 'src/Components/CustomButton';
import {heightRef} from 'src/config/screenSize';
import {styles} from './style';
import TextFeild from 'src/Components/TextFeild';

const OnBoardingScreen4 = ({navigation}) => {
  const inset = useSafeAreaInsets();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={[styles.root]}>
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.main}>
          <Text style={styles.textStyleHeader}>Log in with Email</Text>
          <Text style={styles.textStyleNormal}>
            Lorem ipsum dolor sit amet,consectetur adipiscing elit.
          </Text>
          <TextFeild
            // value={''}
            onChangeText={() => {}}
            title={'Email ID'}
            titleColor={fontColorLight}
            titleSize={mediumSizeFont}
            placeholder={'Enter your Email ID'}
            placeholderColor={fontColorDark}
            maxLengthValidation={1000}
            showPassword={false}
          />
          <TextFeild
            // value={''}
            onChangeText={() => {}}
            title={'Password'}
            password
            titleSize={mediumSizeFont}
            placeholder={'Create your password'}
            placeholderColor={fontColorDark}
            maxLengthValidation={1000}
            showPassword={true}
          />
        </View>
        <View style={styles.ButtonContainer}>
          <CustomButton
            onPress={() => {
              navigation.navigate('Home');
            }}
            btnHeight={12 * heightRef}
            backColor={OnxGreen}
            text={'Log In'}
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
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default OnBoardingScreen4;
