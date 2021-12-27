import {StyleSheet} from 'react-native';
import {BgColor} from 'src/assets/Colors/colors';
import {heightRef, widthRef} from 'src/config/screenSize';
export default styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 15,
    backgroundColor: BgColor,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  quizContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'space-evenly',
  },
  upperCon: {
    flex: 0.6,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    marginLeft: 30 * widthRef,
    height: 200 * heightRef,
    width: 200 * heightRef,
  },
  coinsStyle: {
    height: 32 * heightRef,
    width: 32 * heightRef,
  },
  mainRow: {
    flexDirection: 'row',
  },
  rewardCon: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
  },
  btnCont: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: '100%',
  },
  quizTime: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomConta: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: '100%',
    bottom: -3,
  },
  congrats: {width: '100%', marginVertical: 10 * heightRef},
});
