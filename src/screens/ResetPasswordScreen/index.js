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
import {Email_LOGIN, RESET_PASSWORD} from 'src/Redux/Reducers/Auth/AuthActions';
import {useDispatch, useSelector} from 'react-redux';
import {validateEmail} from 'src/config/function';

const ResetPasswordScreen = ({navigation}) => {
  const barearToken = useSelector(state => state.auth.token);

  const inset = useSafeAreaInsets();
  const [loading, setloading] = useState(false);
  const [oldPasswordData, setOldpassword] = useState(null);
  const [newPasswordData, setNewpassword] = useState(null);
  const [confirmPasswordData, setConfirmPassword] = useState(null);

  const dispatch = useDispatch();
  const invalidOldPassword =
    'Invalid Old Password, Please enter your valid Old Password.';
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
    if (!oldPasswordData) {
      console.log(invalidOldPassword);
      showToast({
        type: 'error',
        text1: 'Invalid Old Password',
        text2: invalidOldPassword,
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

  const handleResetPassword = () => {
    // setloading(true);
    if (!passwordValidation()) {
      setloading(false);
      return;
    }
    const Data = {
      current_password: oldPasswordData,
      password: newPasswordData,
      password_confirmation: confirmPasswordData,
    };
    RESET_PASSWORD(
      Data,
      barearToken,
    )(dispatch)
      .then(res => {
        console.log('object response', res);
        if (res.code === 200) {
          showToast({
            type: 'success',
            text1: res.message,
            text2: res.message,
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
            <Text style={styles.textStyleHeader}>Reset Password</Text>
            <TextFeild
              onChangeText={text => setOldpassword(text)}
              title={'Current Password'}
              password
              titleSize={mediumSizeFont}
              placeholder={'Enter your current password'}
              placeholderColor={fontColorDark}
              showPassword={true}
            />
            <TextFeild
              onChangeText={text => setNewpassword(text)}
              title={'New Password'}
              password
              titleSize={mediumSizeFont}
              placeholder={'Enter your new password'}
              placeholderColor={fontColorDark}
              showPassword={true}
            />
            <TextFeild
              onChangeText={text => setConfirmPassword(text)}
              title={'Confirm New Password'}
              password
              titleSize={mediumSizeFont}
              placeholder={'Enter your new password'}
              placeholderColor={fontColorDark}
              showPassword={true}
            />
          </View>
        </ScrollView>
        <View style={styles.ButtonContainer}>
          <CustomButton
            onPress={() => {
              setloading(true);
              handleResetPassword();
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

export default ResetPasswordScreen;
