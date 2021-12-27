import React from 'react';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 7,
  },
  itemStyle: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemSubStyle: {
    padding: 10,
    flexDirection: 'row',
  },
  ratingContainer: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  imgStyle: {
    height: 52,
    width: 52,
    opacity: 1,
    borderRadius: 52 / 2,
    marginEnd: 5,
  },
  ratingTextCon: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000000',
  },
  ratingText: {
    fontSize: 12,
    color: '#000000',
    marginLeft: 5,
  },
  timing: {
    fontSize: 12,
    color: '#0D7B8D',
  },
  foodtype: {
    fontSize: 12,
    color: '#000',
  },
  divider: {
    borderBottomColor: '#E6E6E6',
    borderBottomWidth: 1,
    marginHorizontal: 30,
  },
  textColor: {
    color: '#0D7B8D',
  },
});
