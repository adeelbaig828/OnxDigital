import React, {useRef, useState} from 'react';
import {Platform, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';
import {
  fontColorDark,
  fontColorLight,
  mediumSizeFont,
  OnxGreen,
  PickWatch,
} from 'src/assets/Colors/colors';
import {CustomButton} from 'src/Components/CustomButton';
import {heightRef, widthRef} from 'src/config/screenSize';
import {styles} from './style';
import TextFeild from 'src/Components/TextFeild';
import Toast from 'react-native-toast-message';
import {
  Email_LOGIN,
  VERIFY_OTP_EMAIL,
} from 'src/Redux/Reducers/Auth/AuthActions';
import {useDispatch} from 'react-redux';
import OTPTextInput from 'react-native-otp-textinput';
import {validateEmail} from 'src/config/function';

const ForgotPasswordScreens_2 = ({navigation}) => {
  const inset = useSafeAreaInsets();
  const [loading, setloading] = useState(false);
  const [emailData, setEmail] = useState(null);
  const [showError, setShowError] = useState(false);
  const [otp, set_OTP] = useState(null);

  const dispatch = useDispatch();
  const invalidEmail = 'Invalid Email, Please enter your valid Email.';
  const invalid_OTP = 'Invalid OTP, Please enter OTP.';

  const showToast = ({type, text1, text2}) => {
    Toast.show({
      position: 'bottom',
      type,
      text1,
      text2,
    });
  };
  const emailValidation = () => {
    if (!emailData) {
      console.log(invalidEmail);
      showToast({
        type: 'error',
        text1: 'Invalid Email',
        text2: invalidEmail,
      });
      return false;
    }
    if (!validateEmail(emailData)) {
      showToast({
        type: 'error',
        text1: 'Invalid Email',
        text2: invalidEmail,
      });
      return false;
    }
    if (!otp) {
      console.log(invalid_OTP);
      showToast({
        type: 'error',
        text1: 'Invalid_OTP',
        text2: invalid_OTP,
      });
      return false;
    }
    return true;
  };

  const handleForgot = () => {
    // setloading(true);
    if (!emailValidation()) {
      setloading(false);
      return;
    }
    const Data = {
      email: emailData,
      otp: otp,
    };
    VERIFY_OTP_EMAIL(Data)(dispatch)
      .then(res => {
        if (res.code === 200) {
          showToast({
            type: 'success',
            text1: res.message,
            text2: res.data.message,
          });
          setTimeout(() => {
            navigation.replace('ForgotPasswordScreens_3');
            setloading(false);
          }, 1100);
          // navigation.replace('OnBoardingScreen3');
        } else {
          console.log('else then res', res);
          showToast({
            type: 'error',
            text1: 'Error',
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
          <Text style={styles.textStyleHeader}>Forgot Password</Text>
          <Text style={styles.textStyleNormal}>
            Lorem ipsum dolor sit amet,consectetur adipiscing elit.
          </Text>
          <TextFeild
            onChangeText={text => setEmail(text)}
            title={'Email ID'}
            titleColor={fontColorLight}
            titleSize={mediumSizeFont}
            placeholder={'Enter your Email ID'}
            emailValidation
            placeholderColor={fontColorDark}
            maxLengthValidation={1000}
            showPassword={false}
            hideValidation={false}
          />
          <Text style={styles.textStyleOTPHeader}>Enter OTP</Text>
          <View>
            <OTPTextInput
              inputCount={6}
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
                marginRight: 6 * widthRef,
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
        </View>
        <View style={styles.ButtonContainer}>
          <CustomButton
            onPress={() => {
              setloading(true);
              handleForgot();
              // navigation.replace('ForgotPasswordScreens_3');
            }}
            btnHeight={12 * heightRef}
            backColor={OnxGreen}
            disabled={loading}
            text={'Reset Password'}
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

export default ForgotPasswordScreens_2;
