import {useRoute} from '@react-navigation/core';
import React, {useEffect, useState} from 'react';
import {Image, ImageBackground} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  fontColorDark,
  fontColorLight,
  OnxGreen,
  pureWhiteColor,
} from 'src/assets/Colors/colors';
import {CustomButton} from 'src/Components/CustomButton';
import OnxHeader from 'src/Components/Header';
import OnxIcon from 'src/Components/OnxIcons';
import OnxLoading from 'src/Components/OnxLoading';
import Text from 'src/Components/Text';
import TextHeader from 'src/Components/TextHeader';
import TextIcon from 'src/Components/TextIcon';
import View from 'src/Components/View';
import {fontRef, fullWidth, heightRef} from 'src/config/screenSize';
import {
  GET_SINGLE_TOURNAMENTS,
  GET_TOURNAMENTS_PROGRESS,
} from 'src/Redux/Reducers/Tournaments/TournamentsActions';
import styles from './style';
const Muqabla_1 = (props, {navigation}) => {
  const isSelectedquizzes = useSelector(
    state => state.muqablas.isQuestionsSelected,
  );
  const token = useSelector(state => state.auth.token);
  const dispatch = useDispatch();
  const route = useRoute();
  const [loading, setloading] = useState(false);
  const textData = [
    {
      text: 'Lorem ipsum dolor sit amet, consectetur',
    },
    {
      text: 'Lorem ipsum dolor sit amet, consectetur',
    },
    {
      text: 'Lorem ipsum dolor sit amet, consectetur',
    },
    {
      text: 'Lorem ipsum dolor sit amet, consectetur',
    },
  ];
  useEffect(() => {
    setloading(true);
    getQuizzesbyTournaments();
  }, []);
  const getQuizzesbyTournaments = () => {
    GET_SINGLE_TOURNAMENTS(
      route.params.id,
      token,
    )(dispatch)
      .then(res => {
        if (res.code === 200) {
          getProgressOfTournaments(route.params.id);
          setloading(false);
        } else {
          console.log('then res', res);
          setloading(false);
        }
      })
      .catch(err => {
        console.log('catch err', err);
        setloading(false);
      });
  };
  const getProgressOfTournaments = id => {
    GET_TOURNAMENTS_PROGRESS(
      id,
      token,
    )(dispatch)
      .then(res => {
        if (res.code === 200) {
          setloading(false);
        } else {
          console.log('then res', res);
          setloading(false);
        }
      })
      .catch(err => {
        console.log('catch err', err);
        setloading(false);
      });
  };
  return loading ? (
    <OnxLoading />
  ) : (
    <View style={styles.rootContainer}>
      <OnxHeader
        borderWidth1
        borderBottomWidth2
        widthHeader={fullWidth}
        left={
          <OnxIcon
            onPress={() => {
              props.navigation.navigate('BottomNavigation', {
                screen: 'Tournaments_1',
              });
            }}
            colorIcon={fontColorLight}
            name={'arrow-left'}
            type={'MaterialCommunityIcons'}
          />
        }
      />
      <View style={styles.upperCon}>
        <Image
          style={styles.adsBack}
          source={require('../../../assets/wholebacl.png')}
        />
        <TextHeader
          colorheader={fontColorLight}
          marginTop={20}
          fontWeight={'500'}
          Header={route.params.name}
          Description={route.params.Description}
        />
        <Text
          marginTop={18 * heightRef}
          bold={'500'}
          color={fontColorLight}
          fontSize={12 * fontRef}>
          Instruction
        </Text>
        {textData.map(text => (
          <TextIcon
            name={'dot-single'}
            type={'Entypo'}
            color={fontColorDark}
            iconcolor={fontColorDark}
            fontSize={12}>
            {text.text}
          </TextIcon>
        ))}
      </View>
      <View style={styles.bottomCon}>
        <CustomButton
          onPress={() => {
            props.navigation.navigate('Muqabla_2');
          }}
          backColor={OnxGreen}
          btnRadius={5}
          textSize={16}
          btnWidth={'100%'}
          btnHeight={43 * heightRef}
          text={'Start Playing'}
          fontWeight={'600'}
          marginT={15 * heightRef}
          paddingVertical={10}
        />
      </View>
    </View>
  );
};

export default Muqabla_1;
