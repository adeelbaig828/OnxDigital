import React, {useEffect, useState} from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  BgColor,
  BorderColor,
  fontColorDark,
  fontColorGray,
  fontColorLight,
  IconColorDark,
  OnxGreen,
  textBackColor,
  Trophycolor,
} from 'src/assets/Colors/colors';
import {CustomButton} from 'src/Components/CustomButton';
import OnxIcon from 'src/Components/OnxIcons';
import Separator from 'src/Components/separator';
import Text from 'src/Components/Text';
import TextIcon from 'src/Components/TextIcon';
import View from 'src/Components/View';
import {fullWidth, heightRef, widthRef} from 'src/config/screenSize';
import {Drawer3, Subjects} from 'src/utils/JSON';
import styles from './style';
import {useNavigation} from '@react-navigation/native';
import AppHeader from 'src/Components/AppHeader';
import {CustomCard} from 'src/Components/customCard';
import TextHeader from 'src/Components/TextHeader';
import FlatListComponent from 'src/Components/FlatListComponent';
import {useDispatch, useSelector} from 'react-redux';
import {GET_STUDENT_PROFILE} from "src/Redux/Reducers/Muqabla's/Muqabla'sActions";
import {GET_SUBJECTS_BY_GRADE} from 'src/Redux/Reducers/Books/BooksActions';
import OnxLoading from 'src/Components/OnxLoading';

const QuizzesMainScreen = () => {
  const [loading, setloading] = useState(false);

  const navigation = useNavigation();
  const token = useSelector(state => state.auth.token);
  const Profile = useSelector(state => state.muqablas.studentProfile);
  const subjects = useSelector(state => state.booksData.subjectsbyGraade);
  // console.log('ProfileProfileProfile', JSON.stringify(Profile, null, 3));
  const dispatch = useDispatch();

  useEffect(() => {
    setloading(true);
    handleProfile();
    getSubjectsByGrade();
  }, []);

  const checkUser = token => {
    if (!token) {
      return false;
    }
    return true;
  };
  const handleProfile = () => {
    if (!checkUser) {
      setloading(false);
      return;
    }
    GET_STUDENT_PROFILE(token)(dispatch)
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

  const getSubjectsByGrade = () => {
    //change the hardcoded grade when api working fine
    GET_SUBJECTS_BY_GRADE(
      3,
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
    <SafeAreaView style={{flex: 1, backgroundColor: BgColor}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.mainContainer}>
          <View>
            <ImageBackground
              style={styles.menuIcon}
              source={require('src/assets/ProfilePic.png')}></ImageBackground>
          </View>
          <Text bold={'500'} color={fontColorLight}>
            {Profile?.data?.first_name + ' ' + Profile?.data?.last_name}
          </Text>
          <View style={styles.iconContHeader}>
            <Image
              style={styles.imagestyle}
              source={require('src/assets/coin.png')}
            />
            <Text marginLeft={5} fontSize={12} color={fontColorLight}>
              {Profile?.data?.total_gold_coins} Gold Coins
            </Text>
            <Text marginHorizontal={10}>|</Text>
            <Image
              style={styles.imagestyle}
              source={require('src/assets/Group.png')}
            />
            <Text
              marginLeft={5 * heightRef}
              color={fontColorLight}
              fontSize={12}>
              {Profile?.data?.total_silver_coins} Silver Coins
            </Text>
          </View>
          <CustomCard
            marginV={14}
            padding={10 * heightRef}
            backColor={textBackColor}
            paddinginner={1}
            btnRadius={5}
            btnWidth={328 * widthRef}
            onPress={() => console.log('Pressed')}
            btnHeight={112 * heightRef}>
            <View
              style={{
                height: 82 * heightRef,
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text color={fontColorLight} bold={'600'} fontSize={16}>
                  Leaderboard rank
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('LeaderboardScreen');
                  }}
                  style={styles.now}>
                  <Text
                    // onPress={() => {
                    //   navigation.navigate('CoinsConvertScreen', {
                    //     from: 'Home',
                    //   });
                    // }}
                    paddingRight={5}
                    color={OnxGreen}
                    fontSize={10}>
                    View
                  </Text>
                  <OnxIcon
                    colorIcon={OnxGreen}
                    size={15}
                    type={'AntDesign'}
                    name={'rightcircleo'}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.mainRow}>
                <View
                  style={{
                    flexDirection: 'row',
                    width: '50%',
                    alignItems: 'center',
                  }}>
                  <OnxIcon
                    name={'ios-location-sharp'}
                    size={18 * heightRef}
                    colorIcon={fontColorLight}
                    type={'Ionicons'}
                  />
                  <TextHeader
                    marginVerticalDes
                    marginL={8 * widthRef}
                    fontSizeHeader={12}
                    fontSizeDesc={16}
                    colorDesc={fontColorLight}
                    colorheader={fontColorLight}
                    Header={'Pakistan'}
                    Description={'1002'}
                  />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    width: '50%',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                  }}>
                  <OnxIcon
                    name={'ios-globe-outline'}
                    size={18 * heightRef}
                    colorIcon={fontColorLight}
                    type={'Ionicons'}
                  />
                  <TextHeader
                    marginVerticalDes
                    marginL={8 * widthRef}
                    fontSizeHeader={12}
                    fontSizeDesc={16}
                    colorDesc={fontColorLight}
                    colorheader={fontColorLight}
                    Header={'Global'}
                    Description={'10020012'}
                  />
                </View>
              </View>
            </View>
          </CustomCard>
          <Separator width={'100%'} />
          <View style={styles.bottomCont}>
            <TextHeader
              fontWeight={'600'}
              marginTop={15}
              Header={'Popular Quizzes'}
              Description={
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
              }
            />
            <FlatListComponent
              type={3}
              marginR={24 * widthRef}
              renderItem={({item, index, container}) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('Muqabla_43');
                    }}
                    style={[styles.quizzes, container]}>
                    <Image source={require('src/assets/MaskGroup.png')} />
                    <View style={styles.right}>
                      <Text color={fontColorLight} width={150 * widthRef}>
                        Respect for Public Property
                      </Text>
                      <Text
                        fontSize={12}
                        color={fontColorDark}
                        marginTop={7 * heightRef}
                        width={150 * widthRef}>
                        Class 9 • English
                      </Text>
                    </View>
                  </TouchableOpacity>
                );
              }}
              data={[1, 1, 1, 1]}
            />
            <TextHeader
              fontWeight={'600'}
              marginTop={15}
              Header={'Quizzes by Subjects'}
              Description={
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
              }
            />
            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                flexWrap: 'wrap',
                justifyContent: 'flex-start',
                alignItems: 'center',
              }}>
              {subjects?.data?.data?.map((i, index) => (
                <CustomCard
                  onPress={() => {
                    navigation.navigate('Muqabla_44', {
                      Name: i.name,
                    });
                  }}
                  justifyContent={'space-evenly'}
                  btnRadius={10}
                  marginV={7 * heightRef}
                  backColor={textBackColor}
                  marginHorizontal={5 * widthRef}
                  btnWidth={159 * widthRef}
                  btnHeight={108 * widthRef}
                  style={{borderWidth: 1 * widthRef}}
                  borderColor={BorderColor}>
                  <>
                    <View style={styles.inner1}>
                      <View style={styles.inner1}>
                        <Image
                          style={styles.imagesSubj}
                          source={require('src/assets/NumbersSubj.png')}
                        />
                      </View>
                      <View style={styles.inner3}>
                        <Text
                          marginTop={10 * heightRef}
                          color={fontColorLight}
                          bold={'500'}
                          fontSize={12}>
                          {i.name}
                        </Text>
                      </View>
                    </View>
                  </>
                </CustomCard>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default QuizzesMainScreen;
