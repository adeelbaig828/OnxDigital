import {StyleSheet} from 'react-native';
import {
  BgColor,
  fontColorDark,
  sliderColorOrange,
  textBackColor,
} from 'src/assets/Colors/colors';
import {fontRef, heightRef, widthRef} from 'src/config/screenSize';
export default styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: BgColor,
    width: '100%',
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyMain: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  root: {
    flex: 1,
    marginHorizontal: 13 * widthRef,
  },
  scndCont: {
    height: '100%',
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  imageView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {height: 32 * heightRef, width: 30 * heightRef},
  goldCoin: {
    marginLeft: 5 * widthRef,
    fontSize: 24 * fontRef,
    fontWeight: '500',
    color: sliderColorOrange,
  },

  leftCont: {
    flexDirection: 'row',
    height: '100%',
    width: '50%',
    alignItems: 'flex-start',
  },
  date: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    height: 56 * heightRef,
    width: 56 * heightRef,
    paddingHorizontal: 8 * widthRef,
    marginRight: 10 * widthRef,
    backgroundColor: textBackColor,
    borderRadius: 8,
  },
  rightCont: {
    width: '50%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'flex-end',
    alignSelf: 'center',
  },
});
