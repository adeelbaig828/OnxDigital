import React, {useState} from 'react';
import {KeyboardAvoidingView, SafeAreaView, ScrollView} from 'react-native';
import {
  BgColor,
  fontColorDark,
  fontColorLight,
  mediumSizeFont,
  OnxGreen,
} from 'src/assets/Colors/colors';
import {CustomButton} from 'src/Components/CustomButton';
import TextFeild from 'src/Components/TextFeild';
import TextHeader from 'src/Components/TextHeader';
import View from 'src/Components/View';
import {heightRef} from 'src/config/screenSize';
import Toast from 'react-native-toast-message';
import styles from './style';
import {COMPLETE_PROFILE} from 'src/Redux/Reducers/Auth/AuthActions';
import {useDispatch, useSelector} from 'react-redux';
import {validateEmail} from 'src/config/function';

const FewInformationScreen = ({navigation}) => {
  const [firstName, setfirstName] = useState(null);
  const [lastName, setlastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [loading, setloading] = useState(false);

  const dispatch = useDispatch();

  const showToast = ({type, text1, text2}) => {
    Toast.show({
      position: 'bottom',
      type,
      text1,
      text2,
    });
  };
  const barearToken = useSelector(state => state.auth.token);
  const inputsValidation = () => {
    if (!firstName) {
      showToast({
        type: 'error',
        text1: 'Invalid firstName',
        text2: 'Please enter your firstName.',
      });
      return false;
    }
    if (!lastName) {
      showToast({
        type: 'error',
        text1: 'Invalid lastName',
        text2: 'Please enter your lastName.',
      });
      return false;
    }
    if (!email) {
      console.log(invalidText);
      showToast({
        type: 'error',
        text1: 'Invalid email',
        text2: 'Please enter your email.',
      });
      return false;
    }
    if (!validateEmail(email)) {
      showToast({
        type: 'error',
        text1: 'Invalid Email',
        text2: 'Please enter your email.',
      });
      return false;
    }
    if (!password) {
      showToast({
        type: 'error',
        text1: 'Invalid password',
        text2: 'Please enter your password.',
      });
      return false;
    }
    if (password < 9) {
      showToast({
        type: 'error',
        text1: 'Invalid password',
        text2: 'Password cannot be less tha 8 character.',
      });
      return false;
    }
    return true;
  };
  const handleInputs = () => {
    // setloading(true);
    if (!inputsValidation()) {
      setloading(false);
      return;
    }
    const Data = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: password,
      password_confirmation: password,
    };
    COMPLETE_PROFILE(
      Data,
      barearToken,
    )(dispatch)
      .then(res => {
        if (res.code === 200) {
          //   console.log('then res', res);
          showToast({
            type: 'success',
            text1: res.message,
            text2: res.data.message,
          });
          setTimeout(() => {
            navigation.replace('OnBoarding_102');
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
          text2: err,
        });
      });
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={styles.container}>
      <SafeAreaView>
        <ScrollView>
          <View>
            <View style={styles.bottomContainer}>
              <TextHeader
                fontWeight={'600'}
                fontSizeHeader={14}
                Header={'Few information about you'}
                Description={
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                }
              />
              <TextFeild
                value={firstName}
                onChangeText={text => setfirstName(text)}
                title={'First Name'}
                titleColor={fontColorLight}
                titleSize={mediumSizeFont}
                placeholder={'Enter your first name'}
                placeholderColor={fontColorDark}
                maxLengthValidation={1000}
                showPassword={false}
              />
              <TextFeild
                value={lastName}
                onChangeText={text => setlastName(text)}
                title={'Last Name'}
                titleColor={fontColorLight}
                titleSize={mediumSizeFont}
                placeholder={'Enter your last name'}
                placeholderColor={fontColorDark}
                maxLengthValidation={1000}
                showPassword={false}
              />
              <TextFeild
                value={email}
                onChangeText={text => setEmail(text)}
                title={'Email ID'}
                emailValid={email}
                titleColor={fontColorLight}
                titleSize={mediumSizeFont}
                emailValidation
                placeholder={'Enter your Email ID'}
                placeholderColor={fontColorDark}
                maxLengthValidation={5}
                showPassword={false}
                emailValidation
                hideValidation={false}
              />
              <TextFeild
                value={password}
                onChangeText={text => setPassword(text)}
                title={'Password'}
                password
                titleSize={mediumSizeFont}
                placeholder={'Create your password'}
                placeholderColor={fontColorDark}
                maxLengthValidation={1000}
                //   showPassword={true}
              />
            </View>
            <View style={styles.ButtonContainer}>
              <CustomButton
                onPress={() => {
                  handleInputs();
                }}
                btnHeight={12 * heightRef}
                backColor={OnxGreen}
                text={'Register'}
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
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default FewInformationScreen;
