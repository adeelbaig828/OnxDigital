import React, {useRef, useState} from 'react';
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
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
import {
  CHANGE_PASSWORD,
  Email_LOGIN,
  RESET_PASSWORD,
} from 'src/Redux/Reducers/Auth/AuthActions';
import {useDispatch, useSelector} from 'react-redux';
import {validateEmail} from 'src/config/function';

const ForgotPasswordScreens_3 = ({navigation}) => {
  const barearToken = useSelector(state => state.auth.token);

  const inset = useSafeAreaInsets();
  const [loading, setloading] = useState(false);
  const [newPasswordData, setNewpassword] = useState(null);
  const [emailData, setEmail] = useState(null);
  const [confirmPasswordData, setConfirmPassword] = useState(null);

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
  const passwordValidation = () => {
    if (!emailData) {
      console.log(invalidEmail);
      showToast({
        type: 'error',
        text1: 'Invalid Email',
        text2: invalidEmail,
      });
      return false;
    }
    if (!newPasswordData) {
      console.log(
        'Invalid New Password, Please enter your valid New Password.',
      );
      showToast({
        type: 'error',
        text1: 'Invalid New Password',
        text2: 'Invalid New Password, Please enter your valid New Password.',
      });
      return false;
    }
    if (newPasswordData < 8) {
      console.log(
        'Invalid New Password, Please enter your valid New Password.',
      );
      showToast({
        type: 'error',
        text1: 'Invalid New Password',
        text2: 'Invalid New Password, Please enter your valid New Password.',
      });
      return false;
    }
    if (confirmPasswordData !== newPasswordData) {
      console.log('Password and confirm password must be match');
      showToast({
        type: 'error',
        text1: 'Invalid Confirm New Password',
        text2: 'Password and confirm password must be match',
      });
      return false;
    }
    if (!confirmPasswordData) {
      console.log(
        'Invalid Confirm New Password, Please enter your valid Confirm New Password.',
      );
      showToast({
        type: 'error',
        text1: 'Invalid Confirm New Password',
        text2:
          'Invalid Confirm New Password, Please enter your valid Confirm New Password.',
      });
      return false;
    }
    return true;
  };

  const handleForgotPassword = () => {
    // setloading(true);
    if (!passwordValidation()) {
      setloading(false);
      return;
    }
    const Data = {
      email: emailData,
      password: newPasswordData,
      password_confirmation: confirmPasswordData,
    };
    CHANGE_PASSWORD(Data)(dispatch)
      .then(res => {
        console.log('object response', res);
        if (res.code === 200) {
          showToast({
            type: 'success',
            text1: res.message,
            text2: res.message,
          });
          setTimeout(() => {
            navigation.replace('OnBoardingScreen4');
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
        setloading(false);
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
        <ScrollView style={{flex: 1}}>
          <View style={styles.main}>
            <Text style={styles.textStyleHeader}>Forgot Password</Text>
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
              onChangeText={text => setNewpassword(text)}
              title={'Password'}
              password
              titleSize={mediumSizeFont}
              placeholder={'Enter your password'}
              placeholderColor={fontColorDark}
              showPassword={true}
            />
            <TextFeild
              onChangeText={text => setConfirmPassword(text)}
              title={'Confirm Password'}
              password
              titleSize={mediumSizeFont}
              placeholder={'Enter your password'}
              placeholderColor={fontColorDark}
              showPassword={true}
            />
          </View>
        </ScrollView>
        <View style={styles.ButtonContainer}>
          <CustomButton
            onPress={() => {
              setloading(true);
              handleForgotPassword();
            }}
            btnHeight={12 * heightRef}
            backColor={OnxGreen}
            disabled={loading}
            text={'Save'}
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

export default ForgotPasswordScreens_3;
