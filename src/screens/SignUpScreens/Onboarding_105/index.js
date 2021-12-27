import React from 'react';
import {FlatList} from 'react-native';
import {
  FlatlistItemSep,
  fontColorDark,
  fontColorLight,
  GrayIConColorDArk,
  OnxGreen,
  textBackColor,
} from 'src/assets/Colors/colors';
import {CustomButton} from 'src/Components/CustomButton';
import {CustomCard} from 'src/Components/customCard';
import {CustomInput} from 'src/Components/CustomInput';
import OnxHeader from 'src/Components/Header';
import OnxIcon from 'src/Components/OnxIcons';
import Text from 'src/Components/Text';
import View from 'src/Components/View';
import {heightRef, widthRef} from 'src/config/screenSize';
import {NoonSchool} from 'src/utils/JSON';
import styles from './style';
const OnBoarding_105 = ({navigation}) => {
  const SeparateComponent = () => (
    <View style={{height: 1, backgroundColor: FlatlistItemSep}} />
  );
  const renderItem = item => (
    <CustomCard
      paddinginner={0.1}
      onPress={() => console.log(item, 'Pressed')}
      btnWidth={338 * widthRef}
      btnHeight={54 * heightRef}>
      <>
        <View style={styles.leftCont}>
          <Text color={fontColorLight}>{item.item.name}</Text>
        </View>
        <View style={styles.rightCont}>
          <OnxIcon
            colorIcon={GrayIConColorDArk}
            size={20 * heightRef}
            type={'Entypo'}
            name={'chevron-small-right'}
          />
        </View>
      </>
    </CustomCard>
  );
  return (
    <View style={styles.mainContainer}>
      <OnxHeader
        left={
          <View style={styles.header}>
            <OnxIcon
              onPress={() => {
                navigation.navigate('OnBoarding_104');
              }}
              colorIcon={fontColorDark}
              name={'arrow-left'}
              type={'MaterialCommunityIcons'}
            />
            <CustomInput
              fontSize={14}
              type={'AntDesign'}
              name={'close'}
              IConSize={24}
              width={310 * widthRef}
              placeholder={'Noon school'}
              onPress={() => {}}
            />
          </View>
        }
      />
      <View style={styles.main1}>
        <FlatList
          ItemSeparatorComponent={SeparateComponent}
          data={NoonSchool}
          style={styles.flatlistContainer}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
        />
      </View>
      <View style={[styles.ButtonContainer, {paddingBottom: 20}]}>
        <Text marginbtm={9} color={fontColorLight}>
          Can’t see your school name? Add manually
        </Text>
        <CustomButton
          onPress={() => {
            navigation.navigate('OnBoarding_106');
          }}
          btnHeight={12 * heightRef}
          backColor={OnxGreen}
          text={'Add Your School'}
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
  );
};

export default OnBoarding_105;
