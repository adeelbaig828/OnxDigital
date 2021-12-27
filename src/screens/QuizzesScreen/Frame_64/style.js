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

  imageStyle: {
    resizeMode: 'contain',
    height: 180 * heightRef,
    justifyContent: 'center',

    marginTop: 10,
  },
  menuIcon: {
    width: 56 * heightRef,
    height: 56 * heightRef,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
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
  tabs: {
    width: '100%',
    height: '100%',
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
