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
} from 'src/assets/Colors/colors';
import {CustomButton} from 'src/Components/CustomButton';
import OnxIcon from 'src/Components/OnxIcons';
import Separator from 'src/Components/separator';
import Text from 'src/Components/Text';
import TextIcon from 'src/Components/TextIcon';
import View from 'src/Components/View';
import {heightRef, widthRef} from 'src/config/screenSize';
import {Drawer3} from 'src/utils/JSON';
import styles from './style';
import {useNavigation} from '@react-navigation/native';

const ProfileScreen = () => {
  const navigation = useNavigation();

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
        <Text color={fontColorLight}>Profile Name</Text>
        <View style={styles.grade}>
          <Text fontSize={12} color={fontColorDark}>
            5th Grade
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
          <Text bold={'500'} marginTop={10} color={fontColorLight}>
            Account Details
          </Text>
          <TextIcon
            name={'checkbox-blank'}
            type={'MaterialCommunityIcons'}
            size={30}
            color={fontColorGray}
            iconcolor={IconColorDark}
            fontSize={12}>
            {'+91 9883490281'}
          </TextIcon>
          <Separator marginVertical={15} width={'100%'} />
          <View style={styles.detail}>
            <Text bold={'500'} color={fontColorLight}>
              Profile Details
            </Text>
            <OnxIcon
              onPress={() => {
                navigation.navigate('OnBoarding_133');
              }}
              name={'pen'}
              size={13 * heightRef}
              colorIcon={OnxGreen}
              type={'FontAwesome5'}
            />
          </View>
          {Drawer3.map(i => (
            <TextIcon
              name={'checkbox-blank'}
              type={'MaterialCommunityIcons'}
              size={30}
              color={IconColorDark}
              iconcolor={IconColorDark}
              fontSize={14}>
              {i.name}
            </TextIcon>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
