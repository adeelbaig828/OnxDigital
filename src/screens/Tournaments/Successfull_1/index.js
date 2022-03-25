import {useRoute} from '@react-navigation/core';
import moment from 'moment';
import React, {useEffect, useState} from 'react';
import {Image} from 'react-native';
import {useSelector} from 'react-redux';
import {
  Crosscolor,
  fontColorDark,
  fontColorLight,
  OnxGreen,
  playcolor,
  textBackColor,
  Watchcolor,
} from 'src/assets/Colors/colors';
import {CustomButton} from 'src/Components/CustomButton';
import {CustomCard} from 'src/Components/customCard';
import OnxHeader from 'src/Components/Header';
import OnxIcon from 'src/Components/OnxIcons';
import Text from 'src/Components/Text';
import TextHeader from 'src/Components/TextHeader';
import View from 'src/Components/View';
import {heightRef, widthRef} from 'src/config/screenSize';
import styles from './style';

const Successfull_1 = ({navigation}) => {
  const [correctAns, setcorrectAns] = useState(null);
  const [inCorrectAns, setinCorrectAns] = useState(null);
  const route = useRoute();

  const QuestionAnswersRes = useSelector(
    state => state.muqablas.submitAllQuestion,
  );
  const _Score = useSelector(state => state.tournaments.getScore);
  useEffect(() => {
    checkResponse();
  }, []);

  const checkResponse = () => {
    let correctOptions = 0;
    let inCorrectOptions = 0;
    QuestionAnswersRes.data.questions.map(item => {
      item?.user_option?.id === item?.correct_option?.id
        ? (correctOptions += 1)
        : (inCorrectOptions += 1);
    });
    setcorrectAns(correctOptions);
    setinCorrectAns(inCorrectOptions);
  };
  const quizData = [
    {
      text: 'Correct',
      number: 3,
    },
    {
      text: 'Incorrect',
      number: 13,
    },
    {
      text: 'Duration',
      number: 12,
    },
    {
      text: 'Skipped',
      number: 8,
    },
  ];
  return (
    <View style={styles.rootContainer}>
      <OnxHeader
        right={
          <CustomButton
            // onPress={() => {
            //   navigation.navigate('Muqabla_3');
            // }}
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
        <View style={styles.upperCon}>
          <Image
            resizeMode={'contain'}
            style={styles.imageStyle}
            source={require('../../../assets/successImage.png')}
          />
          <Text
            fontSize={16}
            bold={'600'}
            paddingVertical={20}
            color={fontColorLight}>
            Congratulation
          </Text>
          <CustomCard
            marginV={6}
            padding={10 * heightRef}
            backColor={textBackColor}
            paddinginner={-10}
            btnRadius={5}
            btnWidth={328 * widthRef}
            btnHeight={112 * heightRef}>
            <View>
              <Text color={fontColorLight} bold={'600'} fontSize={16}>
                Rewards
              </Text>
              <View style={styles.mainRow}>
                <View
                  style={{
                    //   backgroundColor: 'red',
                    flexDirection: 'row',
                    width: '50%',
                    alignItems: 'center',
                  }}>
                  <Image
                    style={styles.coinsStyle}
                    source={require('src/assets/coin.png')}
                  />
                  <TextHeader
                    marginL={8 * widthRef}
                    fontSizeHeader={12}
                    fontSizeDesc={16}
                    colorDesc={fontColorLight}
                    colorheader={fontColorLight}
                    Header={'Points earned'}
                    Description={`${_Score?.data?.gold_coins} Point`}
                  />
                </View>
                <View
                  style={{
                    //   backgroundColor: 'red',
                    flexDirection: 'row',
                    width: '50%',
                    alignItems: 'center',
                  }}>
                  <Image
                    style={styles.coinsStyle}
                    source={require('src/assets/Group.png')}
                  />
                  <TextHeader
                    widthHeaderText={'75%'}
                    marginL={8 * widthRef}
                    fontSizeHeader={11}
                    colorDesc={fontColorLight}
                    fontSizeDesc={16}
                    colorheader={fontColorLight}
                    Header={'Silver coins earned'}
                    Description={`${_Score?.data?.siver_coins} Silver Coin`}
                  />
                </View>
              </View>
            </View>
          </CustomCard>
          <View style={styles.congrats}>
            <Text color={fontColorLight} bold={'600'} fontSize={16}>
              Congratulation
            </Text>
          </View>
        </View>
        <View style={styles.rewardCon}>
          {quizData.map(i => (
            <CustomCard
              padding={10 * heightRef}
              backColor={textBackColor}
              paddinginner={-10}
              btnRadius={5}
              btnHeight={64 * heightRef}
              btnWidth={76 * widthRef}>
              <View style={styles.btnCont}>
                <View style={styles.quizTime}>
                  <OnxIcon
                    type={
                      i.text == 'Skipped'
                        ? 'Ionicons'
                        : i.text == 'Duration'
                        ? 'Fontisto'
                        : i.text == 'Incorrect'
                        ? 'AntDesign'
                        : 'Feather'
                    }
                    name={
                      i.text == 'Skipped'
                        ? 'ios-play-skip-forward-sharp'
                        : i.text == 'Duration'
                        ? 'stopwatch'
                        : i.text == 'Incorrect'
                        ? 'close'
                        : 'check'
                    }
                    size={15}
                    colorIcon={
                      i.text == 'Skipped'
                        ? playcolor
                        : i.text == 'Duration'
                        ? Watchcolor
                        : i.text == 'Incorrect'
                        ? Crosscolor
                        : OnxGreen
                    }
                  />
                  <Text
                    marginLeft={5}
                    bold={'600'}
                    color={fontColorLight}
                    fontSize={10}>
                    {
                      {
                        Duration: moment(
                          '2011/11/11 ' + _Score.data.time_taken,
                        ).format('mm:ss'),
                        Correct: _Score.data.total_correct,
                        Incorrect: _Score.data.total_incorrect,
                        Skipped: _Score.data.total_skipped,
                      }[i.text]
                    }
                  </Text>
                </View>
                <Text color={fontColorLight} fontSize={10}>
                  {i.text}
                </Text>
              </View>
            </CustomCard>
          ))}
        </View>
        <View style={styles.bottomConta}>
          <OnxIcon
            colorIcon={OnxGreen}
            position={'absolute'}
            top={-3 * heightRef}
            type={'MaterialIcons'}
            name={'keyboard-arrow-up'}
            size={20}
          />
          <CustomButton
            onPress={() => {
              navigation.navigate('Successfull_2');
            }}
            backColor={OnxGreen}
            btnRadius={5}
            textSize={16}
            btnWidth={'100%'}
            btnHeight={43 * heightRef}
            text={'Summary'}
            fontWeight={'600'}
            marginT={15 * heightRef}
            paddingVertical={10}
          />
        </View>
      </View>
    </View>
  );
};

export default Successfull_1;
