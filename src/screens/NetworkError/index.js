import React, {useRef} from 'react';
import {Image} from 'react-native';
import {fontColorLight, OnxGreen} from 'src/assets/Colors/colors';
import {CustomButton} from 'src/Components/CustomButton';
import Text from 'src/Components/Text';
import TextHeader from 'src/Components/TextHeader';
import View from 'src/Components/View';
import {heightRef, widthRef} from 'src/config/screenSize';
import styles from './style';

const NetworkError = () => {
  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <Image
          resizeMode={'contain'}
          style={styles.imageStyle}
          source={require('src/assets/no-internet.png')}
        />
        <TextHeader
          alignItems={'center'}
          fontWeight={'600'}
          marginTop={6 * heightRef}
          colorheader={fontColorLight}
          Header={'Oops! Network error'}
          Description={'Please try reconnecting to the internet'}
        />
        <View style={styles.coinsRow1}>
          <CustomButton
            backColor={OnxGreen}
            // onPress={() => {
            //   navigation.navigate('Muqabla_1');
            // }}
            IconName={'refresh'}
            btnRadius={5}
            textSize={16}
            btnWidth={128 * widthRef}
            btnHeight={40 * heightRef}
            text={'Retry'}
            fontWeight={'bold'}
          />
          <CustomButton
            borderColor={OnxGreen}
            // onPress={() => {
            //   navigation.navigate('Muqabla_2');
            // }}
            borderWidth={1}
            btnRadius={5}
            textSize={16}
            textColor={OnxGreen}
            btnWidth={128 * widthRef}
            btnHeight={40 * heightRef}
            text={'Open Settings'}
          />
        </View>
      </View>
    </View>
  );
};

export default NetworkError;
