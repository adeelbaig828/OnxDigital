import React, {useEffect, useState} from 'react';
import {BorderColor, fontColorLight, OnxGreen} from 'src/assets/Colors/colors';
import {CustomButton} from 'src/Components/CustomButton';
import MultiColorProgressBar from 'src/Components/ProgressBar';
import Text from 'src/Components/Text';
import TextHeader from 'src/Components/TextHeader';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import View from 'src/Components/View';
import {fullWidth, heightRef, widthRef} from 'src/config/screenSize';
import styles from './style';
import {Grade_3, Grade_4} from 'src/utils/JSON';
import Toast from 'react-native-toast-message';
import {GET_GRADE, SELECT_GRADE} from 'src/Redux/Reducers/Auth/AuthActions';
import {useDispatch, useSelector} from 'react-redux';
import {FlatList} from 'react-native';
import OnxLoading from 'src/Components/OnxLoading';
const OnBoarding_103 = ({navigation}) => {
  const [selectIndex, setSelectIndex] = useState(null);
  const [loading, setloading] = useState(false);
  const [Buttonloading, setButtonloading] = useState(false);
  const [grade, setGrade] = useState([]);
  const dispatch = useDispatch();
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
  const OtpResponce = useSelector(state => state.auth.verifyData);
  const barearToken = OtpResponce.data.access_token;
  const showToast = ({type, text1, text2}) => {
    Toast.show({
      position: 'bottom',
      type,
      text1,
      text2,
    });
  };
  useEffect(() => {
    setloading(true);
    getAllGrades();
  }, []);
  const getAllGrades = () => {
    GET_GRADE(barearToken)(dispatch)
      .then(res => {
        if (res.code === 200) {
          setGrade(res.data.data);
          setTimeout(() => {
            setloading(false);
          }, 500);
        } else {
          console.log('then res', res);
        }
      })
      .catch(err => {
        console.log('catch err', err);
      });
  };
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
        if (res.code === 200) {
          showToast({
            type: 'success',
            text1: res.message,
            text2: res.data.message,
          });
          setTimeout(() => {
            console.log('setTimeout');
            navigation.replace('OnBoarding_106');
            setButtonloading(false);
          }, 2100);
        } else {
          console.log('else res', res);
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
        setButtonloading(false);
      });
  };
  const inset = useSafeAreaInsets();
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
      btnWidth={101 * widthRef}
      btnHeight={84 * heightRef}
      textColor={item.id === selectIndex ? 'white' : fontColorLight}
      text={item.name_num_th}
    />
  );
  return loading ? (
    <OnxLoading />
  ) : (
    <>
      <MultiColorProgressBar number={2} />
      <View
        style={[
          styles.container,
          {
            paddingBottom: Platform.OS === 'ios' ? inset.bottom : 0,
          },
        ]}>
        <View style={styles.container2}>
          <View>
            <TextHeader
              marginTop={15 * heightRef}
              fontSizeHeader={32}
              fontWeight={'500'}
              numColumns={3}
              Header={'Your Grade'}
              fontSizeDesc={14}
              colorDesc={fontColorLight}
              Description={'Please select which grade you are studying'}
            />
          </View>
          <FlatList
            data={grade}
            style={styles.bottomContainer}
            contentContainerStyle={styles.contentStyle}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={renderItem}
          />
        </View>
        <View style={styles.bottomConta}>
          <CustomButton
            disabled={Buttonloading}
            onPress={() => handleGrade()}
            backColor={OnxGreen}
            textSize={16}
            btnWidth={fullWidth}
            btnHeight={43 * heightRef}
            text={'Next'}
            fontWeight={'600'}
          />
        </View>
      </View>
    </>
  );
};

export default OnBoarding_103;
