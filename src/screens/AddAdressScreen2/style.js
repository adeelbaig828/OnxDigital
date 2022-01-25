import {StatusBar, StyleSheet} from 'react-native';
import {
  BgColor,
  BorderColor,
  fontColorLight,
  sliderColorOrange,
  textBackColor,
} from 'src/assets/Colors/colors';
import {fullHeight, heightRef, widthRef} from 'src/config/screenSize';
export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BgColor,
    // paddingTop: StatusBar.currentHeight,
  },
  root: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: BgColor,
    height: '100%',
  },
  dropdownmain: {
    width: '50%',
    height: 90 * heightRef,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainContainr: {
    width: '100%',
    paddingHorizontal: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dropdown3: {
    fontWeight: 'bold',
    color: fontColorLight,
  },
  dropdown1: {
    borderRadius: 2,
    borderColor: BorderColor,
    backgroundColor: 'transparent',
    alignSelf: 'flex-end',
    width: '60%',
  },
  dropdown2: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
  },
  discountinner1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  discountinner: {
    // flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  discountouter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: textBackColor,
    height: 60 * heightRef,
  },
  gpsView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  gpsInnerView: {
    backgroundColor: sliderColorOrange,
    minHeight: 45 * heightRef,
    width: widthRef * 170,
    marginTop: 50 * heightRef,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  gpsText: {
    color: BgColor,
    marginLeft: 10,
    fontWeight: '500',
  },
  cityView: {
    flexDirection: 'row',
  },
  halfTextField: {width: widthRef * 170},
  innerCard: {height: '100%'},
});
