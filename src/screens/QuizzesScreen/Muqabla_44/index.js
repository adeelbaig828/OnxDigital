import {useRoute} from '@react-navigation/core';
import React, {useEffect, useState} from 'react';
import {Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {fontColorDark, fontColorLight} from 'src/assets/Colors/colors';
import FlatListComponent from 'src/Components/FlatListComponent';
import OnxHeader from 'src/Components/Header';
import OnxIcon from 'src/Components/OnxIcons';
import OnxLoading from 'src/Components/OnxLoading';
import Text from 'src/Components/Text';
import TextHeader from 'src/Components/TextHeader';
import View from 'src/Components/View';
import {heightRef, widthRef} from 'src/config/screenSize';
import {
  SELECTED_QUESTIONS,
  TOPICS_BY_SUBJECT,
  ZONES_BY_SUBJECT,
} from "src/Redux/Reducers/Muqabla's/Muqabla'sActions";
import {QuizzesData} from 'src/utils/JSON';
import styles from './style';

const Muqabla_44 = props => {
  const [loading, setloading] = useState(false);

  const route = useRoute();
  const token = useSelector(state => state.auth.token);
  const Profile = useSelector(state => state.muqablas.studentProfile);
  const subjectTopics = useSelector(state => state.muqablas.topicsBySubject);
  const subjectZones = useSelector(state => state.muqablas.zonesBySubject);
  const isSelectedquizzes = useSelector(
    state => state.muqablas.isQuestionsSelected,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    setloading(true);
    getTopicsBySubjects();
    getZonesByChapters();
  }, []);

  const getTopicsBySubjects = () => {
    //change the hardcoded grade when api working fine
    TOPICS_BY_SUBJECT(
      1,
      token,
    )(dispatch)
      .then(res => {
        if (res.code === 200) {
          setTimeout(() => {
            setloading(false);
          }, 1000);
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
  const getZonesByChapters = () => {
    //change the hardcoded grade when api working fine
    ZONES_BY_SUBJECT(
      1,
      token,
    )(dispatch)
      .then(res => {
        if (res.code === 200) {
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
  const setQuizzes = data => {
    SELECTED_QUESTIONS(data)(dispatch);
  };
  return loading ? (
    <OnxLoading />
  ) : (
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
              {route.params.Name}
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
                  setQuizzes(QuizzesData[0]);
                  props.navigation.navigate('Muqabla_43');
                }}
                style={[styles.quizzes, container]}>
                <Image source={require('src/assets/MaskGroup.png')} />
                <View style={styles.right}>
                  <Text color={fontColorLight} width={150 * widthRef}>
                    {item?.name}
                  </Text>
                  <Text
                    fontSize={12}
                    color={fontColorDark}
                    marginTop={7 * heightRef}
                    width={150 * widthRef}>
                    Class {Profile?.data?.grade?.name_num} • English
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
          data={subjectTopics?.data}
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
                  setQuizzes(QuizzesData[1]);
                  props.navigation.navigate('Muqabla_43');
                }}
                style={[styles.quizzes, container]}>
                <Image
                  // source={{uri: item.image_url}}
                  source={require('src/assets/MaskGroup.png')}
                />
                <View style={styles.right}>
                  <Text color={fontColorLight} width={150 * widthRef}>
                    {item?.name}
                  </Text>
                  <Text
                    fontSize={12}
                    color={fontColorDark}
                    marginTop={7 * heightRef}
                    width={150 * widthRef}>
                    Class {Profile?.data?.grade?.name_num} • English
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
          data={subjectZones?.data?.data}
        />
      </View>
    </View>
  );
};

export default Muqabla_44;
