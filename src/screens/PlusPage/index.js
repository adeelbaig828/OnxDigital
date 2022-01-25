import React, {useRef, useState} from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from 'react-native';
import OnxHeader from 'src/Components/Header';
import OnxIcon from 'src/Components/OnxIcons';
import View from 'src/Components/View';
import styles from './style';
import Text from 'src/Components/Text';
import {
  fontColorDark,
  fontColorLight,
  OnxGreen,
  pureWhiteColor,
} from 'src/assets/Colors/colors';
import TextIcon from 'src/Components/TextIcon';
import {CustomButton} from 'src/Components/CustomButton';
import {heightRef} from 'src/config/screenSize';
import TextHeader from 'src/Components/TextHeader';
import PlansModal from 'src/Components/PlansModal';

const PlusPageScreen = ({navigation}) => {
  const modalRef = useRef();
  const textData = [
    {
      text: 'Get access to interactive books',
    },
    {
      text: 'Earn silver coins at 2X rate',
    },
    {
      text: 'Earn silver coins at 2X rate',
    },
    {
      text: 'Earn silver coins at 2X rate',
    },
  ];
  return (
    <View style={styles.container}>
      <PlansModal
        onPress={() => {
          navigation.navigate('PaymentGatewayScreen');
          modalRef.current.close();
        }}
        perMonths={'200'}
        perYears={'2400'}
        ref={modalRef}
      />
      <ScrollView style={styles.scrolStyle}>
        <OnxHeader
          left={
            <View style={styles.header}>
              <OnxIcon
                onPress={() => {
                  navigation.navigate('HomeScreen');
                }}
                colorIcon={fontColorLight}
                name={'arrow-left'}
                type={'MaterialCommunityIcons'}
              />
              <Text bold={'600'} paddingLeft={16} color={fontColorLight}>
                Plus
              </Text>
            </View>
          }
        />
        <View style={styles.underScroll}>
          <Image
            style={styles.imageStyle}
            source={require('../../assets/Frame.png')}
          />
          <View style={styles.textHeader}>
            <Text
              bold={'600'}
              fontSize={16}
              color={fontColorLight}
              width={'70%'}>
              Get{' <Query> '}subscription and unlock more
            </Text>
            {textData.map(text => (
              <TextIcon iconcolor={pureWhiteColor} fontSize={12}>
                {text.text}
              </TextIcon>
            ))}
          </View>
          <CustomButton
            backColor={OnxGreen}
            btnRadius={5}
            textSize={16}
            onPress={() => modalRef.current.open()}
            btnWidth={'100%'}
            btnHeight={43 * heightRef}
            text={'Get Subscription'}
            fontWeight={'bold'}
            marginT={15 * heightRef}
            paddingVertical={10}
          />
          <Text paddingVertical={10} fontSize={12}>
            How questions about the subscription?
          </Text>
          <CustomButton
            btnRadius={5}
            textColor={fontColorLight}
            textSize={16}
            btnWidth={'100%'}
            btnHeight={43 * heightRef}
            borderWidth={0.2}
            text={'Talk to our experts'}
            fontWeight={'bold'}
            paddingVertical={10}
            borderColor={fontColorDark}
          />
          <TextHeader
            marginTop={20}
            Header={'Visual Books'}
            Description={'Let’s explore learning with quizzes'}
          />
          <ImageBackground
            source={require('../../assets/whole.png')}
            style={styles.imageStyleScnd}>
            <OnxIcon
              right={25}
              top={15}
              size={35}
              colorIcon={fontColorDark}
              position={'absolute'}
              type={'MaterialIcons'}
              name={'lock'}
            />
          </ImageBackground>
        </View>
      </ScrollView>
    </View>
  );
};

export default PlusPageScreen;
