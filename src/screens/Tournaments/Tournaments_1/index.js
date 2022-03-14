import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  BgColor,
  BorderColor,
  fontColorDark,
  fontColorLight,
  OnxGreen,
} from 'src/assets/Colors/colors';
import {CustomCard} from 'src/Components/customCard';
import OnxIcon from 'src/Components/OnxIcons';
import Text from 'src/Components/Text';
import TextHeader from 'src/Components/TextHeader';
import View from 'src/Components/View';
import {fontRef, heightRef, widthRef} from 'src/config/screenSize';
import {
  QuizzesData,
  TournamentsJson,
  TournamentsJson3,
  Videos,
} from 'src/utils/JSON';
import TextIcon from 'src/Components/TextIcon';

import styles from './style';
import {CustomButton} from 'src/Components/CustomButton';
import AppHeader from 'src/Components/AppHeader';
import {useDispatch, useSelector} from 'react-redux';
import moment from 'moment';
import {SELECTED_QUESTIONS} from "src/Redux/Reducers/Muqabla's/Muqabla'sActions";
import {GET_SINGLE_TOURNAMENTS} from 'src/Redux/Reducers/Tournaments/TournamentsActions';
import OnxLoading from 'src/Components/OnxLoading';
import FlatListComponent from 'src/Components/FlatListComponent';

const Tab = createMaterialTopTabNavigator();

const Tournaments_1 = props => {
  const tournamentsRes = useSelector(state => state.tournaments.allTournaments);
  const token = useSelector(state => state.auth.token);
  const navigation = useNavigation();
  const [loading, setloading] = useState(false);
  const dispatch = useDispatch();

  //set Quizzes
  const setQuizzes = data => {
    SELECTED_QUESTIONS(data)(dispatch);
  };
  const getQuizzesbyTournaments = id => {
    GET_SINGLE_TOURNAMENTS(
      id,
      token,
    )(dispatch)
      .then(res => {
        if (res.code === 200) {
          navigation.navigate('Muqabla_2');
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
  const renderItem = (item, index) => (
    (given = moment(item?.item?.end_date_time, 'YYYY-MM-DD')),
    (current = moment().startOf('day')),
    (
      <ImageBackground
        source={require('../../../assets/newbottomback2.png')}
        style={styles.imgback}>
        <LinearGradient
          start={{x: 0, y: 0.75}}
          end={{x: 0, y: 0}}
          colors={['rgba(0,0,0,.5)', 'rgba(0,0,0,.01)']}
          style={styles.innerCon}>
          <View style={styles.mainInner}>
            <Text color={fontColorLight}>{item.item.name}</Text>
            <View style={styles.coinsRow}>
              <Image source={require('src/assets/coin.png')} />
              <Text paddingLeft={10} fontSize={10} color={fontColorLight}>
                5 Gold Coins
              </Text>
              <OnxIcon
                name={'dot-single'}
                size={20}
                colorIcon={fontColorLight}
                type={'Entypo'}
              />
              <TextIcon
                size={25}
                paddingLeft={3}
                maxWidth={'90%'}
                color={fontColorLight}
                type={'Entypo'}
                name={'back-in-time'}
                iconcolor={'#AB4695'}
                fontSize={10}>
                {tournamentsRes?.data?.Running?.data?.map(i => i.id) ==
                item?.item?.id
                  ? `Ends ${moment(item?.item?.end_date_time).fromNow()}`
                  : tournamentsRes?.data?.Completed?.data?.map(i => i.id) ==
                    item?.item?.id
                  ? `Ended on ${moment(item?.item?.end_date_time).format(
                      'Do MMMM YYYY',
                    )}`
                  : ` ${moment
                      .duration(given.diff(current))
                      .asDays()} Days Left`}
              </TextIcon>
            </View>
            {tournamentsRes?.data?.Completed?.data?.map(i => i.id) ==
            item?.item?.id ? (
              <View style={styles.prize}>
                <CustomButton
                  onPress={() => {
                    // navigation.navigate('Muqabla_2');
                    setloading(true);
                    if (
                      tournamentsRes?.data?.Completed?.data?.map(i => i.id) ==
                      item?.item?.id
                    ) {
                      setQuizzes(QuizzesData[4]);
                      getQuizzesbyTournaments(item?.item?.id);
                    }
                  }}
                  borderColor={OnxGreen}
                  borderWidth={1}
                  btnRadius={5}
                  textSize={16}
                  textColor={OnxGreen}
                  btnWidth={296 * widthRef}
                  btnHeight={40 * heightRef}
                  text={'View Prizes'}
                />
              </View>
            ) : (
              <View style={styles.coinsRow1}>
                <CustomButton
                  borderColor={OnxGreen}
                  onPress={() => {
                    setloading(true);
                    if (
                      tournamentsRes?.data?.Upcoming?.data?.map(i => i.id) ==
                      item?.item?.id
                    ) {
                      setQuizzes(QuizzesData[2]);
                      getQuizzesbyTournaments(item?.item?.id);
                    } else if (
                      tournamentsRes?.data?.Running?.data?.map(i => i.id) ==
                      item?.item?.id
                    ) {
                      setQuizzes(QuizzesData[3]);
                      getQuizzesbyTournaments(item?.item?.id);
                    }
                  }}
                  borderWidth={1}
                  btnRadius={5}
                  textSize={16}
                  textColor={OnxGreen}
                  btnWidth={140 * widthRef}
                  btnHeight={40 * heightRef}
                  text={'View Prizes'}
                />
                <CustomButton
                  backColor={OnxGreen}
                  onPress={() => {
                    if (
                      tournamentsRes?.data?.Upcoming?.data?.map(i => i.id) ==
                      item?.item?.id
                    ) {
                      setQuizzes(QuizzesData[2]);
                      navigation.navigate('Muqabla_1', {
                        id: item?.item?.id,
                        name: item?.item?.name,
                        Description: item?.item?.description,
                      });
                    } else if (
                      tournamentsRes?.data?.Running?.data?.map(i => i.id) ==
                      item?.item?.id
                    ) {
                      console.log('object');
                      setQuizzes(QuizzesData[3]);
                      navigation.navigate('Muqabla_1', {
                        id: item?.item?.id,
                        name: item?.item?.name,
                        Description: item?.item?.description,
                      });
                    }
                  }}
                  btnRadius={5}
                  textSize={16}
                  btnWidth={140 * widthRef}
                  btnHeight={40 * heightRef}
                  text={'Participate'}
                  fontWeight={'bold'}
                />
              </View>
            )}
          </View>
        </LinearGradient>
      </ImageBackground>
    )
  );
  const Chspters1 = () => (
    <FlatList
      style={{backgroundColor: BgColor}}
      contentContainerStyle={{
        marginTop: 20 * heightRef,
        backgroundColor: BgColor,
      }}
      data={tournamentsRes?.data?.Upcoming?.data}
      keyExtractor={item => item.id}
      renderItem={renderItem}
    />
  );
  const Chspters2 = () => (
    <FlatList
      style={{backgroundColor: BgColor}}
      contentContainerStyle={{
        marginTop: 20 * heightRef,
        backgroundColor: BgColor,
      }}
      data={tournamentsRes?.data?.Running?.data}
      keyExtractor={item => item.id}
      renderItem={renderItem}
    />
  );
  const Chspters3 = () => (
    <FlatList
      style={{backgroundColor: BgColor}}
      contentContainerStyle={{
        marginTop: 20 * heightRef,
        backgroundColor: BgColor,
      }}
      data={tournamentsRes?.data?.Completed?.data}
      keyExtractor={item => item.id}
      renderItem={renderItem}
    />
  );

  return loading ? (
    <OnxLoading />
  ) : (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.mainRoot}>
        <TextHeader
          colorheader={fontColorLight}
          marginTop={20}
          Header={'Tournaments'}
          Description={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
          }
        />
        <View style={styles.tabs}>
          <Tab.Navigator
            screenOptions={{
              tabBarLabelStyle: {
                fontSize: 14,
                textTransform: 'capitalize',
                fontWeight: '500',
              },
              tabBarIndicatorContainerStyle: {
                borderBottomColor: BorderColor,
                width: '100%',
                borderBottomWidth: 1,
              },
              tabBarInactiveTintColor: fontColorDark,
              tabBarActiveTintColor: OnxGreen,
              tabBarIndicatorStyle: {backgroundColor: OnxGreen},
              tabBarStyle: {backgroundColor: BgColor},
            }}>
            <Tab.Screen name="Upcoming" component={Chspters1} />
            <Tab.Screen name="Running" component={Chspters2} />
            <Tab.Screen name="Completed" component={Chspters3} />
          </Tab.Navigator>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Tournaments_1;
