import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  BgColor,
  fontColorLight,
  OnxGreen,
  pureBlackColor,
} from 'src/assets/Colors/colors';
import {CustomButton} from 'src/Components/CustomButton';
import OnxHeader from 'src/Components/Header';
import OnxLoading from 'src/Components/OnxLoading';
import TextHeader from 'src/Components/TextHeader';
import View from 'src/Components/View';
import {heightRef} from 'src/config/screenSize';
import {
  CLEAR_QUESTION_ANSWERS,
  QUESTION_ANSWERS,
  SUBMIT_ALL_ANSWERS,
} from "src/Redux/Reducers/Muqabla's/Muqabla'sActions";
import {GET_ATTEMPT_SCORE} from 'src/Redux/Reducers/Tournaments/TournamentsActions';
import {changelanguage} from 'src/services/translation';
import styles from './style';
const Muqabla_3 = ({navigation}) => {
  const [mainloading, setMainloading] = useState(false);

  //Fetching data from redux
  const quizzesTopics = useSelector(state => state.muqablas.topicsQuestions);
  const quizzesChapters = useSelector(state => state.muqablas.zonesQuestions);
  const quizzesTournamnets = useSelector(
    state => state.tournaments.getSingleTournament,
  );
  const submitQ = useSelector(state => state.muqablas.submitQuestionAnswers);
  const token = useSelector(state => state.auth.token);
  const isSelectedquizzes = useSelector(
    state => state.muqablas.isQuestionsSelected,
  );
  const [loading, setloading] = useState(true);
  const [selectedlanguage, setselectedlanguage] = useState(true);
  const [selectIndex, setSelectIndex] = useState(null);
  const [selectIndexs, setSelectIndexs] = useState(0);
  const [whichQuizzes, setwhichQuizzes] = useState(null);
  const [seconds, setSeconds] = useState(0);
  const [startSeconds, setStartSeconds] = useState(
    moment().format('YYYY-MM-DD h:mm:ss'),
  );
  const [endSeconds, setEndSeconds] = useState(null);
  const [answersID, setAnswersID] = useState(null);
  const start = new Date().getTime();
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    checkQuizzes();
  }, []);
  useEffect(() => {
    //change language function
    (async () => {
      const language = await AsyncStorage.getItem('language');
      setselectedlanguage(language);
      language && changelanguage(language);
      setTimeout(() => {
        setloading(false);
      }, 1000);
    })();
  }, []);
  //function to check which quizzes are going to display
  const checkQuizzes = () => {
    isSelectedquizzes.Data === 'Chapters'
      ? setwhichQuizzes(quizzesChapters?.data?.data)
      : isSelectedquizzes.Data === 'Topics'
      ? setwhichQuizzes(quizzesTopics?.data?.data)
      : isSelectedquizzes.Data === 'Upcoming'
      ? setwhichQuizzes(quizzesTournamnets?.data?.questions?.data)
      : isSelectedquizzes.Data === 'Running'
      ? setwhichQuizzes(quizzesTournamnets?.data?.questions?.data)
      : isSelectedquizzes.Data === 'Completed'
      ? setwhichQuizzes(quizzesTournamnets?.data?.questions?.data)
      : null;
    setMainloading(false);
  };
  const submitAllAnswerData = () => {
    const _answersData = {
      entity_type:
        isSelectedquizzes.Data === 'Chapters' ? 'Zone' : 'Tournament',
      entity_id: 1,
      total_points: 90,
      time_taken: seconds,
      answers: submitQ,
    };
    // console.log('_answersData', JSON.stringify(_answersData, null, 3));
    SUBMIT_ALL_ANSWERS(
      _answersData,
      token,
    )(dispatch)
      .then(res => {
        // console.log(
        //   'else then res',
        //   JSON.stringify(res.data.attempt_id, null, 3),
        // );
        if (res.code === 200) {
          clearData();
          getAttemptScore(res.data.attempt_id);
          navigation.replace('Successfull_1', {
            totalTime: seconds,
          });
          setMainloading(false);
        } else {
          clearData();
          console.log('else then res', res);
        }
      })
      .catch(err => {
        clearData();
        console.log('catch err', err);
      });
  };
  const getAttemptScore = id => {
    GET_ATTEMPT_SCORE(
      id,
      token,
    )(dispatch)
      .then(res => {
        if (res.code === 200) {
          console.log('then res', res);
          setloading(false);
        } else {
          console.log('then res', res);
          setloading(false);
        }
      })
      .catch(err => {
        console.log('catch err', err);
        setloading(false);
      });
  };
  const clearData = () => {
    CLEAR_QUESTION_ANSWERS()(dispatch);
  };
  const submitAnswers = () => {
    const _NameData = {
      question_id: whichQuizzes[selectIndexs].id,
      // question_id: QuestionByZone[selectIndexs].id,
      option_id: answersID,
      question_started_at: startSeconds,
      question_ended_at: moment().format('YYYY-MM-DD h:mm:ss'),
    };
    QUESTION_ANSWERS(_NameData)(dispatch);
  };
  return mainloading ? (
    <OnxLoading />
  ) : loading ? (
    <ActivityIndicator
      style={{backgroundColor: BgColor, flex: 1}}
      size={60}
      color={OnxGreen}
    />
  ) : (
    <View style={styles.rootContainer}>
      <OnxHeader
        // right={
        //   <CustomButton
        //     btnRadius={5}
        //     textColor={fontColorDark}
        //     textSize={10}
        //     btnWidth={62 * widthRef}
        //     onPress={async () => navigation.navigate('Successfull_1')}
        //     btnHeight={24 * heightRef}
        //     borderWidth={0.3}
        //     text={'Submit'}
        //     fontWeight={'bold'}
        //     borderColor={fontColorDark}
        //   />
        // }
        titleColor={OnxGreen}
        borderBottomWidth2
        borderWidth1
        title={`${Math.floor(seconds / 60)}:${(seconds % 60)
          .toString()
          .padStart(2, '0')}`}
      />
      <View style={styles.quizContainer}>
        <TextHeader
          marginTop={50}
          height={126}
          widthHeaderText={'100%'}
          widthDesText={'100%'}
          textAlignHeader={selectedlanguage === 'ur' ? 'right' : 'left'}
          textAlignDes={selectedlanguage === 'ur' ? 'right' : 'left'}
          colorDesc={fontColorLight}
          fontSizeDesc={16}
          fontWeight={'600'}
          Header={
            selectedlanguage === 'ur'
              ? selectIndexs + 1
              : `${selectIndexs + 1}.`
          }
          Description={whichQuizzes[selectIndexs].title}
          // Description={QuestionByZone[selectIndexs].explanation}
        />
        <View style={{width: '100%'}}>
          {whichQuizzes[selectIndexs].options.map((data, index) => (
            // {QuestionByZone[selectIndexs].options.map((data, index) => (
            <CustomButton
              btnRadius={5}
              backColor={index === selectIndex ? 'white' : null}
              textColor={
                index === selectIndex ? pureBlackColor : fontColorLight
              }
              textSize={16}
              marginT={10}
              btnWidth={'100%'}
              onPress={() => (setSelectIndex(index), setAnswersID(data.id))}
              btnHeight={43 * heightRef}
              borderWidth={1}
              text={data['Option Value']}
              fontWeight={'bold'}
              paddingVertical={10}
              borderColor={fontColorLight}
            />
          ))}
        </View>
        {selectIndex != null ? (
          // selectIndexs + 1 === whichQuizzes.length ? null : (
          <CustomButton
            onPress={() => {
              if (selectIndexs + 1 === whichQuizzes.length) {
                setMainloading(true);
                submitAllAnswerData();
                setEndSeconds(new Date());
                submitAnswers();
                setStartSeconds(moment().format('YYYY-MM-DD h:mm:ss'));
              } else {
                setSelectIndex(null);
                setEndSeconds(new Date());
                setSelectIndexs(selectIndexs + 1);
                submitAnswers();
                setStartSeconds(moment().format('YYYY-MM-DD h:mm:ss'));
              }
              // navigation.navigate('Muqabla_3');
            }}
            backColor={OnxGreen}
            btnRadius={5}
            textSize={16}
            btnWidth={'100%'}
            btnHeight={43 * heightRef}
            text={selectIndexs + 1 === whichQuizzes.length ? 'Submit' : 'Next'}
            fontWeight={'600'}
            marginT={55 * heightRef}
            paddingVertical={10}
          />
        ) : null}
      </View>
    </View>
  );
};

export default Muqabla_3;
