// AddressProgressBar
import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {
  BorderColor,
  fontColorDark,
  fontColorLight,
  OnxGreen,
  sliderColorOrange,
  pureWhiteColor,
  BgColor,
} from 'src/assets/Colors/colors';
import {heightRef, widthRef} from 'src/config/screenSize';
import View from '../View';
import OnxIcon from '../OnxIcons';

const AddressProgressBar = ({
  number,
  active,
  completed,
  next,
  labelText,
  isNextLineActive,
}) => {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <View
          style={{
            backgroundColor: completed
              ? OnxGreen
              : active
              ? sliderColorOrange
              : 'transparent',
            borderColor: active ? BorderColor : BorderColor,
            borderWidth: 1,
            height: heightRef * 25,
            width: heightRef * 25,
            borderRadius: (25 / 2) * heightRef,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {completed ? (
            <OnxIcon
              onPress={() => setShowModal(false)}
              size={20}
              colorIcon={pureWhiteColor}
              type={'AntDesign'}
              name={'check'}
            />
          ) : (
            <Text style={{color: next ? fontColorLight : BgColor}}>
              {number}
            </Text>
          )}
        </View>
        {number == 1 || number == 2 ? (
          <View
            style={{
              borderBottomColor: isNextLineActive
                ? sliderColorOrange
                : BorderColor,
              borderBottomWidth: 1,
              width: 100 * widthRef,
              alignSelf: 'center',
            }}
          />
        ) : null}
      </View>
      <View
        style={{
          marginTop: 10,
          alignSelf: 'flex-start',
        }}>
        <Text
          style={{
            color: active ? sliderColorOrange : fontColorDark,
            marginLeft:
              labelText == 'Order Summary'
                ? -25 * heightRef
                : labelText == 'Address'
                ? -10 * heightRef
                : 0,
          }}>
          {labelText}
        </Text>
      </View>
    </View>
  );
};

export default AddressProgressBar;

const styles = StyleSheet.create({});
