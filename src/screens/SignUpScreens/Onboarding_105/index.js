import {useRoute} from '@react-navigation/core';
import React, {useEffect, useRef, useState} from 'react';
import {FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  FlatlistItemSep,
  fontColorDark,
  fontColorLight,
  GrayIConColorDArk,
  OnxGreen,
  textBackColor,
} from 'src/assets/Colors/colors';
import {CustomButton} from 'src/Components/CustomButton';
import {CustomCard} from 'src/Components/customCard';
import {CustomInput} from 'src/Components/CustomInput';
import Toast from 'react-native-toast-message';
import OnxHeader from 'src/Components/Header';
import OnxIcon from 'src/Components/OnxIcons';
import Text from 'src/Components/Text';
import View from 'src/Components/View';
import {heightRef, widthRef} from 'src/config/screenSize';
import {
  GET_ALL_SCHOOL,
  GET_ALL_SECTIONS,
  GET_BRANCHES,
  SELECT_BRANCH,
  SELECT_SCHOOL_ACT,
  SELECT_SECTIONS,
} from 'src/Redux/Reducers/Auth/AuthActions';
import {NoonSchool} from 'src/utils/JSON';
import styles from './style';
const OnBoarding_105 = ({navigation}) => {
  const [school, setSchool] = useState([]);
  const [options, setoptions] = useState(null);
  const searchRef = useRef();
  const [filterdData, setfilterdData] = useState([]);
  const route = useRoute();
  const barearToken = useSelector(state => state.auth.token);
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
    getAllSchool();
  }, []);
  const getAllSchool = () => {
    if (!route.params.school) {
      return;
    }
    GET_ALL_SCHOOL(barearToken)(dispatch)
      .then(res => {
        if (res.code === 200) {
          // const filteredData = res.data.data.filter(item => {
          //   if (item.name.includes(route.params.school)) {
          //     return item;
          //   }
          // });
          // setSchool(filteredData);
          setSchool(res.data.data);
        } else {
          console.log('then res', res);
        }
      })
      .catch(err => {
        console.log('catch err', err);
      });
  };
  const getBranchesbySchool = id => {
    setoptions(2);
    GET_BRANCHES(
      id,
      barearToken,
    )(dispatch)
      .then(res => {
        if (res.code === 200) {
          setSchool(res.data.data);
        } else {
          console.log('then res', res);
        }
      })
      .catch(err => {
        console.log('catch err', err);
      });
  };
  const selectBranch = branchId => {
    if (!branchId) {
      showToast({
        type: 'error',
        text2: 'Please select which school you are going.',
      });
      return;
    }
    const Data = {
      branch: branchId,
    };
    SELECT_BRANCH(
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
          getAllSections();
        }
      })
      .catch(err => {
        console.log('err', err);
        showToast({
          type: 'error',
          text1: 'Error in api',
          text2: 'Error in api',
        });
      });
  };
  const getAllSections = () => {
    setoptions(1);
    GET_ALL_SECTIONS(barearToken)(dispatch)
      .then(res => {
        if (res.code === 200) {
          setSchool(res.data.data);
        } else {
          console.log('then res', res);
        }
      })
      .catch(err => {
        console.log('catch err', err);
      });
  };
  const selectSchool = id => {
    if (!id) {
      showToast({
        type: 'error',
        text2: 'Please select which school you are going.',
      });
      return;
    }
    setoptions(2);
    const Data = {
      school: id,
    };
    SELECT_SCHOOL_ACT(
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
          getBranchesbySchool(id);
        }
      })
      .catch(err => {
        console.log('err', err);
        showToast({
          type: 'error',
          text1: 'Error in api',
          text2: 'Error in api',
        });
      });
  };
  const selectSections = id => {
    if (!id) {
      showToast({
        type: 'error',
        text2: 'Please select which school you are going.',
      });
      return;
    }
    const Data = {
      section: id,
    };
    SELECT_SECTIONS(
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
          // getAllSections();
          setTimeout(() => {
            navigation.replace('OnBoarding_106');
          }, 2100);
        }
      })
      .catch(err => {
        console.log('err', err);
        showToast({
          type: 'error',
          text1: 'Error in api',
          text2: 'Error in api',
        });
      });
  };
  const SeparateComponent = () => (
    <View style={{height: 1, backgroundColor: FlatlistItemSep}} />
  );
  const renderItem = ({item}) => (
    <CustomCard
      paddinginner={0.1}
      onPress={() => {
        options === 1
          ? selectSections(item.id)
          : options === 2
          ? selectBranch(item.id)
          : selectSchool(item.id);
      }}
      btnWidth={338 * widthRef}
      btnHeight={54 * heightRef}>
      <>
        <View style={styles.leftCont}>
          <Text color={fontColorLight}>{item.name}</Text>
        </View>
        <View style={styles.rightCont}>
          <OnxIcon
            colorIcon={GrayIConColorDArk}
            size={20 * heightRef}
            type={'Entypo'}
            name={'chevron-small-right'}
          />
        </View>
      </>
    </CustomCard>
  );
  const search = searchText => {
    let filteredData = school.filter(function (item) {
      return item.name.includes(searchText);
    });
    // setfilterdData(filteredData);
  };
  return (
    <View style={styles.mainContainer}>
      <OnxHeader
        left={
          <View style={styles.header}>
            <OnxIcon
              onPress={() => {
                navigation.navigate('OnBoarding_104');
              }}
              colorIcon={fontColorDark}
              name={'arrow-left'}
              type={'MaterialCommunityIcons'}
            />
            <CustomInput
              textRef={searchRef}
              // editable={false}
              onChangeText={text => search(text)}
              fontSize={14}
              type={'AntDesign'}
              name={'close'}
              IConSize={24}
              width={310 * widthRef}
              placeholder={route.params.school}
              onPress={() => searchRef.current?.clear()}
            />
          </View>
        }
      />
      <View style={styles.main1}>
        <FlatList
          ItemSeparatorComponent={SeparateComponent}
          data={filterdData?.length > 0 ? filterdData : school}
          style={styles.flatlistContainer}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
        />
      </View>
      <View style={[styles.ButtonContainer, {paddingBottom: 20}]}>
        <Text marginbtm={9} color={fontColorLight}>
          Can’t see your school name? Add manually
        </Text>
        <CustomButton
          // onPress={() => {
          //   navigation.navigate('OnBoarding_106');
          // }}
          btnHeight={12 * heightRef}
          backColor={OnxGreen}
          text={'Add Your School'}
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
  );
};

export default OnBoarding_105;
