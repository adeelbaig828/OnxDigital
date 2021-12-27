import {StyleSheet} from 'react-native';
import {
  BgColor,
  fontColorDark,
  fontColorLight,
  headerSizeFont,
  mediumSizeFont,
  normalSizeFont,
  OnxGreen,
  sliderColorLight,
} from 'src/assets/Colors/colors';
import {fontRef, heightRef} from 'src/config/screenSize';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: BgColor,
    paddingVertical: 10,
  },
  MainView: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 1,
  },
  SplashImg: {
    height: 64 * heightRef,
    width: 64 * heightRef,
  },
  SplashText: {
    color: fontColorDark,
    fontSize: 14 * fontRef,
  },
  swipperStyle: {
    height: '70%',
  },
  slide1: {
    flex: 0.7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide1Inner: {
    width: '90%',
    flex: 0.7,
    borderRadius: 10,
    backgroundColor: sliderColorLight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  login: {
    color: OnxGreen,
    fontSize: mediumSizeFont,
  },
  bottomText: {
    flex: 0.1,
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: '10%',
  },
  slide2: {
    flex: 0.7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide3: {
    flex: 0.7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide4: {
    flex: 0.7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textSlider: {
    color: fontColorLight,
    fontSize: headerSizeFont,
    fontWeight: '600',
  },
  textSliderHeader: {
    color: fontColorLight,
    fontSize: headerSizeFont,
    fontWeight: '600',
  },
  upperText: {
    color: fontColorDark,
    fontSize: mediumSizeFont,
  },
  upperTextView: {
    width: '100%',
    marginRight: '10%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  textSliderNormal: {
    marginTop: 5,
    textAlign: 'center',
    width: '70%',
    color: fontColorLight,
    fontSize: normalSizeFont,
    fontWeight: '400',
  },
});
