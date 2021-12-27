import {StyleSheet} from 'react-native';
import {BgColor} from 'src/assets/Colors/colors';
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
    flex: 0.9,
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
  },
});
