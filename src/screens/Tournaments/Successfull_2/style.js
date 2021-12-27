import {StyleSheet} from 'react-native';
import {
  avgcolor,
  BgColor,
  GreenBarColor,
  OnxGreen,
  QuizColor,
  textBackColor,
  Trophycolor,
} from 'src/assets/Colors/colors';
import {heightRef, widthRef} from 'src/config/screenSize';
export default styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    // paddingHorizontal: 15,
    backgroundColor: BgColor,
  },
  quizContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-start',
    backgroundColor: textBackColor,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    padding: 10 * heightRef,
    marginTop: 10 * heightRef,
  },
  summary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  better: {
    width: '100%',
    borderBottomEndRadius: 15,
    borderBottomStartRadius: 15,
    justifyContent: 'center',
    overflow: 'hidden',
    height: 40 * heightRef,
    backgroundColor: QuizColor,
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
  questions: {
    height: 164 * heightRef,
    overflow: 'hidden',
    borderRadius: 5,
    justifyContent: 'flex-start',
  },
  listHeaderCom: {
    height: 240 * heightRef,
    backgroundColor: textBackColor,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10 * heightRef,
  },
  leftErrorView: {
    height: '100%',
    width: '2%',
    overflow: 'hidden',
    position: 'absolute',
    left: 0,
  },
  header1: {
    height: '100%',
    justifyContent: 'space-between',
  },
  header2: {
    width: 328 * widthRef,
    height: 187 * heightRef,
  },
  header3: {
    width: '100%',
    paddingHorizontal: 20 * widthRef,
    marginTop: 14 * heightRef,
  },
  bar1: {
    marginTop: 14 * heightRef,
    width: '100%',
    height: 16 * heightRef,
    backgroundColor: GreenBarColor,
    borderRadius: 20,
  },
  bar1Inner: {
    width: '58%',
    height: 16 * heightRef,
    backgroundColor: OnxGreen,
    borderRadius: 20,
  },
  avgPerc: {
    paddingHorizontal: 20 * widthRef,

    marginTop: 14 * heightRef,
    width: '100%',
  },
  bar1Bottom: {
    marginTop: 14 * heightRef,
    width: '100%',
    height: 16 * heightRef,
    backgroundColor: avgcolor,
    borderRadius: 20,
  },
  bar1BottomInner: {
    width: '78%',
    height: 16 * heightRef,
    backgroundColor: Trophycolor,
    borderRadius: 20,
  },
  percetage1: {position: 'absolute', right: -20, top: -25},
});
