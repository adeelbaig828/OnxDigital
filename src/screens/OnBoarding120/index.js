import React, {useState} from 'react';
import {
  BorderColor,
  fontColorLight,
  OnxGreen,
  PickWatch,
  sliderColorOrange,
  textBackColor,
} from 'src/assets/Colors/colors';
import {CustomButton} from 'src/Components/CustomButton';
import OnxHeader from 'src/Components/Header';
import MultiColorText from 'src/Components/HighlightedColorText';
import OnxIcon from 'src/Components/OnxIcons';
import Text from 'src/Components/Text';
import View from 'src/Components/View';
import {heightRef, widthRef} from 'src/config/screenSize';
import {Grade, Grade1, Grade2} from 'src/utils/JSON';
import styles from './style';
const OnBoarding_121 = ({navigation}) => {
  const [selectIndex, setSelectIndex] = useState(null);

  return (
    <View style={styles.container}>
      <OnxHeader
        left={
          <View style={styles.header}>
            <OnxIcon
              onPress={() => {
                navigation.navigate('Home');
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
        <View style={styles.grid}>
          {Grade.map((i, index) => (
            <CustomButton
              onPress={() => setSelectIndex(i.name)}
              marginHorizontal={4 * heightRef}
              marginV={14 * heightRef}
              borderColor={BorderColor}
              backColor={i.name === selectIndex ? OnxGreen : null}
              borderWidth={1}
              btnRadius={10}
              textSize={16}
              btnWidth={104 * widthRef}
              btnHeight={104 * heightRef}
              textColor={i.name === selectIndex ? 'white' : fontColorLight}
              text={i.name}
            />
          ))}
        </View>
        <View style={styles.grid}>
          {Grade1.map((i, index) => (
            <CustomButton
              onPress={() => setSelectIndex(i.name)}
              backColor={i.name === selectIndex ? OnxGreen : null}
              marginHorizontal={4 * heightRef}
              borderColor={BorderColor}
              borderWidth={1}
              btnRadius={10}
              textSize={16}
              btnWidth={104 * widthRef}
              btnHeight={104 * heightRef}
              textColor={i.name === selectIndex ? 'white' : fontColorLight}
              text={i.name}
            />
          ))}
        </View>
        <View style={styles.grid}>
          {Grade2.map((i, index) => (
            <CustomButton
              onPress={() => setSelectIndex(i.name)}
              marginHorizontal={4 * heightRef}
              marginV={14 * heightRef}
              borderColor={BorderColor}
              backColor={i.name === selectIndex ? OnxGreen : null}
              borderWidth={1}
              btnRadius={10}
              textSize={16}
              btnWidth={104 * widthRef}
              btnHeight={104 * heightRef}
              textColor={i.name === selectIndex ? 'white' : fontColorLight}
              text={i.name}
            />
          ))}
        </View>
        <View style={styles.bottomCont}>
          <View style={styles.MultiColor}>
            <MultiColorText
              textAlign={'center'}
              color={fontColorLight}
              highlightedColor={PickWatch}
              highlightedText={`2 times`}
              textArray={`You can change your grade only2 timesin a year`}
            />
          </View>
          <CustomButton
            backColor={OnxGreen}
            btnRadius={5}
            textSize={16}
            btnWidth={'100%'}
            btnHeight={43 * heightRef}
            onPress={() => {
              navigation.navigate('OnBoarding_98');
            }}
            text={'Confirm'}
            fontWeight={'600'}
            marginT={15 * heightRef}
          />
        </View>
      </View>
    </View>
  );
};

export default OnBoarding_121;
