import React, {useRef, useState} from 'react';
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
import Toast from 'react-native-toast-message';
import {Email_LOGIN} from 'src/Redux/Reducers/Auth/AuthActions';
import {useDispatch} from 'react-redux';
import {validateEmail} from 'src/config/function';

const OnBoardingScreen4 = ({navigation}) => {
  const inset = useSafeAreaInsets();
  const [loading, setloading] = useState(false);
  const [emailData, setEmail] = useState(null);
  const [passwordData, setpassword] = useState(null);

  const dispatch = useDispatch();

  const invalidEmail = 'Invalid Email, Please enter your valid Email.';
  const invalidPassword =
    'Invalid Password, Please enter correct your password.';

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
    if (!passwordData) {
      console.log(invalidPassword);
      showToast({
        type: 'error',
        text1: 'InvalidPassword',
        text2: invalidPassword,
      });
      return false;
    }
    return true;
  };

  const handleLogin = () => {
    // setloading(true);
    if (!emailValidation()) {
      setloading(false);
      return;
    }
    const Data = {
      email: emailData,
      password: passwordData,
    };
    Email_LOGIN(Data)(dispatch)
      .then(res => {
        console.log('res.code === ', res);
        if (res.code === 200) {
          showToast({
            type: 'success',
            text1: res.message,
            text2: res.data.message,
          });
          setTimeout(() => {
            navigation.replace('Home');
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
          <Text style={styles.textStyleHeader}>Login with Email</Text>
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
          <TextFeild
            onChangeText={text => setpassword(text)}
            title={'Password'}
            password
            titleSize={mediumSizeFont}
            placeholder={'Enter your password'}
            placeholderColor={fontColorDark}
            showPassword={true}
          />
        </View>
        <View style={styles.ButtonContainer}>
          <CustomButton
            onPress={() => {
              setloading(true);
              handleLogin();
            }}
            btnHeight={12 * heightRef}
            backColor={OnxGreen}
            disabled={loading}
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
