import React, {useState} from 'react';
import {FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  BorderColor,
  fontColorLight,
  OnxGreen,
  PickWatch,
} from 'src/assets/Colors/colors';
import {CustomButton} from 'src/Components/CustomButton';
import OnxHeader from 'src/Components/Header';
import MultiColorText from 'src/Components/HighlightedColorText';
import OnxIcon from 'src/Components/OnxIcons';
import Text from 'src/Components/Text';
import View from 'src/Components/View';
import {heightRef, widthRef} from 'src/config/screenSize';

import Toast from 'react-native-toast-message';

import styles from './style';
import {SELECT_GRADE} from 'src/Redux/Reducers/Auth/AuthActions';
const OnBoarding_121 = ({navigation}) => {
  //fetching data from redux
  const allGrades = useSelector(state => state.auth.allgrades);
  const barearToken = useSelector(state => state.auth.token);
  const dispatch = useDispatch();
  const [selectIndex, setSelectIndex] = useState(null);
  const [Buttonloading, setButtonloading] = useState(false);

  //Android Toast
  const showToast = ({type, text1, text2}) => {
    Toast.show({
      position: 'bottom',
      type,
      text1,
      text2,
    });
  };

  //Validate wheather grade is selected or not
  const GradeValidation = () => {
    if (!selectIndex) {
      console.log('Please select grade in which you are studying.');
      showToast({
        type: 'error',
        text2: 'Please select grade in which you are studying.',
      });
      return false;
    }
    return true;
  };
  //Grade Selection
  const handleGrade = () => {
    setButtonloading(true);
    if (!GradeValidation()) {
      setButtonloading(false);
      return;
    }
    const Data = {
      grade: selectIndex,
    };
    SELECT_GRADE(
      Data,
      barearToken,
    )(dispatch)
      .then(res => {
        console.log('res', JSON.stringify(res, null, 3));
        if (res.code === 200) {
          showToast({
            type: 'success',
            text1: res.message,
            text2: res.data.message,
          });
          setTimeout(() => {
            navigation.navigate('Home');
            setButtonloading(false);
          }, 1100);
        } else {
          console.log('else res', res);
          showToast({
            type: 'error',
            text1: res.code,
            text2: res.message,
          });
          setTimeout(() => {
            navigation.replace('OnBoarding_98', {
              gradeID: selectIndex,
            });
            setButtonloading(false);
          }, 1100);
          setButtonloading(false);
        }
      })
      .catch(err => {
        console.log('catch err err', err);
        showToast({
          type: 'error',
          text1: 'error',
          text2: 'error',
        });
        setButtonloading(false);
      });
  };

  //Grade Render
  const renderItem = ({item}) => (
    <CustomButton
      onPress={() => setSelectIndex(item.id)}
      marginHorizontal={4 * heightRef}
      marginV={6 * heightRef}
      borderColor={BorderColor}
      backColor={item.id === selectIndex ? OnxGreen : null}
      borderWidth={1}
      btnRadius={10}
      padding={10}
      textSize={16}
      btnWidth={100 * widthRef}
      btnHeight={84 * heightRef}
      textColor={item.id === selectIndex ? 'white' : fontColorLight}
      text={item.name_num_th}
    />
  );
  return (
    <View style={styles.container}>
      <OnxHeader
        left={
          <View style={styles.header}>
            <OnxIcon
              onPress={() => {
                navigation.navigate('Home');
              }}
              colorIcon={fontColorLight}
              name={'arrow-left'}
              type={'MaterialCommunityIcons'}
            />
            <Text bold={'600'} paddingLeft={15} color={fontColorLight}>
              Choose Grade
            </Text>
          </View>
        }
      />
      <View style={styles.bottomContainer}>
        <FlatList
          data={allGrades.data.data}
          style={styles.flatlistContainer}
          contentContainerStyle={styles.contentStyle}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
        />
        <View style={styles.bottomCont}>
          <View style={styles.MultiColor}>
            <MultiColorText
              textAlign={'center'}
              color={fontColorLight}
              highlightedColor={PickWatch}
              highlightedText={`2 times`}
              textArray={`You can change your grade only2 timesin a year`}
            />
          </View>
          <CustomButton
            backColor={OnxGreen}
            btnRadius={5}
            textSize={16}
            btnWidth={'100%'}
            btnHeight={43 * heightRef}
            onPress={() => handleGrade()}
            // onPress={() => {
            //   navigation.navigate('OnBoarding_98');
            // }}
            text={'Confirm'}
            fontWeight={'600'}
            marginT={15 * heightRef}
          />
        </View>
      </View>
    </View>
  );
};

export default OnBoarding_121;
