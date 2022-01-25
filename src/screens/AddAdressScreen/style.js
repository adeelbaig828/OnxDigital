import {StatusBar, StyleSheet} from 'react-native';
import {
  BgColor,
  sliderColorOrange,
  textBackColor,
} from 'src/assets/Colors/colors';
import {fullHeight, heightRef, widthRef} from 'src/config/screenSize';
export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BgColor,
  },
  root: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: BgColor,
    height: '100%',
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
  gpsView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '98%',
    justifyContent: 'space-between',
  },
  gpsInnerView: {
    backgroundColor: sliderColorOrange,
    minHeight: 45 * heightRef,
    width: widthRef * 160,
    marginTop: 50 * heightRef,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  textBack: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: textBackColor,
    height: 60 * heightRef,
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
