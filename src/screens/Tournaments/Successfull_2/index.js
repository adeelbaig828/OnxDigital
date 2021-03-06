import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {useSelector} from 'react-redux';
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
  const QuestionAnswersRes = useSelector(
    state => state.muqablas.submitAllQuestion,
  );
  const renderItem1 = (item, index) => (
    <CustomCard
      btnRadius={5}
      backColor={'cyan'}
      marginT={15}
      backColor={BgColor}
      paddinginner={-0.1}
      btnHeight={164 * heightRef}>
      <View style={styles.questions}>
        <Text
          marginTop={10}
          marginLeft={15 * widthRef}
          fontSize={12}
          color={fontColorLight}>
          {item?.item?.title}
        </Text>
        <Separator marginVertical={10 * heightRef} width={339 * widthRef} />
        {item?.item?.options?.map(i => (
          <View style={{height: '18%', marginLeft: 15 * widthRef}}>
            <TextIcon
              iconBAckGroundColor={pureWhiteColor}
              circle={
                item?.item?.user_option?.id === i.id
                  ? false
                  : item?.item?.correct_option?.id === i.id
                  ? false
                  : true
              }
              paddingVertical={0.1}
              // onPress={() => setSelectIndex(index)}
              color={fontColorLight}
              type={i.number == 1 ? 'AntDesign' : 'AntDesign'}
              name={
                item?.item?.user_option?.id === item?.item?.correct_option?.id
                  ? i.id === item?.item?.user_option?.id
                    ? 'checkcircle'
                    : null
                  : i.id === item?.item?.correct_option?.id
                  ? 'checkcircle'
                  : i.id === item?.item?.user_option?.id
                  ? 'closecircle'
                  : null
              }
              iconcolor={
                item?.item?.user_option?.id === item?.item?.correct_option?.id
                  ? OnxGreen
                  : i.id === item?.item?.user_option?.id
                  ? Crosscolor
                  : OnxGreen
              }
              size={18}
              fontSize={12}>
              {i['Option Value']}
            </TextIcon>
          </View>
        ))}
        <View
          style={[
            styles.leftErrorView,
            {
              backgroundColor:
                item?.item?.user_option?.id === item?.item?.correct_option?.id
                  ? OnxGreen
                  : CrossQuizcolor,
            },
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
        btnHeight={187 * heightRef}>
        <View style={styles.header2}>
          <View style={styles.header3}>
            <Text color={fontColorLight}>Your Percentage</Text>
            <View style={styles.bar1}>
              <View
                style={[
                  styles.bar1Inner,
                  {width: QuestionAnswersRes.data.my_percentage},
                ]}>
                <View style={styles.percetage1}>
                  <Text color={fontColorLight}>
                    {QuestionAnswersRes.data.my_percentage}%
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.avgPerc}>
            <Text color={fontColorLight}>Avg. Percentage</Text>
            <View style={styles.bar1Bottom}>
              <View
                style={[
                  styles.bar1BottomInner,
                  {width: QuestionAnswersRes.data.average_percentage},
                ]}>
                <View style={styles.percetage1}>
                  <Text color={fontColorLight}>
                    {QuestionAnswersRes.data.average_percentage}%
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.better}>
            <MultiColorText
              // color={fontColorLight}
              fontSize={11}
              highlightedColor={OnxGreen}
              highlightedText={'players'}
              textArray={`Your performance was better than ${QuestionAnswersRes.data.performance_better_than} players`}
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
              navigation.navigate('BottomNavigation', {
                screen: 'Home',
              });
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
            // onPress={() => {
            //   navigation.navigate('Successfull_1');
            // }}
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
          data={QuestionAnswersRes?.data?.questions}
          keyExtractor={item => item.id}
          renderItem={renderItem1}
        />
      </View>
    </View>
  );
};

export default Successfull_2;
