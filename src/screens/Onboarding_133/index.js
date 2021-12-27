import React, {useState} from 'react';
import {Image, KeyboardAvoidingView} from 'react-native';
import {
  BorderColor,
  fontColorDark,
  fontColorLight,
  mediumSizeFont,
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
import TextFeild from 'src/Components/TextFeild';
import TextHeader from 'src/Components/TextHeader';
import View from 'src/Components/View';
import {heightRef, widthRef} from 'src/config/screenSize';
import {GenderData, Grade, Grade1, Grade2} from 'src/utils/JSON';
import styles from './style';
const OnBoarding_133 = ({navigation}) => {
  const [selectIndex, setSelectIndex] = useState(null);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={styles.container}>
      <View style={styles.container}>
        <OnxHeader
          left={
            <View style={styles.header}>
              <OnxIcon
                onPress={() => {
                  navigation.navigate('ProfileScreen_2');
                }}
                colorIcon={fontColorLight}
                name={'arrow-left'}
                type={'MaterialCommunityIcons'}
              />
              <Text bold={'600'} paddingLeft={15} color={fontColorLight}>
                Edit Profile
              </Text>
            </View>
          }
        />
        <View style={styles.bottomContainer}>
          <TextFeild
            // value={''}
            onChangeText={() => {}}
            title={'Profile Name'}
            titleColor={fontColorLight}
            titleSize={mediumSizeFont}
            placeholder={'Enter your name'}
            placeholderColor={fontColorDark}
            maxLengthValidation={1000}
            showPassword={false}
          />
          <TextFeild
            // value={''}
            onChangeText={() => {}}
            title={'Email Id'}
            titleColor={fontColorLight}
            titleSize={mediumSizeFont}
            placeholder={'Enter your Email Id'}
            placeholderColor={fontColorDark}
            maxLengthValidation={1000}
            showPassword={false}
          />
          <TextFeild
            // value={''}
            onChangeText={() => {}}
            title={'Address'}
            titleColor={fontColorLight}
            titleSize={mediumSizeFont}
            placeholder={'Enter your address'}
            placeholderColor={fontColorDark}
            maxLengthValidation={1000}
            showPassword={false}
          />
        </View>
        <View style={styles.ButtonContainer}>
          <View style={{marginTop: 7 * heightRef}}>
            <Text
              paddingLeft={4 * widthRef}
              bold={'600'}
              color={fontColorLight}>
              Gender
            </Text>
            <View style={styles.outerCard}>
              {GenderData.map((data, index) => (
                <View style={styles.mainCard}>
                  <CustomCard
                    btnRadius={9}
                    marginHorizontal={10}
                    onPress={() => setSelectIndex(index)}
                    btnHeight={100 * heightRef}
                    btnWidth={100 * heightRef}
                    style={{borderWidth: 1.4}}
                    borderColor={fontColorLight}>
                    <>
                      <View style={styles.innerCard}>
                        <View style={styles.imageView}>
                          <OnxIcon
                            onPress={() => setSelectIndex(index)}
                            colorIcon={
                              index === selectIndex ? OnxGreen : 'white'
                            }
                            size={27}
                            type={'MaterialCommunityIcons'}
                            name={
                              index === selectIndex
                                ? 'checkbox-marked-circle'
                                : 'checkbox-blank-circle-outline'
                            }
                          />
                        </View>
                        <View style={styles.coinView}>
                          <Image
                            style={styles.image}
                            source={
                              data.id == 1
                                ? require('src/assets/Male.png')
                                : require('src/assets/Female.png')
                            }
                          />
                        </View>
                      </View>
                    </>
                  </CustomCard>
                  <Text bold={'600'} color={fontColorLight}>
                    {data.title}
                  </Text>
                </View>
              ))}
            </View>
          </View>
          <CustomButton
            alignSelf={'center'}
            onPress={() => {
              navigation.navigate('Home');
            }}
            btnHeight={12 * heightRef}
            backColor={OnxGreen}
            text={'Save'}
            btnWidth={'95%'}
            btnHeight={60}
            textColor={'white'}
            textSize={heightRef * 15}
            fontWeight={'bold'}
            justifyContent={'center'}
            alignItems={'center'}
            btnRadius={5}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default OnBoarding_133;
