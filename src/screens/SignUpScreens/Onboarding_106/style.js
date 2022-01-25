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
    justifyContent: 'space-between',
  },
  container2: {
    flex: 0.95,
    backgroundColor: BgColor,
    paddingHorizontal: 14 * widthRef,
    justifyContent: 'space-between',
  },
  contentStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: '100%',
    width: '100%',
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
  bottomContainer: {
    height: '100%',
  },
  coinView: {
    justifyContent: 'center',
    paddingBottom: 1 * heightRef,
    alignItems: 'flex-end',
    height: 35 * heightRef,
  },
  grid: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 7,
  },
  innerCard: {
    justifyContent: 'space-between',
    width: '100%',
    height: 90 * heightRef,
  },
  imageView: {
    height: 35 * heightRef,
    justifyContent: 'flex-end',
  },
});
