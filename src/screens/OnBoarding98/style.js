import {StatusBar, StyleSheet} from 'react-native';
import {
  BgColor,
  BorderColor,
  fontColorLight,
  headerSizeFont,
  sliderColorLight,
  sliderColorOrange,
  textBackColor,
} from 'src/assets/Colors/colors';
import {fullHeight, heightRef, widthRef} from 'src/config/screenSize';
export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BgColor,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  grid: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
  },
  MultiColor: {
    marginTop: 12 * heightRef,
    borderColor: BorderColor,
    borderWidth: 1,
    padding: 10 * heightRef,
    borderRadius: 9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomContainer: {
    flex: 1,
    paddingHorizontal: 15 * heightRef,
  },
  bottomCont: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  slide1Inner: {
    width: '100%',
    height: 280 * heightRef,
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
  months: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scndCont: {
    height: '100%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rightCont: {
    justifyContent: 'center',
    // alignItems: 'flex-end',

    alignSelf: 'center',
    height: '100%',
  },
});
