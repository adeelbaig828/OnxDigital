import React, {useState} from 'react';
import {KeyboardAvoidingView} from 'react-native';
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
import {heightRef, widthRef} from 'src/config/screenSize';
import {Grade, Grade1, Grade2} from 'src/utils/JSON';
import Toast from 'react-native-toast-message';
import styles from './style';
import {REQUEST_FOR_GRADE_CHANGE} from 'src/Redux/Reducers/HamburgerMenu/HumburgerActions';
import {useDispatch, useSelector} from 'react-redux';
import {useRoute} from '@react-navigation/core';
import OnxLoading from 'src/Components/OnxLoading';
const OnBoarding_123 = ({navigation}) => {
  //fetching data from redux
  const token = useSelector(state => state.auth.token);
  console.log('token', token);
  const dispatch = useDispatch();

  const [loading, setloading] = useState(false);
  const [firstName, setFirstName] = useState(null);
  const [changeReason, setChangeReason] = useState(null);
  const [moreInfo, setMoreInfo] = useState(null);

  //fetchong data Routes
  const route = useRoute();
  console.log('route', route.params.gradeID);

  //android toast
  const showToast = ({type, text1, text2}) => {
    Toast.show({
      position: 'bottom',
      type,
      text1,
      text2,
    });
  };

  //validating user input
  const inputFieldsValidation = () => {
    if (!firstName) {
      var invalidName = 'Please enter your name';
      console.log(invalidName);
      showToast({
        type: 'error',
        text1: 'Invalid First Name',
        text2: invalidName,
      });
      return false;
    }
    if (!route.params.gradeID) {
      var invalidName = 'Please restart app';
      console.log('Please restart app');
      showToast({
        type: 'error',
        text1: 'Please restart app',
        text2: invalidName,
      });
      return false;
    }
    if (!changeReason) {
      var invalidReason = 'Please enter your Reason';
      console.log(invalidReason);
      showToast({
        type: 'error',
        text1: 'Invalid Reason',
        text2: invalidReason,
      });
      return false;
    }
    if (!moreInfo) {
      var invalidsetMoreInfo = 'Please enter your detailed info';
      console.log(invalidsetMoreInfo);
      showToast({
        type: 'error',
        text1: 'Invalid First Name',
        text2: invalidsetMoreInfo,
      });
      return false;
    }
    return true;
  };
  //Posting data in server
  const handleChangeGrade = () => {
    setloading(true);
    if (!inputFieldsValidation()) {
      setloading(false);
      return;
    }
    const _gradeData = {
      // grade_id: ,
      reason_for_change: changeReason,
      other_info: moreInfo,
    };
    REQUEST_FOR_GRADE_CHANGE(
      _gradeData,
      token,
    )(dispatch)
      .then(res => {
        console.log('REQUEST_FOR_GRADE_CHANGE', res);
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
  };
  return loading ? (
    <OnxLoading />
  ) : (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={styles.container}>
      <View style={styles.container}>
        <OnxHeader
          left={
            <View style={styles.header}>
              <OnxIcon
                onPress={() => {
                  navigation.navigate('OnBoarding_98');
                }}
                colorIcon={fontColorLight}
                name={'arrow-left'}
                type={'MaterialCommunityIcons'}
              />
              <Text bold={'600'} paddingLeft={15} color={fontColorLight}>
                Request for grade change
              </Text>
            </View>
          }
        />
        <View style={styles.bottomContainer}>
          <TextFeild
            onChangeText={text => setFirstName(text)}
            title={'Name'}
            titleColor={fontColorLight}
            titleSize={mediumSizeFont}
            placeholder={'Enter your name'}
            placeholderColor={fontColorDark}
            maxLengthValidation={1000}
            showPassword={false}
          />
          <TextFeild
            // value={''}
            onChangeText={text => setChangeReason(text)}
            title={'Reason for Change'}
            titleColor={fontColorLight}
            titleSize={mediumSizeFont}
            placeholder={'Enter Reason for Change'}
            placeholderColor={fontColorDark}
            maxLengthValidation={1000}
            showPassword={false}
          />
          <TextFeild
            // value={''}
            onChangeText={text => setMoreInfo(text)}
            title={'More info'}
            titleColor={fontColorLight}
            titleSize={mediumSizeFont}
            placeholder={'Enter More Info'}
            placeholderColor={fontColorDark}
            maxLengthValidation={1000}
            showPassword={false}
          />
        </View>
        <View style={styles.ButtonContainer}>
          <CustomButton
            onPress={() => {
              handleChangeGrade();
              // navigation.navigate('BottomNavigation', {
              //   screen: 'Home',
              // });
            }}
            btnHeight={12 * heightRef}
            backColor={OnxGreen}
            text={'Submit'}
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
    </KeyboardAvoidingView>
  );
};

export default OnBoarding_123;
