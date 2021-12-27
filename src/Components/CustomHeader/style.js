import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  root: {
    backgroundColor: '#0D7B8D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backIcon: {
    width: '110%',
    alignItems: 'flex-start',
  },
  backIconImgStyle: {
    height: 28,
    width: 16,
  },
  subRoot: {
    flexDirection: 'row',
    padding: 20,
  },
  textHeading: {
    flex: 0.8,
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
  },
  backIcon: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
    flex: 0.1,
  },
  cancelIcon: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    flex: 0.1,
    textAlign: 'right',
  },
  mainRoot: {
    backgroundColor: 'white',
    flex: 0.5,
    marginHorizontal: 50,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});
