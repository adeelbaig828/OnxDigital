import React, {useState} from 'react';
import {Platform, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';
import {useDispatch, useSelector} from 'react-redux';
import {
  fontColorLight,
  fontWeight600,
  OnxGreen,
} from 'src/assets/Colors/colors';
import {CustomButton} from 'src/Components/CustomButton';
import {CustomInput} from 'src/Components/CustomInput';
import {heightRef} from 'src/config/screenSize';
import {GENERATE_OTP} from 'src/Redux/Reducers/Auth/AuthActions';
import {useRoute} from '@react-navigation/core';
import {styles} from './style';
import Toast from 'react-native-toast-message';

const OnBoardingScreen2 = ({navigation}) => {
  const route = useRoute();
  const [loading, setloading] = useState(false);
  const CheckUser = route?.params?.from;
  const showToast = ({type, text1, text2}) => {
    Toast.show({
      position: 'bottom',
      type,
      text1,
      text2,
    });
  };
  const dispatch = useDispatch();
  const invalidText = 'Invalid Number, Please enter your 11 digit number.';
  const [otp, set_OTP] = useState('03001234567');
  const numberValidation = () => {
    if (!otp) {
      console.log(invalidText);
      showToast({
        type: 'error',
        text1: 'Invalid Number',
        text2: invalidText,
      });
      return false;
    }
    if (otp.length < 11) {
      console.log(invalidText);
      showToast({
        type: 'error',
        text1: 'Invalid Number',
        text2: invalidText,
      });
      return false;
    }
    //remove this after otp working fine from backEnd
    if (otp !== '03001234567') {
      console.log(invalidText);
      showToast({
        type: 'error',
        text1: 'Invalid Number',
        text2: invalidText,
      });
      return false;
    }
    return true;
  };
  const handleOtp = () => {
    // setloading(true);
    if (!numberValidation()) {
      setloading(false);
      return;
    }
    const Data = {
      phone_number: otp,
    };
    GENERATE_OTP(Data)(dispatch)
      .then(res => {
        if (res.code === 200) {
          console.log('then res', res);
          showToast({
            type: 'success',
            text1: res.message,
            text2: res.data.message,
          });
          setTimeout(() => {
            navigation.replace('OnBoardingScreen3', {
              phoneNumber: otp,
              from: CheckUser ? CheckUser : null,
            });
            setloading(false);
          }, 1100);
          // navigation.replace('OnBoardingScreen3');
        } else {
          console.log('then res', res);
          showToast({
            type: 'error',
            text1: res.code,
            text2: res.message,
          });
          setloading(false);
        }
      })
      .catch(err => {
        console.log('catch err', err);
        showToast({
          type: 'error',
          text1: 'error',
          text2: 'error',
        });
      });
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={[styles.root]}>
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.main}>
          <Text style={styles.textStyleHeader}>Enter your mobile number</Text>
          <Text style={styles.textStyleNormal}>
            Create your account using your 11 digit mobile number
          </Text>
          <CustomInput
            onPress={() => {
              set_OTP('');
            }}
            maxLength={11}
            onChangeText={text => set_OTP(text)}
            validateType="Phone"
            borderBottomWidth
            validateMessage={invalidText}
            placeholder={'Eg:03001234567'}
            keyboardType={'number-pad'}
            value={otp}
          />
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'center',
            paddingBottom: 10,
          }}>
          <CustomButton
            onPress={() => {
              setloading(true);
              handleOtp();
            }}
            disabled={loading}
            btnHeight={12 * heightRef}
            backColor={OnxGreen}
            text={'Continue'}
            btnWidth={'95%'}
            btnHeight={60}
            textColor={'white'}
            textSize={heightRef * 16}
            fontWeight={fontWeight600}
            justifyContent={'center'}
            alignItems={'center'}
            btnRadius={5}
          />
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default OnBoardingScreen2;
