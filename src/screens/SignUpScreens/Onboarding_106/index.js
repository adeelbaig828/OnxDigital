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
import {Grade, Grade1, Grade2, Grade_3, Grade_4} from 'src/utils/JSON';
import {CustomCard} from 'src/Components/customCard';
import OnxIcon from 'src/Components/OnxIcons';
import Toast from 'react-native-toast-message';
import {useDispatch, useSelector} from 'react-redux';
import {
  GET_FAV_SUBJECT,
  SELECT_FAV_SUBJECT,
} from 'src/Redux/Reducers/Auth/AuthActions';
import {FlatList} from 'react-native';
import OnxLoading from 'src/Components/OnxLoading';
const OnBoarding_106 = ({navigation}) => {
  const [selectIndex, setSelectIndex] = useState([]);
  const [Buttonloading, setButtonloading] = useState(false);
  const [favSubject, setfavSubject] = useState([]);
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
  useEffect(() => {
    setloading(true);
    getAllSubjects();
  }, []);
  const getAllSubjects = () => {
    GET_FAV_SUBJECT(barearToken)(dispatch)
      .then(res => {
        if (res.code === 200) {
          setfavSubject(res.data.data);
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
  const SubjectValidation = () => {
    if (selectIndex.length < 1) {
      console.log('Please select which are your favroute subjects. ???');
      showToast({
        type: 'error',
        text2: 'Please select which are your favroute subjects.',
      });
      return false;
    }
    return true;
  };
  const barearToken = useSelector(state => state.auth.token);
  const handleFavSubject = () => {
    setButtonloading(true);
    if (!SubjectValidation()) {
      setButtonloading(false);
      return;
    }
    const Data = {
      fav_subjects: selectIndex,
    };
    SELECT_FAV_SUBJECT(
      Data,
      barearToken,
    )(dispatch)
      .then(res => {
        if (res.code === 200) {
          // console.log('SELECT_FAV_SUBJECT', JSON.stringify(res, null, 2));
          showToast({
            type: 'success',
            text1: res.message,
            text2: res.data.message,
          });
          setTimeout(() => {
            navigation.replace('Home');
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
  const renderItem = ({item}) => (
    <CustomCard
      btnRadius={10}
      backColor={selectIndex.includes(item.id) ? OnxGreen : null}
      marginHorizontal={5}
      onPress={() => {
        if (selectIndex.includes(item.id)) {
          setSelectIndex(s => s.filter(v => v != item.id));
        } else {
          setSelectIndex(s => s.concat(item.id));
        }
      }}
      btnWidth={101 * widthRef}
      marginHorizontal={4}
      btnHeight={89 * heightRef}
      marginV={8}
      style={{borderWidth: 1}}
      borderColor={BorderColor}>
      <>
        <View style={styles.innerCard}>
          <View style={styles.imageView}>
            <OnxIcon
              onPress={() => {
                if (selectIndex.includes(item.id)) {
                  setSelectIndex(s => s.filter(v => v != item.id));
                } else {
                  setSelectIndex(s => s.concat(item.id));
                }
              }}
              colorIcon={item.id === selectIndex ? 'white' : fontColorLight}
              size={27}
              type={'MaterialCommunityIcons'}
              name={
                selectIndex.includes(item.id)
                  ? 'check-circle-outline'
                  : 'checkbox-blank-circle-outline'
              }
            />
          </View>
          <View style={styles.coinView}>
            <Text color={item.id === selectIndex ? 'white' : fontColorLight}>
              {item.name}
            </Text>
          </View>
        </View>
      </>
    </CustomCard>
  );
  const inset = useSafeAreaInsets();
  return loading ? (
    <OnxLoading />
  ) : (
    <>
      <MultiColorProgressBar number={5} />
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
              Header={'Fav. Subject'}
              fontSizeDesc={14}
              colorDesc={fontColorLight}
              Description={'Please select which are your favroute subjects'}
            />
          </View>
          <FlatList
            data={favSubject}
            style={styles.bottomContainer}
            contentContainerStyle={styles.contentStyle}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={renderItem}
          />
        </View>
        <View style={styles.bottomConta}>
          <CustomButton
            onPress={() => {
              // navigation.navigate('Home');
              handleFavSubject();
            }}
            disabled={Buttonloading}
            backColor={OnxGreen}
            textSize={16}
            btnWidth={fullWidth}
            btnHeight={43 * heightRef}
            text={'Finish'}
            fontWeight={'600'}
          />
        </View>
      </View>
    </>
  );
};

export default OnBoarding_106;
