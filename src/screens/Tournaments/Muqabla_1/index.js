import React from 'react';
import {Image, ImageBackground} from 'react-native';
import {
  fontColorDark,
  fontColorLight,
  OnxGreen,
  pureWhiteColor,
} from 'src/assets/Colors/colors';
import {CustomButton} from 'src/Components/CustomButton';
import OnxHeader from 'src/Components/Header';
import OnxIcon from 'src/Components/OnxIcons';
import Text from 'src/Components/Text';
import TextHeader from 'src/Components/TextHeader';
import TextIcon from 'src/Components/TextIcon';
import View from 'src/Components/View';
import {fontRef, fullWidth, heightRef} from 'src/config/screenSize';
import styles from './style';
const Muqabla_1 = (props, {navigation}) => {
  const textData = [
    {
      text: 'Lorem ipsum dolor sit amet, consectetur',
    },
    {
      text: 'Lorem ipsum dolor sit amet, consectetur',
    },
    {
      text: 'Lorem ipsum dolor sit amet, consectetur',
    },
    {
      text: 'Lorem ipsum dolor sit amet, consectetur',
    },
  ];
  return (
    <View style={styles.rootContainer}>
      <OnxHeader
        borderWidth1
        borderBottomWidth2
        widthHeader={fullWidth}
        left={
          <OnxIcon
            onPress={() => {
              props.navigation.navigate('BottomNavigation', {
                screen: 'Tournaments_1',
              });
            }}
            colorIcon={fontColorLight}
            name={'arrow-left'}
            type={'MaterialCommunityIcons'}
          />
        }
      />
      <View style={styles.upperCon}>
        <Image
          style={styles.adsBack}
          source={require('../../../assets/wholebacl.png')}
        />
        <TextHeader
          colorheader={fontColorLight}
          marginTop={20}
          fontWeight={'500'}
          Header={'Tournament Name'}
          Description={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam massa eget est sit blandit purus.'
          }
        />
        <Text
          marginTop={18 * heightRef}
          bold={'500'}
          color={fontColorLight}
          fontSize={12 * fontRef}>
          Instruction
        </Text>
        {textData.map(text => (
          <TextIcon
            name={'dot-single'}
            type={'Entypo'}
            color={fontColorDark}
            iconcolor={fontColorDark}
            fontSize={12}>
            {text.text}
          </TextIcon>
        ))}
      </View>
      <View style={styles.bottomCon}>
        <CustomButton
          onPress={() => {
            props.navigation.navigate('Muqabla_2');
          }}
          backColor={OnxGreen}
          btnRadius={5}
          textSize={16}
          btnWidth={'100%'}
          btnHeight={43 * heightRef}
          text={'Start Playing'}
          fontWeight={'600'}
          marginT={15 * heightRef}
          paddingVertical={10}
        />
      </View>
    </View>
  );
};

export default Muqabla_1;
