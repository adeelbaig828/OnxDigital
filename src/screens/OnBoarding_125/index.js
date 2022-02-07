import React, {useState} from 'react';
import {Image} from 'react-native';
import {
  BorderColor,
  fontColorDark,
  fontColorLight,
  OnxGreen,
  PickWatch,
  sliderColorOrange,
  textBackColor,
} from 'src/assets/Colors/colors';
import {CustomButton} from 'src/Components/CustomButton';
import {CustomCard} from 'src/Components/customCard';
import OnxHeader from 'src/Components/Header';
import MultiColorText from 'src/Components/HighlightedColorText';
import OnxIcon from 'src/Components/OnxIcons';
import Separator from 'src/Components/separator';
import Text from 'src/Components/Text';
import TextHeader from 'src/Components/TextHeader';
import View from 'src/Components/View';
import {heightRef, widthRef} from 'src/config/screenSize';
import {Grade, Grade1, Grade2, SocialMedia} from 'src/utils/JSON';
import styles from './style';
const OnBoarding_125 = ({navigation}) => {
  const [selectIndex, setSelectIndex] = useState(null);

  return (
    <View style={styles.container}>
      <OnxHeader
        left={
          <View style={styles.header}>
            <OnxIcon
              onPress={() => {
                navigation.navigate('BottomNavigation', {
                  screen: 'Home',
                });
              }}
              colorIcon={fontColorLight}
              name={'arrow-left'}
              type={'MaterialCommunityIcons'}
            />
            <Text bold={'600'} paddingLeft={15} color={fontColorLight}>
              Refer and Earn
            </Text>
          </View>
        }
      />
      <View style={styles.container2}>
        <View style={styles.slide1}>
          <View style={styles.slide1Inner}>
            <Text style={styles.textSlider}>Illustration</Text>
          </View>
          <View style={styles.bottomText}>
            <Text style={styles.textSliderHeader}>Earn 20 Silver Coins!</Text>
            <View></View>
            <Text style={styles.textSliderNormal}>
              Lorem ipsum dolor sit amet, dasdssdkl askdlask adipiscing elit r
              adipiscing eli
            </Text>
          </View>
        </View>
        <View style={styles.social}>
          <Text bold={'600'} color={fontColorLight}>
            Invite
          </Text>
          <View style={styles.links}>
            {SocialMedia.map((i, index) => (
              <View style={styles.whatsapp}>
                <Image
                  style={[styles.ImageIconStyle]}
                  source={require('src/assets/whatsapp.png')}
                />
                <Text
                  onPress={() => {
                    index == 3 ? navigation.navigate('OnBoarding_126') : null;
                  }}
                  marginTop={5 * heightRef}
                  color={fontColorLight}>
                  {i.name}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
};

export default OnBoarding_125;
