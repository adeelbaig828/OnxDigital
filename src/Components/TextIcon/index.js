/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text as RNText, TextProps, TouchableOpacity} from 'react-native';
import {fontColorDark, fontColorLight} from 'src/assets/Colors/colors';
import globalStyles from 'src/config/globalStyles';
import {fontRef, heightRef, widthRef} from 'src/config/screenSize';
import OnxIcon from '../OnxIcons';
import View from '../View';

const TextIcon = ({
  color = fontColorDark,
  fontSize = 14,
  bold,
  width,
  children,
  paddingVertical = 0,
  style,
  textAlignVertical = 'center',
  onPress,
  paddingLeft,
  marginLeft,
  size = 20,
  maxWidth,
  circle,
  iconcolor,
  iconBAckGroundColor,
  onPressText,
  type = 'Feather',
  name = 'check-circle',
  ...rest
}: TextProps) => {
  return (
    <View
      style={{
        marginLeft: marginLeft ? marginLeft * heightRef : null,
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: paddingVertical ? paddingVertical : 10,
      }}>
      {circle ? (
        <View
          style={{
            height: 18 * heightRef,
            width: 18 * heightRef,
            borderRadius: (18 / 2) * heightRef,
            backgroundColor: fontColorLight,
          }}
        />
      ) : (
        <View
          style={{
            backgroundColor: iconBAckGroundColor ? iconBAckGroundColor : null,
            borderRadius: 20,
          }}>
          <OnxIcon
            onPress={onPress}
            type={type}
            colorIcon={iconcolor}
            name={name}
            size={size}
          />
        </View>
      )}

      <RNText
        onPress={onPressText}
        style={[
          {
            maxWidth: maxWidth,
            paddingLeft: paddingLeft ? paddingLeft : 10,
            color,
            fontWeight: bold !== undefined ? 'bold' : 'normal',
            fontSize: fontSize * fontRef,
            paddingVertical: paddingVertical * heightRef,
            textAlignVertical,
          },
          width !== undefined ? {width} : {},
          style,
        ]}
        {...rest}>
        {children}
      </RNText>
    </View>
  );
};

export default TextIcon;
