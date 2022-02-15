import {useRoute} from '@react-navigation/core';
import React, {useState} from 'react';
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
import {Grade, Grade1, Grade2} from 'src/utils/JSON';
import styles from './style';
const OnBoarding_98 = ({navigation}) => {
  // Actually 121 on XD
  const [selectIndex, setSelectIndex] = useState(null);
  const route = useRoute();

  console.log('route', route.params);

  return (
    <View style={styles.container}>
      <OnxHeader
        left={
          <View style={styles.header}>
            <OnxIcon
              onPress={() => {
                navigation.navigate('OnBoarding_121');
              }}
              colorIcon={fontColorLight}
              name={'arrow-left'}
              type={'MaterialCommunityIcons'}
            />
            <Text bold={'600'} paddingLeft={15} color={fontColorLight}>
              Choose Grade
            </Text>
          </View>
        }
      />
      <View style={styles.bottomContainer}>
        <View style={styles.slide1Inner}>
          <Text style={styles.textSlider}>Illustration</Text>
        </View>
        <View style={styles.MultiColor}>
          <MultiColorText
            textAlign={'center'}
            color={fontColorDark}
            highlightedColor={PickWatch}
            highlightedText={`2 times`}
            textArray={`Sorry you have changed the grades2 timesalready.`}
          />
        </View>
        <Separator width={'100%'} />
        <View style={styles.bottomCont}>
          <Text
            marginbtm={5 * heightRef}
            marginTop={2 * heightRef}
            bold={'600'}
            color={fontColorLight}>
            Still need to change grades?
          </Text>
          <CustomCard
            onPress={() => {
              navigation.navigate('OnBoarding_123', {
                gradeID: route.params.gradeID,
              });
            }}
            marginV={7 * heightRef}
            backColor={textBackColor}
            btnRadius={5}
            btnWidth={'100%'}
            btnHeight={64 * heightRef}>
            <>
              <View style={styles.scndCont}>
                <View style={styles.months}>
                  <TextHeader
                    fontWeight={'600'}
                    fontSizeDesc={12}
                    fontSizeHeader={14}
                    marginTop={6 * heightRef}
                    Header={'Request to change your Grade'}
                    Description={'You can request to our team for grade change'}
                  />
                </View>
                <View style={styles.rightCont}>
                  <OnxIcon
                    size={18 * heightRef}
                    colorIcon={fontColorLight}
                    type={'Feather'}
                    name={'chevron-right'}
                  />
                </View>
              </View>
            </>
          </CustomCard>
        </View>
      </View>
    </View>
  );
};

export default OnBoarding_98;
