import React, {useEffect} from 'react';
import {View, SafeAreaView, Image, TouchableOpacity, Text} from 'react-native';
import {
  fontColorDark,
  fontColorLight,
  OnxGreen,
} from 'src/assets/Colors/colors';
import {CustomButton} from 'src/Components/CustomButton';
import {fontRef, fullHeight, heightRef} from 'src/config/screenSize';
import Swiper from 'react-native-swiper';

import {styles} from './styles';
export function OnboardingScreen1({navigation}) {
  useEffect(() => {});
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.MainView}>
        <View style={styles.upperTextView}>
          <Text style={styles.upperText}>
            Already registered ?
            <Text
              style={styles.login}
              onPress={() => {
                navigation.navigate('OnBoardingScreen2');
              }}>
              {' '}
              Login
            </Text>
          </Text>
        </View>
        <Swiper
          style={styles.swipperStyle}
          activeDotColor={OnxGreen}
          paginationStyle={{top: fullHeight / 2}}
          autoplay={true}>
          <View style={styles.slide1}>
            <View style={styles.slide1Inner}>
              <Text style={styles.textSlider}>Illustration</Text>
            </View>
            <View style={styles.bottomText}>
              <Text style={styles.textSliderHeader}>
                Play Tournamnets, Win Prizes!
              </Text>
              <Text style={styles.textSliderNormal}>
                Text about the above heading it can go upto two lines
              </Text>
            </View>
          </View>
          <View style={styles.slide2}>
            <View style={styles.slide1Inner}>
              <Text style={styles.textSlider}>Illustration</Text>
            </View>
            <View style={styles.bottomText}>
              <Text style={styles.textSliderHeader}>
                Play Tournamnets, Win Prizes!
              </Text>
              <Text style={styles.textSliderNormal}>
                Text about the above heading it can go upto two lines
              </Text>
            </View>
          </View>
          <View style={styles.slide3}>
            <View style={styles.slide1Inner}>
              <Text style={styles.textSlider}>Illustration</Text>
            </View>
            <View style={styles.bottomText}>
              <Text style={styles.textSliderHeader}>
                Play Tournamnets, Win Prizes!
              </Text>
              <Text style={styles.textSliderNormal}>
                Text about the above heading it can go upto two lines
              </Text>
            </View>
          </View>
          <View style={styles.slide4}>
            <View style={styles.slide1Inner}>
              <Text style={styles.textSlider}>Illustration</Text>
            </View>
            <View style={styles.bottomText}>
              <Text style={styles.textSliderHeader}>
                Play Tournamnets, Win Prizes!
              </Text>
              <Text style={styles.textSliderNormal}>
                Text about the above heading it can go upto two lines
              </Text>
            </View>
          </View>
        </Swiper>
        <CustomButton
          onPress={() => {
            navigation.navigate('OnBoardingScreen2');
          }}
          btnHeight={10 * heightRef}
          backColor={OnxGreen}
          text={'Get Started'}
          btnWidth={'95%'}
          btnHeight={'7%'}
          textColor={'white'}
          textSize={heightRef * 15}
          fontWeight={'bold'}
          justifyContent={'center'}
          alignItems={'center'}
          btnRadius={5}
        />
      </View>
    </SafeAreaView>
  );
}
