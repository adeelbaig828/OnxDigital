import {StyleSheet} from 'react-native';
import {BgColor, fontColorLight, OnxGreen} from 'src/assets/Colors/colors';
import {fontRef, heightRef, widthRef} from 'src/config/screenSize';
export default styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // justifyContent: 'flex-start',
    // alignItems: 'center',
    backgroundColor: BgColor,
  },
  MainView: {
    paddingHorizontal: 10,
    paddingTop: 20,
    borderBottomWidth: 1,
    borderColor: BgColor,
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 23,
  },
  menuIcon: {
    tintColor: fontColorLight,
    width: 20 * heightRef,
    height: 20 * heightRef,
  },
  GetButton: {
    height: 24 * heightRef,
    width: 62 * widthRef,
    borderRadius: 2,
    backgroundColor: OnxGreen,
    justifyContent: 'center',
    alignItems: 'center',
  },
  RightContainer: {
    flexDirection: 'row',
    flex: 0.45,
    alignItems: 'center',
  },
  SearchIcon: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  SearchContainer: {
    height: 30,
    width: 30,
  },
  mainRoot: {
    flex: 1,
    paddingHorizontal: 10,
  },
  count: {
    backgroundColor: fontColorLight,
    position: 'absolute',
    right: 10,
    top: -10,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    height: 17 * heightRef,
    width: 17 * heightRef,
  },
  countText: {
    fontSize: 10 * fontRef,
    color: 'black',
  },
  imageStyleScnd: {
    resizeMode: 'cover',
    height: 200 * heightRef,
    width: '100%',
    marginTop: 20,
    borderRadius: 10,
    // backgroundColor: 'red',
    overflow: 'hidden',
    paddingVertical: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  innerIMage: {
    padding: 13,
    marginBottom: 10 * heightRef,
    borderRadius: 5,
    backgroundColor: 'rgba(100, 100, 100, 0.5)',
  },
  headerMain: {width: 260 * widthRef},
  now: {
    flexDirection: 'row',
    width: '40%',
    justifyContent: 'flex-start',
  },
  locker: {
    width: 250 * heightRef,
    // backgroundColor: 'red',
  },
});
