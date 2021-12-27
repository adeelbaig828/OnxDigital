import React from 'react';
import {Platform, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';
import {
  fontColorLight,
  fontWeight600,
  OnxGreen,
} from 'src/assets/Colors/colors';
import {CustomButton} from 'src/Components/CustomButton';
import {CustomInput} from 'src/Components/CustomInput';
import {SearchInput} from 'src/Components/SearchInput';
import {heightRef} from 'src/config/screenSize';
import {styles} from './style';

const OnBoardingScreen2 = ({navigation}) => {
  const inset = useSafeAreaInsets();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={[styles.root]}>
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.main}>
          <Text style={styles.textStyleHeader}>Enter your mobile number</Text>
          <Text style={styles.textStyleNormal}>
            Create your account using your 10 digit mobile number
          </Text>
          <CustomInput
            borderBottomWidth
            placeholder={'+91 9663490021'}
            onPress={() => {}}
          />
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'center',
            paddingBottom: 10,
          }}>
          <CustomButton
            onPress={() => {
              navigation.navigate('OnBoardingScreen3');
            }}
            btnHeight={12 * heightRef}
            backColor={OnxGreen}
            text={'Continue'}
            btnWidth={'95%'}
            btnHeight={60}
            textColor={'white'}
            textSize={heightRef * 16}
            fontWeight={fontWeight600}
            justifyContent={'center'}
            alignItems={'center'}
            btnRadius={5}
          />
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default OnBoardingScreen2;
