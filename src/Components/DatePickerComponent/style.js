import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  dateContainer: {
    // position: 'absolute',
    backgroundColor: 'white',
    padding: 14,
    alignItems: 'center',
    // top: 90,
    alignSelf: 'center',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  datePicker: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E8E9EA',
    padding: 7,
    borderRadius: 3,
    marginTop: 5,
  },
  text: {
    fontSize: 10,
    marginStart: 5,
  },
  publishName: {
    color: '#0D7B8D',
    fontSize: 15,
  },
});
