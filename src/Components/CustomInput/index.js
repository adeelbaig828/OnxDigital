import React, {useState} from 'react';
import {SafeAreaView, TextInput, TextInputProps} from 'react-native';
import {styles} from './style';
import Icon from 'react-native-dynamic-vector-icons';
import {
  fontColorDark,
  mediumSizeFont,
  OnxGreen,
  PickWatch,
} from 'src/assets/Colors/colors';
import {fontRef, widthRef} from 'src/config/screenSize';
import {Validations} from 'src/config/function';
import Text from '../Text';
import View from '../View';

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
  value,
  keyboardType,
  validateType,
  validateMessage = '',
  editable,
  ...rest
}: TextInputProps) => {
  const [showError, setShowError] = useState(false);
  let error = Validations[validateType]?.(value) || false;
  // console.log({error, validateType});
  return (
    <SafeAreaView
      style={{
        justifyContent: 'center',
        // alignItems: 'center',
      }}>
      <View
        style={{
          justifyContent: 'center',
          // alignItems: 'center',
        }}>
        <TextInput
          editable={editable}
          style={[
            styles.input,
            {
              borderBottomWidth: borderBottomWidth ? 1 : null,
              borderBottomColor: showError
                ? !error
                  ? PickWatch
                  : OnxGreen
                : OnxGreen,
              fontSize: fontSize ? fontSize * fontRef : mediumSizeFont,
              width: width ? width : '100%',
            },
          ]}
          onChangeText={onChangeText}
          onFocus={() => setShowError(true)}
          value={value}
          ref={rest.textRef}
          placeholder={placeholder}
          placeholderTextColor={fontColorDark}
          keyboardType={keyboardType}
          {...rest}
        />
        <Icon
          onPress={onPress}
          style={styles.icon}
          type={type ? type : 'MaterialIcons'}
          size={IConSize ? IConSize : 25}
          name={name ? name : 'cancel'}
        />
      </View>
      {showError && !error && (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Icon
            color={PickWatch}
            type={'MaterialIcons'}
            size={25}
            name={'info'}
          />
          <Text color={PickWatch} marginLeft={5 * widthRef} fontSize={11.5}>
            {validateMessage}
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
};
