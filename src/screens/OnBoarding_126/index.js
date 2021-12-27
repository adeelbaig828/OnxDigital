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
const OnBoarding_126 = ({navigation}) => {
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
              Terms and Condition
            </Text>
          </View>
        }
      />
      <View style={styles.container2}>
        <Text color={fontColorDark}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus erat
          augue at mattis rutrum suspendisse. Mauris sed habitasse morbi leo
          tristique mauris, mi lectus sit. Sagittis, sed justo, amet hendrerit
          semper nulla lectus vel, rhoncus. Ut elementum interdum aliquam aenean
          sagittis ultrices vivamus et pulvinar. Egestas sapien odio
          pellentesque ac. Curabitur nt potenti eget auctor rhoncus sem lectus
          enim. Orci, pellentesque pellentesque eget egestas sit enim, dictum. A
          faucibus justo, aliquet ut mi nec, auctor. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Rhoncus erat augue at mattis rutrum
          suspendisse sdaddasd sasass . {`\n\n`} Mauris sed habitasse morbi leo
          tristique mauris, mi lectus sit. Sagittis, sed justo, amet hendrerit
          semper nulla lectus vel, rhoncus. Ut elementum interdum aliquam aenean
          sagittis ultrices vivamus et pulvinar. Egestas sapien odio
          pellentesque ac. Curabitur nt potenti eget auctor rhoncus sem lectus
          enim. Orci, pellentesque pellentesque eget egestas sit enim, dictum. A
          faucibus justo, aliquet ut mi nec, auctor.Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Rhoncus erat augue at mattis rutrum
          suspendisse. Mauris sed habitasse morbi leo tristique mauris, mi
          lectus sit. Sagittis, sed justo, amet hendrerit semper nulla lectus
          vel, rhoncus. Ut elementum interdum aliquam aenean sagittis ultrices
          vivamus et pulvinar. Egestas sapien odio pellentesque ac. Curabitur nt
          potenti eget auctor rhoncus sem lectus enim. Orci, pellentesque
          pellentesque eget egestas sit enim, dictum. A faucibus justo, aliquet
          ut mi nec, auctor.
        </Text>
      </View>
    </View>
  );
};

export default OnBoarding_126;
