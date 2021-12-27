import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export const styles = StyleSheet.create({
  priceComponent: {
    alignItems: 'center',
    marginStart: 5,
  },
  priceSubRoot: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  cutText: {
    fontSize: 15,
    backgroundColor: '#ECECEC',
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 5,
    overflow: 'hidden',
  },
  priceTextStyle: {
    alignItems: 'flex-start',
    borderRadius: 20,
    flex: 0.6,
  },
  iconBack: {
    height: hp('3%'),
    width: hp('3%'),
    marginStart: 15,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  totlaText: {
    fontSize: 18,
    flex: 0.7,
    fontWeight: 'bold',
    textAlign: 'left',
  },

  todayTotlaPrice: {
    fontSize: 15,
    color: '#0D7B8D',
  },
  img: {
    tintColor: '#0D7B8D',
    height: hp('2%'),
    width: hp('2%'),
  },
});
