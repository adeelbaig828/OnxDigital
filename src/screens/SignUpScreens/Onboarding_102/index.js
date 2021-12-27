import React from 'react';
import {fontColorLight, OnxGreen} from 'src/assets/Colors/colors';
import {CustomButton} from 'src/Components/CustomButton';
import MultiColorProgressBar from 'src/Components/ProgressBar';
import Text from 'src/Components/Text';
import TextHeader from 'src/Components/TextHeader';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import View from 'src/Components/View';
import {fullWidth, heightRef, widthRef} from 'src/config/screenSize';
import styles from './style';
const OnBoarding_102 = ({navigation}) => {
  const inset = useSafeAreaInsets();
  return (
    <View
      style={[
        styles.container,
        {
          paddingBottom: Platform.OS === 'ios' ? inset.bottom : 0,
        },
      ]}>
      <MultiColorProgressBar number={1} />
      <View style={styles.container2}>
        <TextHeader
          marginTop={15 * heightRef}
          fontSizeHeader={32}
          fontWeight={'500'}
          Header={'Hi there!'}
          fontSizeDesc={14}
          colorDesc={fontColorLight}
          Description={
            'We need some infomation about you to give personalized experience'
          }
        />
        <View style={styles.slide1}>
          <View style={styles.slide1Inner}>
            <Text style={styles.textSlider}>Illustration</Text>
          </View>
        </View>
      </View>
      <View style={styles.bottomConta}>
        <CustomButton
          onPress={() => {
            navigation.navigate('OnBoarding_103');
          }}
          backColor={OnxGreen}
          textSize={16}
          btnWidth={fullWidth}
          btnHeight={43 * heightRef}
          text={'Begin'}
          fontWeight={'600'}
        />
      </View>
    </View>
  );
};

export default OnBoarding_102;
