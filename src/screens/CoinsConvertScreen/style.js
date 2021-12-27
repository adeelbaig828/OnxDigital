import {StyleSheet} from 'react-native';
import {
  BgColor,
  fontColorDark,
  fontColorLight,
  sliderBackColor,
  sliderColorOrange,
} from 'src/assets/Colors/colors';
import {fontRef, heightRef, widthRef} from 'src/config/screenSize';
export default styles = StyleSheet.create({
  mainContainer: {
    flex: 1,

    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: BgColor,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  root: {
    width: '100%',
    alignItems: 'flex-start',
    paddingHorizontal: 10,
  },
  scndCont: {
    height: '100%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  scndContainer: {
    width: '100%',
    justifyContent: 'space-between',
  },
  months: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  upperSide: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {height: 31 * heightRef, width: 30 * heightRef},
  goldCoin: {
    marginLeft: 5 * widthRef,
    fontSize: 24 * fontRef,
    fontWeight: '500',
    color: fontColorLight,
  },

  rightCont: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    width: '30%',
    alignSelf: 'center',
    height: '100%',
  },
  downSide: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  mainModal: {
    backgroundColor: sliderBackColor,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerModal: {
    justifyContent: 'space-evenly',
    backgroundColor: BgColor,
    height: 259 * heightRef,
    width: 343 * widthRef,
    padding: 20,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  coloText: {
    justifyContent: 'space-between',
    height: 35 * heightRef,
  },
});
