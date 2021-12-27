import React from 'react';
import {SafeAreaView, TextInput} from 'react-native';
import {styles} from './style';
import Icon from 'react-native-dynamic-vector-icons';
import {
  fontColorDark,
  mediumSizeFont,
  OnxGreen,
} from 'src/assets/Colors/colors';
import {fontRef} from 'src/config/screenSize';

export const CustomInput = ({
  text,
  onChangeText,
  width,
  onPress,
  placeholder,
  borderBottomWidth = 0,
  fontSize,
  IConSize,
  name,
  type,
}) => {
  return (
    <SafeAreaView
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <TextInput
        t
        style={[
          styles.input,
          {
            borderBottomWidth: borderBottomWidth ? 1 : null,
            borderBottomColor: OnxGreen,
            fontSize: fontSize ? fontSize * fontRef : mediumSizeFont,
            width: width ? width : '100%',
          },
        ]}
        onChangeText={onChangeText}
        value={text}
        placeholder={placeholder}
        placeholderTextColor={fontColorDark}
        keyboardType={text}
      />
      <Icon
        onPress={onPress}
        style={styles.icon}
        type={type ? type : 'MaterialIcons'}
        size={IConSize ? IConSize : 30}
        name={name ? name : 'cancel'}
      />
    </SafeAreaView>
  );
};
