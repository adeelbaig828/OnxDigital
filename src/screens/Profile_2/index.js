import React from 'react';
import {Image, ImageBackground} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  BgColor,
  fontColorDark,
  fontColorGray,
  fontColorLight,
  IconColorDark,
  OnxGreen,
  PickWatch,
} from 'src/assets/Colors/colors';
import {CustomButton} from 'src/Components/CustomButton';
import OnxIcon from 'src/Components/OnxIcons';
import Separator from 'src/Components/separator';
import Text from 'src/Components/Text';
import TextIcon from 'src/Components/TextIcon';
import View from 'src/Components/View';
import {heightRef, widthRef} from 'src/config/screenSize';
import {Drawer3, Drawer4} from 'src/utils/JSON';
import styles from './style';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {CLEAR_LOGOUT_TOKEN} from 'src/Redux/Reducers/Auth/AuthActions';

const ProfileScreen_2 = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const Profile = useSelector(state => state.muqablas.studentProfile);
  const handleLogout = () => {
    try {
      CLEAR_LOGOUT_TOKEN()(dispatch);
      console.log('try');
      navigation.navigate('OnboardingScreen1');
    } catch (error) {
      console.log('try', error);
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: BgColor}}>
      <View style={styles.mainContainer}>
        <View>
          <ImageBackground
            style={styles.menuIcon}
            source={require('src/assets/ProfilePic.png')}>
            <OnxIcon
              position={'absolute'}
              right={0}
              top={40}
              colorIcon={OnxGreen}
              type={'MaterialCommunityIcons'}
              name={'pencil-circle'}
            />
          </ImageBackground>
        </View>
        <Text color={fontColorLight}>
          {Profile?.data?.first_name + ' ' + Profile?.data?.last_name}
        </Text>
        <View style={styles.grade}>
          <Text fontSize={12} color={fontColorDark}>
            {Profile?.data?.grade?.name_num_th} Grade
          </Text>
          <OnxIcon
            name={'dot-single'}
            size={20 * heightRef}
            colorIcon={fontColorDark}
            type={'Entypo'}
          />
          <Text color={fontColorDark} fontSize={12}>
            Badge Logo
          </Text>
        </View>
        <CustomButton
          marginT={10 * heightRef}
          borderColor={OnxGreen}
          borderWidth={1.5}
          fontWeight={'500'}
          onPress={() => {
            navigation.navigate('OnBoarding_121');
          }}
          btnRadius={5}
          textSize={14}
          textColor={OnxGreen}
          btnWidth={140 * widthRef}
          btnHeight={40 * heightRef}
          text={'Change Grade'}
        />
        <Separator width={'100%'} />
        <View style={styles.bottomCont}>
          <Text color={fontColorLight}>Profile Completion</Text>
          <View style={styles.bar1}>
            <View style={styles.bar1Inner}></View>
          </View>
          <View style={styles.percetage1}>
            <View style={styles.green}>
              <Text fontSize={12} color={OnxGreen}>
                40% completed
              </Text>
              <Text fontSize={12} color={fontColorLight}>
                {' '}
                58%
              </Text>
            </View>
          </View>
          <Text color={fontColorDark} fontSize={12}>
            Note - Complete your profile 100% to eann a badge
          </Text>
          <Text bold={'500'} marginTop={10} color={fontColorDark}>
            Account Details
          </Text>
          <TextIcon
            name={'call-sharp'}
            type={'Ionicons'}
            size={20}
            color={fontColorGray}
            iconcolor={fontColorDark}
            fontSize={12}>
            {Profile?.data?.phone_number}
          </TextIcon>
          <Separator marginVertical={15} width={'100%'} />
          <View style={styles.detail}>
            <Text bold={'500'} color={fontColorDark}>
              Profile Details
            </Text>
            <View style={styles.edit}>
              <Text
                onPress={() => {
                  navigation.navigate('OnBoarding_133');
                }}
                bold={'500'}
                color={OnxGreen}>
                Edit
              </Text>
              <OnxIcon
                name={'pen'}
                size={13 * heightRef}
                colorIcon={OnxGreen}
                type={'FontAwesome5'}
              />
            </View>
          </View>
          {Drawer4.map((i, index) => (
            <TextIcon
              name={
                i.id == 1
                  ? 'ios-person-circle-sharp'
                  : i.id == 2
                  ? 'mail'
                  : i.id == 3
                  ? 'home'
                  : 'transgender'
              }
              type={
                i.id == 1
                  ? 'Ionicons'
                  : i.id == 2
                  ? 'Ionicons'
                  : i.id == 3
                  ? 'Entypo'
                  : 'FontAwesome'
              }
              size={23 * widthRef}
              color={fontColorDark}
              iconcolor={fontColorDark}
              fontSize={14}>
              {index === 0
                ? Profile?.data?.first_name + ' ' + Profile?.data?.last_name
                : index === 1
                ? Profile?.data?.email
                : index === 2
                ? Profile?.data?.address
                : Profile?.data?.gender}
            </TextIcon>
          ))}
          <CustomButton
            btnRadius={5}
            //   backColor={index === selectIndex ? 'white' : null}
            textColor={PickWatch}
            textSize={16}
            marginT={10 * heightRef}
            btnWidth={'100%'}
            onPress={() => handleLogout()}
            btnHeight={43 * heightRef}
            borderWidth={1}
            text={'Log Out'}
            fontWeight={'bold'}
            paddingVertical={10}
            borderColor={PickWatch}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen_2;
