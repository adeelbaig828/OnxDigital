import React, {useRef} from 'react';
import {Platform, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';
import {fontColorLight, OnxGreen} from 'src/assets/Colors/colors';
import {CustomButton} from 'src/Components/CustomButton';
import {heightRef} from 'src/config/screenSize';
import OTPTextInput from 'react-native-otp-textinput';
import {styles} from './style';
import OnxIcon from 'src/Components/OnxIcons';

const OnBoardingScreen3 = ({navigation}) => {
  const inset = useSafeAreaInsets();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={[styles.root]}>
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.main}>
          <Text style={styles.textStyleHeader}>Verify details</Text>
          <Text style={styles.textStyleNormal}>
            Enter OTP sent to +91 9663490021
          </Text>
          <Text style={styles.textStyleOTPHeader}>Enter OTP</Text>
          <View>
            <OTPTextInput
              containerStyle={{
                justifyContent: 'flex-start',
              }}
              textInputStyle={{
                color: 'white',
                marginRight: 25,
              }}
              ref={e => (otpInput = e)}
            />
          </View>

          <View style={{flexDirection: 'row'}}>
            <Text style={styles.otpRecieve}>Didn't recieve OTP?</Text>
            <Text style={styles.otpResend}> Resend</Text>
          </View>
          <View style={styles.now}>
            <Text
              onPress={() => {
                navigation.navigate('OnBoardingScreen4');
              }}
              style={styles.loginText}>
              Login with password
            </Text>
            <OnxIcon
              colorIcon={OnxGreen}
              size={25}
              type={'Entypo'}
              name={'chevron-small-right'}
            />
          </View>
        </View>
        <View style={styles.buttonView}>
          <CustomButton
            onPress={() => {
              navigation.navigate('OnBoardingScreen4');
            }}
            btnHeight={12 * heightRef}
            backColor={OnxGreen}
            text={'Verify and Continue'}
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

export default OnBoardingScreen3;
