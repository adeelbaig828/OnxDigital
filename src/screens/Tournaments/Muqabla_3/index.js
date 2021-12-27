import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator} from 'react-native';
import {
  BgColor,
  fontColorDark,
  fontColorLight,
  OnxGreen,
  pureBlackColor,
} from 'src/assets/Colors/colors';
import {CustomButton} from 'src/Components/CustomButton';
import OnxHeader from 'src/Components/Header';
import TextHeader from 'src/Components/TextHeader';
import View from 'src/Components/View';
import {heightRef, widthRef} from 'src/config/screenSize';
import {changelanguage, strings} from 'src/services/translation';
import {quizDataFour} from 'src/utils/JSON';
import styles from './style';
const Muqabla_3 = ({navigation}) => {
  const [loading, setloading] = useState(true);
  const [selectedlanguage, setselectedlanguage] = useState(true);
  useEffect(() => {
    //change language function
    (async () => {
      const language = await AsyncStorage.getItem('language');
      setselectedlanguage(language);
      console.log('language', language);
      language && changelanguage(language);
      setTimeout(() => {
        setloading(false);
      }, 1000);
    })();
  }, []);
  const [selectIndex, setSelectIndex] = useState(null);
  return loading ? (
    <ActivityIndicator
      style={{backgroundColor: BgColor, flex: 1}}
      size={60}
      color={OnxGreen}
    />
  ) : (
    <View style={styles.rootContainer}>
      <OnxHeader
        right={
          <CustomButton
            btnRadius={5}
            textColor={fontColorDark}
            textSize={10}
            btnWidth={62 * widthRef}
            onPress={async () => {
              // navigation.navigate('Successfull_1');
              try {
                setloading(true);
                await AsyncStorage.removeItem('language');
                console.log('object OKk');
                await setloading(false);
              } catch (error) {
                console.log('object error', error);
              }
            }}
            btnHeight={24 * heightRef}
            borderWidth={0.3}
            text={'Submit'}
            fontWeight={'bold'}
            borderColor={fontColorDark}
          />
        }
        titleColor={OnxGreen}
        borderBottomWidth2
        borderWidth1
        title={'01:14'}
      />
      <View style={styles.quizContainer}>
        <TextHeader
          widthHeaderText={'100%'}
          widthDesText={'100%'}
          textAlignHeader={selectedlanguage === 'ur' ? 'right' : 'left'}
          textAlignDes={selectedlanguage === 'ur' ? 'right' : 'left'}
          colorDesc={fontColorLight}
          fontSizeDesc={16}
          fontWeight={'600'}
          Header={selectedlanguage === 'ur' ? '.1' : '1.'}
          Description={
            strings[
              'Noble gases are inert because they have completed outer electron shells. Which of these elements is not a noble gas?'
            ]
          }
        />
        <View style={{width: '100%'}}>
          {quizDataFour.map((data, index) => (
            <CustomButton
              btnRadius={5}
              backColor={index === selectIndex ? 'white' : null}
              textColor={
                index === selectIndex ? pureBlackColor : fontColorLight
              }
              textSize={16}
              marginT={10}
              btnWidth={'100%'}
              onPress={() => setSelectIndex(index)}
              btnHeight={43 * heightRef}
              borderWidth={1}
              text={strings[`${data.text}`]}
              fontWeight={'bold'}
              paddingVertical={10}
              borderColor={fontColorLight}
            />
          ))}
        </View>
        {selectIndex != null ? (
          <CustomButton
            onPress={() => {
              navigation.navigate('Successfull_1');
            }}
            backColor={OnxGreen}
            btnRadius={5}
            textSize={16}
            btnWidth={'100%'}
            btnHeight={43 * heightRef}
            text={'Next'}
            fontWeight={'600'}
            marginT={15 * heightRef}
            paddingVertical={10}
          />
        ) : null}
      </View>
    </View>
  );
};

export default Muqabla_3;
