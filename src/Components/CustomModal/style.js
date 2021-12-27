import React from 'react';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  root: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 30,
    paddingHorizontal: 15,
    paddingBottom: 10,
  },
  bioContainer: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
    shadowColor: 'lightgray',
    shadowOffset: {width: 0, height: 0.5},
    shadowOpacity: 0.8,
    shadowRadius: 1,
    elevation: 5,
  },
  bioText: {
    fontSize: 14,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  simpText: {fontSize: 12, color: '#929292'},
  tabViewContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    flex: 0.3,
  },
  backIconImgStyle: {
    height: 30,
    width: 50,
    backgroundColor: 'transparent',
    marginTop: 5,
    marginLeft: 5,
  },
  itemStyle: {
    flex: 0.7,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ratingContainer: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  imgStyle: {
    height: 93,
    width: 93,
    opacity: 1,
    borderRadius: 93 / 2,
    marginEnd: 5,
  },
  ratingTextCon: {
    flex: 1,
    alignItems: 'flex-end',
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  ratingText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  timing: {
    fontSize: 12,
    color: '#A3A1A5',
  },
  foodtype: {
    fontSize: 12,
    color: '#0D7B8D',
  },
  btnUnSelectedStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnUnSelectedText: {
    color: 'white',
    opacity: 0.7098039215686275,
  },
  btnSelectedStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnSelectedText: {
    color: 'white',
    opacity: 1,
    textDecorationLine: 'underline',
  },
});
