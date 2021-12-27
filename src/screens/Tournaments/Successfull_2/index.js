import React, {useState} from 'react';
import {FlatList} from 'react-native';
import {
  avgcolor,
  BgColor,
  BorderColor,
  Crosscolor,
  CrossQuizcolor,
  fontColorLight,
  GreenBarColor,
  OnxGreen,
  pureWhiteColor,
  QuizColor,
  QuizTExtColor,
  textBackColor,
  Trophycolor,
} from 'src/assets/Colors/colors';
import {CustomButton} from 'src/Components/CustomButton';
import {CustomCard} from 'src/Components/customCard';
import OnxHeader from 'src/Components/Header';
import MultiColorText from 'src/Components/HighlightedColorText';
import OnxIcon from 'src/Components/OnxIcons';
import Separator from 'src/Components/separator';
import Text from 'src/Components/Text';
import TextIcon from 'src/Components/TextIcon';
import View from 'src/Components/View';
import {heightRef, widthRef} from 'src/config/screenSize';
import {AttemptPersons} from 'src/utils/JSON';

import styles from './style';

const Successfull_2 = ({navigation}) => {
  const quizData = [
    {
      text: 'Correct',
      number: 1,
    },
    {
      text: 'Incorrect',
      number: 2,
    },
    {
      text: 'Duration',
      number: 3,
    },
    {
      text: 'Skipped',
      number: 4,
    },
  ];
  const renderItem1 = (item, index) => (
    <CustomCard
      btnRadius={5}
      backColor={'cyan'}
      marginT={15}
      backColor={BgColor}
      paddinginner={-0.1}
      onPress={() => console.log(item, 'Pressed')}
      btnHeight={164 * heightRef}>
      <View style={styles.questions}>
        <Text
          marginTop={10}
          marginLeft={15 * widthRef}
          fontSize={12}
          color={fontColorLight}>
          {item.item.id}. Question number {item.item.id}
        </Text>
        <Separator marginVertical={10 * heightRef} width={339 * widthRef} />
        {quizData.map(i => (
          <View style={{height: '18%', marginLeft: 15 * widthRef}}>
            <TextIcon
              iconBAckGroundColor={pureWhiteColor}
              circle={i.number == 3 ? true : i.number == 4 ? true : false}
              paddingVertical={0.1}
              // onPress={() => setSelectIndex(index)}
              color={fontColorLight}
              type={i.number == 1 ? 'AntDesign' : 'AntDesign'}
              name={i.number == 1 ? 'closecircle' : 'checkcircle'}
              iconcolor={i.number == 1 ? Crosscolor : OnxGreen}
              size={18}
              fontSize={12}>
              Options {i.number}
            </TextIcon>
          </View>
        ))}
        <View
          style={[
            styles.leftErrorView,
            {backgroundColor: item.item.id == 1 ? CrossQuizcolor : OnxGreen},
          ]}
        />
      </View>
    </CustomCard>
  );
  const PositionsContainer_1 = () => (
    <View style={styles.header1}>
      <CustomCard
        backColor={BgColor}
        btnRadius={15}
        paddinginner={-1}
        btnWidth={'100%'}
        onPress={() => console.log('Pressed')}
        btnHeight={187 * heightRef}>
        <View style={styles.header2}>
          <View style={styles.header3}>
            <Text color={fontColorLight}>Your Percentage</Text>
            <View style={styles.bar1}>
              <View style={styles.bar1Inner}>
                <View style={styles.percetage1}>
                  <Text color={fontColorLight}> 58%</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.avgPerc}>
            <Text color={fontColorLight}>Avg. Percentage</Text>
            <View style={styles.bar1Bottom}>
              <View style={styles.bar1BottomInner}>
                <View style={styles.percetage1}>
                  <Text color={fontColorLight}> 78%</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.better}>
            <MultiColorText
              // color={fontColorLight}
              fontSize={11}
              highlightedColor={OnxGreen}
              highlightedText={'28 Players'}
              textArray={'Your performance was better than 28 Players'}
            />
            {/* <Text fontSize={11} color={QuizTExtColor}>
              Your performance was better than 28 Players
            </Text> */}
          </View>
        </View>
      </CustomCard>
      <Text bold={'600'} color={fontColorLight}>
        Review Questions
      </Text>
    </View>
  );
  return (
    <View style={styles.rootContainer}>
      <OnxHeader
        right={
          <CustomButton
            onPress={() => {
              navigation.navigate('Muqabla_3');
            }}
            backColor={OnxGreen}
            btnRadius={5}
            textSize={16}
            btnWidth={140 * widthRef}
            btnHeight={32 * heightRef}
            text={'Continue'}
            fontWeight={'600'}
            marginT={15 * heightRef}
            paddingVertical={10}
          />
        }
        borderBottomWidth2
        borderWidth1
      />
      <View style={styles.quizContainer}>
        <View style={styles.summary}>
          <Text color={fontColorLight} bold={'600'} fontSize={16}>
            Summary
          </Text>
          <OnxIcon
            onPress={() => {
              navigation.navigate('Successfull_1');
            }}
            size={23}
            colorIcon={fontColorLight}
            type={'AntDesign'}
            name={'close'}
          />
        </View>
        <FlatList
          ListHeaderComponentStyle={styles.listHeaderCom}
          ListHeaderComponent={PositionsContainer_1}
          style={{backgroundColor: BgColor, marginTop: 15 * heightRef}}
          contentContainerStyle={{backgroundColor: textBackColor}}
          data={AttemptPersons}
          keyExtractor={item => item.id}
          renderItem={renderItem1}
        />
      </View>
    </View>
  );
};

export default Successfull_2;
