import {StyleSheet} from 'react-native';
import {
  BgColor,
  BorderColor,
  fontColorLight,
  OnxGreen,
  textBackColor,
} from 'src/assets/Colors/colors';
import {fontRef, heightRef, widthRef} from 'src/config/screenSize';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: BgColor,
  },
  mainRoot: {
    flex: 1,
    paddingHorizontal: 10,
  },
  mainHeaderText: {
    paddingTop: 20,
    color: 'white',
    fontSize: 16,
  },
  MainView: {
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: BorderColor,
    width: '100%',
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 23,
    backgroundColor: BgColor,
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
  BottomNav: {
    position: 'absolute',
    bottom: 0,
    height: '8%',
    width: '100%',
  },
  SearchContainer: {
    height: 30,
    width: 30,
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
  leftBox: {
    justifyContent: 'space-between',
    height: 65 * heightRef,
    paddingVertical: 10 * heightRef,
    paddingLeft: 10 * widthRef,
  },
  scndCont: {
    height: '116%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  headerMain: {width: 260 * widthRef},
  now: {
    flexDirection: 'row',
    width: '40%',
    justifyContent: 'flex-start',
  },
  rightBox: {
    justifyContent: 'flex-end',
    height: '87%',
  },
  textHeader: {
    width: '100%',
  },
  images: {
    height: 60 * heightRef,
    width: 60 * widthRef,
    alignSelf: 'center',
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
    borderRadius: 5,
    backgroundColor: 'rgba(100, 100, 100, 0.5)',
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
});
