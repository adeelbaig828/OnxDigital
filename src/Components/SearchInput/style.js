import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    width: '89%',
    height: '20%',
    backgroundColor: 'white',
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 7,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  locationIcon: {
    width: 15,
    height: 20,
  },
  input: {
    width: '90%',
    paddingHorizontal: 10,
    paddingVertical: 5,
    color: 'black',
    // backgroundColor: 'red',
  },
});
