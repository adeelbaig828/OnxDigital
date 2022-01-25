/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {heightRef, widthRef} from 'src/config/screenSize';
import Icon from 'react-native-dynamic-vector-icons';
// import globalStyles from '../../config/globalStyle';
import Entypo from 'react-native-vector-icons/Entypo';
import {
  BgColor,
  eyeColor,
  fontColorDark,
  fontColorLight,
  PickWatch,
} from 'src/assets/Colors/colors';
import OnxIcon from '../OnxIcons';
import {validateEmail} from 'src/config/function';
const InputField = (
  {
    title, /// Defines the title above text field.
    value, /// Defines any predefined value for any text field.
    onChangeText, /// Defines method when text changes
    style, /// Defines style of text field view (height, width, paddings etc)
    message, /// Defines any information below the text field.
    placeholder, /// Placeholder of text field.
    placeholderColor = '#D8D8D8', /// Placeholder text color.
    inner, /// Defines style of inner field container.
    textFieldStyle, /// Defines text field style.
    titleColor = fontColorDark, /// Color of the title.
    titleSize, /// Font size of the title.
    borderWidth = 10, /// Border width of the text field.
    borderRadius = 5, /// Defines the corner of text field.
    borderColor = fontColorLight, /// Color of the outline of text field.
    multiline, /// Defines text field for multiline input.
    fontWeight,
    paddingLeft,
    validateMessage,
    validateType,
    emailValid,
    SearchIcon, // add search icon on right side
    password, /// Defines if the text field is for password.
    editable = true, ///Defines if the field is editable or not.
    maxLengthValidation = maxLengthValidation ? maxLengthValidation : 20,
    minLengthValidation = 8,
    textAlign = 'left',
    // showPassword = showPassword ? showPassword : false,
    emailValidation,
    Focus = () => {},
    Blur = () => {},
    onPress,
    hideValidation = true,
    width,
  },
  ref,
) => {
  const [showPassword, setShowPassword] = React.useState(true);
  const [messageText, setMessageText] = React.useState('');
  let error = validateEmail(emailValid);
  React.useImperativeHandle(ref, () => ({
    validate: messageText === '',
  }));

  return (
    <>
      <TouchableOpacity
        disabled={messageText}
        onPress={onPress}
        activeOpacity={1}
        style={[
          styles.container,
          {
            minHeight: title !== undefined ? 113 * heightRef : 66 * heightRef,
          },
          style,
        ]}>
        {inner === undefined && title !== undefined ? (
          <Text
            style={{
              fontSize: titleSize || 11 * heightRef,
              color: titleColor,
              fontWeight: fontWeight ? fontWeight : 'bold',
              marginVertical: 15 * heightRef,
            }}>
            {title}
          </Text>
        ) : null}
        <View
          style={[
            styles.textView(inner !== undefined),
            inner !== undefined
              ? {
                  borderColor: borderColor,
                  borderRadius: borderRadius,
                  borderWidth: borderWidth,
                }
              : {},
          ]}>
          {inner !== undefined && title !== undefined ? (
            <Text
              style={{
                fontSize: 11 * heightRef,
                width: '100%',
                color: titleColor,
              }}>
              {title}
            </Text>
          ) : null}
          <TextInput
            style={[
              styles.textField(inner !== undefined),
              {
                height:
                  multiline !== undefined ? 100 * heightRef : 48 * heightRef,
                textAlignVertical: multiline !== undefined ? 'top' : 'center',
                paddingVertical: multiline !== undefined ? 20 : 0,
                textAlign,
                paddingLeft: paddingLeft ? 53 * widthRef : null,
              },
              textFieldStyle,
              inner !== undefined
                ? {}
                : {
                    borderColor: borderColor,
                    borderRadius: borderRadius,
                    borderWidth: 0.5,
                  },
            ]}
            {...{
              value,
              onChangeText: Text => {
                onChangeText(Text);
                if (emailValidation == true) {
                  if (Text === '') {
                    setMessageText(`${title} cannot be empty`);
                  } else {
                    (reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/),
                      reg.test(Text) == false
                        ? setMessageText(`${title} is in invalid format`)
                        : setMessageText('');
                  }
                } else {
                  Text === ''
                    ? setMessageText(`${title} cannot be empty`)
                    : Text.length <= minLengthValidation
                    ? setMessageText(
                        `${title} cannot be less than ${minLengthValidation} characters`,
                      )
                    : Text.length >= maxLengthValidation
                    ? setMessageText(
                        `${title} cannot be more than ${maxLengthValidat} characters`,
                      )
                    : setMessageText('');
                }
              },
              placeholder,
            }}
            enablesReturnKeyAutomatically
            secureTextEntry={
              password === undefined || paddingLeft ? false : showPassword
            }
            editable={onPress !== undefined ? false : editable}
            numberOfLines={multiline !== undefined ? 5 : 1}
            multiline={multiline || false}
            placeholderTextColor={placeholderColor}
            onFocus={() => {
              Focus();
            }}
            onBlur={() => {
              Blur();
            }}
          />
          {password === true ? (
            <TouchableOpacity
              onPress={() => setShowPassword(state => !state)}
              style={
                paddingLeft
                  ? {
                      position: 'absolute',
                      left: 20 * widthRef,
                    }
                  : {
                      position: 'absolute',
                      right: 20 * widthRef,
                    }
              }>
              {SearchIcon ? (
                <OnxIcon
                  name={'search'}
                  type={'Fontisto'}
                  colorIcon={eyeColor}
                  size={12 * heightRef}
                />
              ) : (
                <Entypo
                  name={!showPassword ? 'eye' : 'eye-with-line'}
                  size={20 * heightRef}
                  color={eyeColor}
                />
              )}
            </TouchableOpacity>
          ) : null}
        </View>
      </TouchableOpacity>
      {!hideValidation && (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          {messageText != '' ? (
            <Icon
              color={PickWatch}
              type={'MaterialIcons'}
              size={25}
              name={'info'}
            />
          ) : null}
          {messageText != '' ? (
            <Text
              style={{
                color: PickWatch,
              }}
              marginLeft={5 * widthRef}
              fontSize={11.5}>
              {messageText}
            </Text>
          ) : null}
        </View>
      )}
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingHorizontal: 5,
    width: '100%',
  },
  textView: state => ({
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    width: '100%',
    alignSelf: 'center',
    marginVertical: state ? 3 : 0,
    maxHeight: 46 * heightRef,
  }),
  textField: state => ({
    backgroundColor: BgColor,
    width: '100%',
    paddingHorizontal: state ? 0 : 20 * widthRef,
    color: fontColorDark,
    flex: 1,
    fontSize: 14 * heightRef,
  }),
});
export default React.forwardRef(InputField);
