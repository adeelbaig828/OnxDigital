import React, {useState} from 'react';
import {Image, KeyboardAvoidingView, ScrollView} from 'react-native';
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
import {validateEmail} from 'src/config/function';
import {heightRef, widthRef} from 'src/config/screenSize';
import {GenderData, Grade, Grade1, Grade2} from 'src/utils/JSON';
import Toast from 'react-native-toast-message';

import styles from './style';
import {useDispatch, useSelector} from 'react-redux';
import {
  UPDATE_EMAIL,
  UPDATE_PROFILE_ADDRESS,
  UPDATE_PROFILE_GENDER,
  UPDATE_PROFILE_NAME,
} from 'src/Redux/Reducers/HamburgerMenu/HumburgerActions';
import {GET_STUDENT_PROFILE} from "src/Redux/Reducers/Muqabla's/Muqabla'sActions";
const OnBoarding_133 = ({navigation}) => {
  const token = useSelector(state => state.auth.token);

  const [selectIndex, setSelectIndex] = useState(0);
  const [loading, setloading] = useState(false);
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [emailData, setEmail] = useState(null);
  const [address, setAddress] = useState(null);
  const [gender, setGender] = useState('Male');
  const dispatch = useDispatch();

  const showToast = ({type, text1, text2}) => {
    Toast.show({
      position: 'bottom',
      type,
      text1,
      text2,
    });
  };

  //check input data
  const inputFieldsValidation = () => {
    if (!firstName) {
      var invalidName = 'Please enter your first name';
      console.log(invalidName);
      showToast({
        type: 'error',
        text1: 'Invalid First Name',
        text2: invalidName,
      });
      return false;
    }
    if (!lastName) {
      var invalidName = 'Please enter your last name';
      console.log(invalidName);
      showToast({
        type: 'error',
        text1: 'Invalid last Name',
        text2: invalidName,
      });
      return false;
    }
    if (!emailData) {
      var invalidEmail = 'Please enter your Email';
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
    if (!address) {
      var invalidAddress = 'Please enter your address';
      console.log(invalidAddress);
      showToast({
        type: 'error',
        text1: 'Invalid address',
        text2: invalidAddress,
      });
      return false;
    }
    if (!gender) {
      var invalidGender = 'Please select your gender';
      console.log(invalidGender);
      showToast({
        type: 'error',
        text1: 'Invalid Gender',
        text2: invalidGender,
      });
      return false;
    }
    return true;
  };
  //handling three API's, change firstName API change lastName API change Address API change Gender API
  const handleUserProfile = () => {
    // setloading(true);
    if (!inputFieldsValidation()) {
      setloading(false);
      return;
    }
    const _NameData = {
      first_name: firstName,
      last_name: lastName,
    };
    UPDATE_PROFILE_NAME(
      _NameData,
      token,
    )(dispatch)
      .then(res => {
        if (res.code === 200) {
          setTimeout(() => {
            // navigation.replace('Home');
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
    const _emailData = {
      email: emailData,
    };
    UPDATE_EMAIL(
      _emailData,
      token,
    )(dispatch)
      .then(res => {
        if (res.code === 200) {
          setTimeout(() => {
            // navigation.replace('Home');
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
    const _addressData = {
      address: address,
    };
    UPDATE_PROFILE_ADDRESS(
      _addressData,
      token,
    )(dispatch)
      .then(res => {
        if (res.code === 200) {
          setTimeout(() => {
            // navigation.replace('Home');
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
    const _genderData = {
      gender: gender,
    };
    UPDATE_PROFILE_GENDER(
      _genderData,
      token,
    )(dispatch)
      .then(res => {
        if (res.code === 200) {
          setTimeout(() => {
            // navigation.replace('Home');
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
    showToast({
      type: 'success',
      text1: 'Profile Updated',
      text2: 'You have successfully update profile',
    });
    GET_STUDENT_PROFILE(token)(dispatch)
      .then(res => {
        if (res.code === 200) {
        } else {
          console.log('then res', res);
        }
      })
      .catch(err => {
        console.log('catch err', err);
        setloading(false);
      });
    setTimeout(() => {
      navigation.navigate('BottomNavigation', {
        screen: 'Home',
      });
    }, 1100);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={styles.container}>
      <OnxHeader
        left={
          <View style={styles.header}>
            <OnxIcon
              onPress={() => {
                navigation.navigate('ProfileScreen_2');
              }}
              colorIcon={fontColorLight}
              name={'arrow-left'}
              type={'MaterialCommunityIcons'}
            />
            <Text bold={'600'} paddingLeft={15} color={fontColorLight}>
              Edit Profile
            </Text>
          </View>
        }
      />
      <ScrollView style={styles.fullContainer}>
        <View style={styles.bottomContainer}>
          <TextFeild
            // value={''}
            onChangeText={text => setFirstName(text)}
            title={'First Name'}
            titleColor={fontColorLight}
            titleSize={mediumSizeFont}
            placeholder={'Enter your first name'}
            placeholderColor={fontColorDark}
            maxLengthValidation={1000}
            showPassword={false}
          />
          <TextFeild
            // value={''}
            onChangeText={text => setLastName(text)}
            title={'Last Name'}
            titleColor={fontColorLight}
            titleSize={mediumSizeFont}
            placeholder={'Enter your last name'}
            placeholderColor={fontColorDark}
            maxLengthValidation={1000}
            showPassword={false}
          />
          <TextFeild
            // value={''}
            onChangeText={text => setEmail(text)}
            title={'Email Id'}
            titleColor={fontColorLight}
            titleSize={mediumSizeFont}
            placeholder={'Enter your Email Id'}
            placeholderColor={fontColorDark}
            maxLengthValidation={1000}
            showPassword={false}
          />
          <TextFeild
            // value={''}
            onChangeText={text => setAddress(text)}
            title={'Address'}
            titleColor={fontColorLight}
            titleSize={mediumSizeFont}
            placeholder={'Enter your address'}
            placeholderColor={fontColorDark}
            maxLengthValidation={1000}
            showPassword={false}
          />
        </View>
        <View style={styles.ButtonContainer}>
          <View style={{marginBottom: 31 * heightRef}}>
            <Text
              paddingLeft={4 * widthRef}
              bold={'600'}
              color={fontColorLight}>
              Gender
            </Text>
            <View style={styles.outerCard}>
              {GenderData.map((data, index) => (
                <View style={styles.mainCard}>
                  <CustomCard
                    paddinginner={1}
                    btnRadius={9}
                    marginHorizontal={10}
                    onPress={() => (
                      setSelectIndex(index), setGender(data.title)
                    )}
                    btnHeight={100 * heightRef}
                    btnWidth={100 * heightRef}
                    style={{borderWidth: 1.4}}
                    borderColor={fontColorLight}>
                    <>
                      <View style={styles.innerCard}>
                        <View style={styles.imageView}>
                          <OnxIcon
                            onPress={() => setSelectIndex(index)}
                            colorIcon={
                              index === selectIndex ? OnxGreen : 'white'
                            }
                            size={27}
                            type={'MaterialCommunityIcons'}
                            name={
                              index === selectIndex
                                ? 'checkbox-marked-circle'
                                : 'checkbox-blank-circle-outline'
                            }
                          />
                        </View>
                        <View style={styles.coinView}>
                          <Image
                            style={styles.image}
                            source={
                              data.id == 1
                                ? require('src/assets/Male.png')
                                : require('src/assets/Female.png')
                            }
                          />
                        </View>
                      </View>
                    </>
                  </CustomCard>
                  <Text bold={'600'} color={fontColorLight}>
                    {data.title}
                  </Text>
                </View>
              ))}
            </View>
            <Text
              marginTop={10 * heightRef}
              marginHorizontal={10}
              style={styles.upperText}>
              Want to reset Password ?
              <Text
                style={styles.login}
                onPress={() => {
                  navigation.navigate('ResetPasswordScreen');
                }}>
                {' '}
                reset
              </Text>
            </Text>
          </View>
          <CustomButton
            alignSelf={'center'}
            onPress={() => {
              handleUserProfile();
            }}
            btnHeight={12 * heightRef}
            backColor={OnxGreen}
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
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default OnBoarding_133;
