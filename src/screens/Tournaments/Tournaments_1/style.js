import {StyleSheet} from 'react-native';
import {
  BgColor,
  BorderColor,
  fontColorLight,
  OnxGreen,
} from 'src/assets/Colors/colors';
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
    borderColor: BorderColor,
    width: '100%',
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 23 * widthRef,
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
  tabs: {
    width: '100%',
    height: '100%',
    // flex: 1
  },
  imgback: {
    overflow: 'hidden',
    borderRadius: 10,
    marginTop: 10 * heightRef,
    height: 270 * heightRef,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    // padding: 20,
  },
  innerCon: {
    flex: 0.45,
    width: '100%',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  mainInner: {
    height: '100%',
    width: '100%',
    padding: 10 * heightRef,
  },
  coinsRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  coinsRow1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  prize: {alignItems: 'center'},
});
