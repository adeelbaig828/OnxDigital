import React from 'react';
import {Image, ImageBackground} from 'react-native';
import {
  fontColorDark,
  fontColorLight,
  OnxGreen,
  pureWhiteColor,
  textBackColor,
} from 'src/assets/Colors/colors';
import {CustomButton} from 'src/Components/CustomButton';
import {CustomCard} from 'src/Components/customCard';
import OnxHeader from 'src/Components/Header';
import OnxIcon from 'src/Components/OnxIcons';
import Text from 'src/Components/Text';
import TextHeader from 'src/Components/TextHeader';
import TextIcon from 'src/Components/TextIcon';
import View from 'src/Components/View';
import {fontRef, fullWidth, heightRef, widthRef} from 'src/config/screenSize';
import styles from './style';
const Muqabla_43 = (props, {navigation}) => {
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
        marginBottom
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
        <CustomCard
          marginV={6}
          padding={10 * heightRef}
          backColor={textBackColor}
          paddinginner={-10}
          btnRadius={5}
          btnWidth={328 * widthRef}
          onPress={() => console.log('Pressed')}
          btnHeight={112 * heightRef}>
          <View>
            <Text
              marginbtm={10}
              color={fontColorLight}
              bold={'600'}
              fontSize={16}>
              Rewards
            </Text>
            <View style={styles.mainRow}>
              <View style={styles.leftImages}>
                <Image
                  style={styles.coinsStyle}
                  source={require('src/assets/coin.png')}
                />
                <TextHeader
                  marginL={8 * widthRef}
                  fontSizeHeader={12}
                  fontSizeDesc={16}
                  colorDesc={fontColorLight}
                  colorheader={fontColorLight}
                  Header={'Points earned'}
                  Description={'3 Points'}
                />
              </View>
              <View style={styles.rightImages}>
                <Image
                  style={styles.coinsStyle}
                  source={require('src/assets/Group.png')}
                />
                <TextHeader
                  widthHeaderText={'75%'}
                  marginL={8 * widthRef}
                  fontSizeHeader={11}
                  colorDesc={fontColorLight}
                  fontSizeDesc={16}
                  colorheader={fontColorLight}
                  Header={'Silver coins earned'}
                  Description={'1 Silver Coin'}
                />
              </View>
            </View>
          </View>
        </CustomCard>
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
            props.navigation.navigate('Muqabla_3');
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

export default Muqabla_43;
