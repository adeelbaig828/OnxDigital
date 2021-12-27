import {StatusBar, StyleSheet} from 'react-native';
import {BgColor, OnxGreen, sliderColorOrange} from 'src/assets/Colors/colors';
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
    // height: '100%',
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
  rootContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingHorizontal: 15,
    backgroundColor: BgColor,
  },
  upperCon: {
    marginVertical: 110 * heightRef,
    flex: 0.6,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomCon: {
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 50 * heightRef,
  },
  imageStyle: {
    height: 70 * heightRef,
    width: 70 * heightRef,
    borderRadius: (150 * heightRef) / 2,
    backgroundColor: OnxGreen,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
