import {StyleSheet} from 'react-native';
import {
  BgColor,
  fontColorDark,
  GreenBarColor,
  OnxGreen,
  sliderColorOrange,
  textBackColor,
} from 'src/assets/Colors/colors';
import {fontRef, fullWidth, heightRef, widthRef} from 'src/config/screenSize';
export default styles = StyleSheet.create({
  mainContainer: {
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
  root: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 13 * widthRef,
  },
  imageStyle: {
    resizeMode: 'contain',
    height: 180 * heightRef,
    justifyContent: 'center',

    marginTop: 10,
  },
  imagesSubj: {
    width: 40 * heightRef,
    height: 40 * heightRef,
  },
  menuIcon: {
    width: 56 * heightRef,
    height: 56 * heightRef,
  },
  grade: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomCont: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingHorizontal: 10 * widthRef,
    width: '100%',
  },
  bar1: {
    marginTop: 14 * heightRef,
    width: '80%',
    height: 8 * heightRef,
    backgroundColor: 'white',
    borderRadius: 20,
  },
  bar1Inner: {
    width: '58%',
    height: 8 * heightRef,
    backgroundColor: OnxGreen,
    borderRadius: 20,
  },
  percetage1: {marginVertical: 7 * heightRef},
  green: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    width: 264 * widthRef,
  },
  detail: {
    flexDirection: 'row',
    width: '95%',
    justifyContent: 'space-between',
  },
  quizzes: {
    flexDirection: 'row',
    padding: 17,
    borderRadius: 5,
    justifyContent: 'flex-start',
    backgroundColor: textBackColor,
    alignItems: 'center',
  },
  right: {
    paddingHorizontal: 15 * widthRef,
  },
  iconContHeader: {
    flexDirection: 'row',
    width: '100%',
    marginVertical: 10 * heightRef,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagestyle: {height: 16 * heightRef, width: 16 * heightRef},
  mainRow: {
    flexDirection: 'row',
  },
  coinsStyle: {
    height: 32 * heightRef,
    width: 32 * heightRef,
  },
  now: {
    flexDirection: 'row',
    width: '40%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  grid: {
    justifyContent: 'center',
    addingVertical: 7,
    width: '50%',
  },
  inner1: {
    width: '100%',
    alignItems: 'center',
  },
  inner2: {
    width: '100%',
    alignItems: 'center',
  },
  inner3: {
    alignSelf: 'flex-start',
  },
});
