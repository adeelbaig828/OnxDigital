import React, {useState} from 'react';
import {FlatList, Image, Modal, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  BgColor,
  BorderColor,
  fontColorDark,
  fontColorLight,
  mediumSizeFont,
  OnxGreen,
  sliderBackColor,
  sliderBAckColorOrange,
  sliderColorOrange,
  textBackColor,
} from 'src/assets/Colors/colors';
import {CustomButton} from 'src/Components/CustomButton';
import {CustomCard} from 'src/Components/customCard';
import FlatListComponent from 'src/Components/FlatListComponent';
import OnxHeader from 'src/Components/Header';
import MultiColorText from 'src/Components/HighlightedColorText';
import OnxIcon from 'src/Components/OnxIcons';
import Separator from 'src/Components/separator';
import Text from 'src/Components/Text';
import TextFeild from 'src/Components/TextFeild';
import TextHeader from 'src/Components/TextHeader';
import TextIcon from 'src/Components/TextIcon';
import View from 'src/Components/View';
import {fontRef, heightRef, widthRef} from 'src/config/screenSize';
import styles from './style';

const Muqabla_44 = (props, {navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <OnxHeader
        borderWidth1
        borderBottomWidth2
        left={
          <View style={[styles.header, {flexDirection: 'row'}]}>
            <OnxIcon
              onPress={() => {
                props.navigation.navigate('Home');
              }}
              colorIcon={fontColorLight}
              name={'arrow-left'}
              type={'MaterialCommunityIcons'}
            />
            <Text bold={'600'} paddingLeft={16} color={fontColorLight}>
              Physics
            </Text>
          </View>
        }
      />
      <View style={styles.root}>
        <TextHeader
          fontWeight={'600'}
          marginTop={6 * heightRef}
          Header={'Quizzes by Topics'}
          Description={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
          }
        />
        <FlatListComponent
          type={3}
          marginR={24 * widthRef}
          renderItem={({item, index, container}) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate('Muqabla_43');
                }}
                style={[styles.quizzes, container]}>
                <Image source={require('src/assets/MaskGroup.png')} />
                <View style={styles.right}>
                  <Text color={fontColorLight} width={150 * widthRef}>
                    Respect for Public Property
                  </Text>
                  <Text
                    fontSize={12}
                    color={fontColorDark}
                    marginTop={7 * heightRef}
                    width={150 * widthRef}>
                    Class 9 • English
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
          data={[1, 1, 1, 1]}
        />
        <TextHeader
          fontWeight={'600'}
          marginTop={16 * heightRef}
          Header={'Quizzes by Chapters'}
          Description={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
          }
        />
        <FlatListComponent
          type={3}
          marginR={24 * widthRef}
          renderItem={({item, index, container}) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate('Muqabla_43');
                }}
                style={[styles.quizzes, container]}>
                <Image source={require('src/assets/MaskGroup.png')} />
                <View style={styles.right}>
                  <Text color={fontColorLight} width={150 * widthRef}>
                    Respect for Public Property
                  </Text>
                  <Text
                    fontSize={12}
                    color={fontColorDark}
                    marginTop={7 * heightRef}
                    width={150 * widthRef}>
                    Class 9 • English
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
          data={[1, 1, 1, 1]}
        />
      </View>
    </View>
  );
};

export default Muqabla_44;
