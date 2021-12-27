import React, {useEffect} from 'react';
import {View, SafeAreaView, Image, TouchableOpacity, Text} from 'react-native';
import {fontColorDark} from 'src/assets/Colors/colors';
import {fontRef} from 'src/config/screenSize';
import {styles} from './styles';
export function SplashScreen({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('OnboardingScreen1');
    }, 1000);
  });
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.MainView}>
        <Image
          style={styles.SplashImg}
          source={require('../../assets/SplashImage.png')}
        />
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: 20,
          }}>
          <Text style={styles.SplashText}>Education and distance learning</Text>
          <Text style={styles.SplashText}>gaming platform</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
