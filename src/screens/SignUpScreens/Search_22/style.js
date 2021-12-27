import {StyleSheet} from 'react-native';
import {
  BgColor,
  fontColorLight,
  headerSizeFont,
  mediumSizeFont,
  sliderColorLight,
} from 'src/assets/Colors/colors';
import {heightRef, widthRef} from 'src/config/screenSize';
export default styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: BgColor,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  underScroll: {width: '100%', alignItems: 'center', flex: 1},
  textHeader: {
    width: '100%',
  },
  slide1: {
    flex: 0.5,
    marginBottom: 10 * heightRef,
    width: '100%',
    height: '100%',
  },
  slide2: {
    width: '100%',
  },
  slide1Inner2: {
    width: '100%',
    height: 99 * heightRef,
    backgroundColor: sliderColorLight,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  slide1Inner: {
    width: '100%',
    height: '100%',
    backgroundColor: sliderColorLight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textSlider3: {
    color: fontColorLight,
    fontSize: mediumSizeFont,
    fontWeight: '600',
  },
  textSlider2: {
    color: fontColorLight,
    fontSize: mediumSizeFont,
    marginVertical: 2 * heightRef,
    fontWeight: '600',
  },
  textSlider: {
    color: fontColorLight,
    fontSize: headerSizeFont,
    fontWeight: '600',
  },
  bottomConta: {
    paddingHorizontal: 10,
    flex: 1,
    justifyContent: 'space-between',
    width: '100%',
  },
});
