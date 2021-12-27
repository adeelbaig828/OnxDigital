import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
const {height, width} = Dimensions.get('window');
export const styles = StyleSheet.create({
  mainRoot: {
    padding: 10,
    backgroundColor: 'white',
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  root: {
    flex: 1,
    paddingLeft: 18,
  },
  itemStyle: {
    padding: 10,
    flexDirection: 'row',
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
    height: 30,
  },
  imgStyle: {
    height: (height * 7) / 100,
    width: (height * 7) / 100,
    opacity: 1,
    marginEnd: 5,
  },
  imgStyle2: {
    height: (height * 2.2) / 100,
    width: (height * 1.9) / 100,
    opacity: 1,
    marginEnd: 5,
  },
  ratingTextCon: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  ratingTextShadCon: {
    elevation: 5,
    borderRadius: 15,
    alignItems: 'flex-end',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  titleText: {
    fontSize: 15,
    fontWeight: '500',
    marginBottom: 5,
    color: '#000000',
  },
  ratingText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  timing: {
    fontSize: 13,
    color: '#A3A1A5',
  },
  timingBlue: {
    fontSize: 13,
    color: '#0D7B8D',
  },
  cuttext: {
    textDecorationLine: 'line-through',
    fontSize: 13,
    color: '#A3A1A5',
  },
  beforeText: {
    fontSize: 13,
    color: '#A3A1A5',
  },
  foodtype: {
    fontSize: 13,
    color: '#0D7B8D',
  },
  hilighted: {
    borderRadius: 15,
    borderColor: '#E6E6E6',
    padding: 7,
    overflow: 'hidden',
    backgroundColor: '#E6E6E6',
    fontSize: 12,
    color: '#000',
  },
  divider: {
    borderBottomColor: '#E6E6E6',
    borderBottomWidth: 1,
    marginHorizontal: 30,
  },
});
