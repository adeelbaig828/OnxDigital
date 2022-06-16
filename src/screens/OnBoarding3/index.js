import {useRoute} from '@react-navigation/core';
import React, {useState} from 'react';
import {Platform, SafeAreaView} from 'react-native';
import Icon from 'react-native-dynamic-vector-icons';
import OTPTextInput from 'react-native-otp-textinput';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';
import {useDispatch} from 'react-redux';
import {fontColorLight, OnxGreen, PickWatch} from 'src/assets/Colors/colors';
import {CustomButton} from 'src/Components/CustomButton';
import OnxIcon from 'src/Components/OnxIcons';
import Text from 'src/Components/Text';
import View from 'src/Components/View';
import {print} from 'src/config/function';
import {heightRef, widthRef} from 'src/config/screenSize';
import {GENERATE_OTP, VERIFY_OTP} from 'src/Redux/Reducers/Auth/AuthActions';
import {styles} from './style';

const OnBoardingScreen3 = ({navigation}) => {
  const route = useRoute();
  print(route.params.phoneNumber);
  const inset = useSafeAreaInsets();
  const dispatch = useDispatch();
  const [otp, set_OTP] = useState(null);
  const [showError, setShowError] = useState(false);
  const [loading, setloading] = useState(false);
  const showToast = ({type, text1, text2}) => {
    Toast.show({
      position: 'bottom',
      type,
      text1,
      text2,
    });
  };
  const invalidText = 'Invalid OTP, Please try resending.';
  const numberValidation = () => {
    if (!otp) {
      console.log(invalidText);
      showToast({
        type: 'error',
        text1: 'Invalid OTP',
        text2: invalidText,
      });
      return false;
    }
    if (otp.length < 4) {
      console.log(invalidText);
      showToast({
        type: 'error',
        text1: 'Invalid OTP',
        text2: invalidText,
      });
      return false;
    }
    return true;
  };
  const handleResendOtp = () => {
    if (!route.params.phoneNumber) {
      return;
    }
    const Data = {
      phone_number: route.params.phoneNumber,
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
            // navigation.replace('OnBoarding_102');
          }, 1100);
        } else {
          console.log('then res', res);
          showToast({
            type: 'error',
            text1: res.code,
            text2: res.message,
          });
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
  const handleOtp = () => {
    setloading(true);
    if (!numberValidation()) {
      setloading(false);
      return;
    }
    const Data = {
      phone_number: route?.params?.phoneNumber,
      otp: otp,
    };
    VERIFY_OTP(Data)(dispatch)
      .then(res => {
        if (res.code === 200) {
          showToast({
            type: 'success',
            text1: res.message,
            text2: res.data.message,
          });
          setShowError(false);
          setTimeout(() => {
            if (route.params.from && res.data.is_profile_complete) {
              navigation.replace('Home');
            } else {
              navigation.replace('FewInformationScreen');
            }
            setloading(false);
          }, 1100);
        } else {
          console.log('else res', res);
          setShowError(true);
          set_OTP('');
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
          <Text style={styles.textStyleHeader}>Verify details</Text>
          <Text style={styles.textStyleNormal}>
            Enter OTP sent to {route.params.phoneNumber}
          </Text>
          <Text style={styles.textStyleOTPHeader}>Enter OTP</Text>
          <View>
            <OTPTextInput
              tintColor={showError ? PickWatch : OnxGreen}
              offTintColor={showError ? PickWatch : fontColorLight}
              handleTextChange={text => {
                set_OTP(text);
              }}
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
          {showError && (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Icon
                color={PickWatch}
                type={'MaterialIcons'}
                size={25}
                name={'info'}
              />
              <Text color={PickWatch} marginLeft={5 * widthRef} fontSize={11.5}>
                {invalidText}
              </Text>
            </View>
          )}
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.otpRecieve}>Didn't recieve OTP?</Text>
            <Text
              onPress={() => {
                handleResendOtp();
              }}
              style={styles.otpResend}>
              {' '}
              Resend
            </Text>
          </View>
          {route.params.from ? (
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
          ) : null}
        </View>
        <View style={styles.buttonView}>
          <CustomButton
            onPress={() => {
              handleOtp();
              // navigation.navigate('OnBoardingScreen4');
            }}
            btnHeight={12 * heightRef}
            backColor={OnxGreen}
            disabled={loading}
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
