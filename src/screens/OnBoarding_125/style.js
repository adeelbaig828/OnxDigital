import {StyleSheet} from 'react-native';
import {
  BgColor,
  fontColorDark,
  fontColorLight,
  headerSizeFont,
  normalSizeFont,
  sliderColorLight,
  textBackColor,
} from 'src/assets/Colors/colors';
import {heightRef} from 'src/config/screenSize';
export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BgColor,
    // justifyContent: 'space-between',
  },
  container2: {
    flex: 1,
    backgroundColor: BgColor,
    justifyContent: 'space-between',
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
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
  textSliderNormal: {
    marginTop: 5,
    flexWrap: 'wrap',
    textAlign: 'center',
    color: fontColorDark,
    fontSize: normalSizeFont,
    fontWeight: '400',
  },
  bottomText: {
    flex: 0.2,
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15 * heightRef,
  },
  social: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: textBackColor,
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  links: {
    marginTop: 10 * heightRef,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
  },
  whatsapp: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  ImageIconStyle: {
    height: 21 * heightRef,
    width: 21 * heightRef,
  },
});
