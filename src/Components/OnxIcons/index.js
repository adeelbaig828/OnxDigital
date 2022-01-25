import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-dynamic-vector-icons';
import {fontColorLight} from 'src/assets/Colors/colors';
import {heightRef} from 'src/config/screenSize';

const OnxIcon = ({
  onPress,
  type,
  size,
  color,
  name,
  position,
  top,
  bottom,
  right,
  colorIcon,
  backRoundBorder,
  backRoundBorderColor,
  left,
  style,
}) => {
  return (
    <View
      style={[
        backRoundBorder
          ? {
              borderRadius: (56 / 2) * heightRef,
              backgroundColor: backRoundBorderColor
                ? backRoundBorderColor
                : 'red',
              height: 50 * heightRef,
              width: 50 * heightRef,
              alignItems: 'center',
              justifyContent: 'center',
            }
          : null,
        style,
      ]}>
      <TouchableOpacity disabled={!onPress} onPress={onPress}>
        <Icon
          style={{
            position: position ? position : null,
            left: left,
            right: right,
            bottom: bottom,
            color: colorIcon,
            top: top,
          }}
          name={name}
          type={type}
          size={size ? size * heightRef : 23 * heightRef}
          color={color ? color : fontColorLight}
        />
      </TouchableOpacity>
    </View>
  );
};

export default OnxIcon;

const styles = StyleSheet.create({});
