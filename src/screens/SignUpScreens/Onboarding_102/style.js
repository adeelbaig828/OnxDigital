import {StyleSheet} from 'react-native';
import {
  BgColor,
  fontColorLight,
  headerSizeFont,
  sliderColorLight,
} from 'src/assets/Colors/colors';
import {heightRef, widthRef} from 'src/config/screenSize';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BgColor,
  },
  container2: {
    flex: 1,
    backgroundColor: BgColor,
    paddingHorizontal: 14 * widthRef,
  },
  slide1: {
    height: 390 * heightRef,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide1Inner: {
    width: '100%',
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
  bottomConta: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
});
