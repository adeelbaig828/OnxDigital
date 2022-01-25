import React, {useEffect, useState} from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  SectionList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {
  fontColorDark,
  fontColorLight,
  OnxGreen,
} from 'src/assets/Colors/colors';
import OnxIcon from 'src/Components/OnxIcons';
import Text from 'src/Components/Text';
import {useNavigation} from '@react-navigation/native';
import TextHeader from 'src/Components/TextHeader';
import View from 'src/Components/View';
import {heightRef} from 'src/config/screenSize';
import {interactiveBook} from 'src/utils/JSON';
import styles from './style';
import AppHeader from 'src/Components/AppHeader';
import OnxLoading from 'src/Components/OnxLoading';
import {useDispatch, useSelector} from 'react-redux';
import {
  GET_ARENA_BY_GRADE,
  GET_ARENA_DETAIL,
} from 'src/Redux/Reducers/Books/BooksActions';
const VideoScreen_1 = props => {
  const navigation = useNavigation();
  const [loading, setloading] = useState(false);
  const [Books, setBooks] = useState([]);
  useEffect(() => {
    setloading(true);
    getBooksByGrade();
  }, []);
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);
  const getBooksByGrade = () => {
    //change the hardcoded grade when api working fine
    GET_ARENA_BY_GRADE(
      3,
      token,
    )(dispatch)
      .then(res => {
        // console.log('res', JSON.stringify(res, null, 3));
        if (res.code === 200) {
          setBooks(res?.data?.data);
          setTimeout(() => {
            setloading(false);
          }, 100);
        } else {
          console.log('then res', res);
        }
      })
      .catch(err => {
        console.log('catch err', err);
      });
  };
  return loading ? (
    <OnxLoading />
  ) : (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView style={styles.mainRoot} showsVerticalScrollIndicator={false}>
        <TextHeader
          colorheader={fontColorLight}
          marginTop={20}
          Header={'Interactive Books'}
          Description={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
          }
        />
        {Books ? (
          Books.map(item => {
            return (
              <ImageBackground
                // source={require('src/assets/wholebacl.png')}
                source={{uri: item.image_url}}
                style={styles.imageStyleScnd}>
                <View
                  style={{
                    backgroundColor: OnxGreen,
                    // width: `${item.progress}%`,
                    height: 10,
                    position: 'absolute',
                    left: 0,
                    bottom: 0,
                  }}
                />
                <View style={styles.locker}>
                  {item.videodone ? (
                    <View style={styles.videoDone}>
                      <Text color={'white'}>18%</Text>
                    </View>
                  ) : item.unlocked ? null : (
                    <OnxIcon
                      right={1}
                      top={15}
                      size={35}
                      colorIcon={fontColorDark}
                      position={'absolute'}
                      type={'MaterialIcons'}
                      name={'lock'}
                    />
                  )}
                </View>
                <View style={styles.innerIMage}>
                  <View style={styles.headerMain}>
                    <TextHeader
                      fontWeightDes={'300'}
                      fontWeight={'400'}
                      fontSizeDesc={10}
                      colorDesc={fontColorLight}
                      colorheader={fontColorLight}
                      fontSizeHeader={14}
                      Header={item.name}
                      Description={item.description}
                    />
                  </View>
                  <View style={styles.now}>
                    <Text
                      onPress={() => navigation.navigate('VideoScreen_2')}
                      paddingRight={5}
                      color={fontColorLight}
                      fontSize={10}>
                      {item.videodone ? 'Play Book' : 'Play Sample'}
                    </Text>
                    <OnxIcon
                      colorIcon={fontColorLight}
                      size={15}
                      type={'AntDesign'}
                      name={'right'}
                    />
                  </View>
                </View>
              </ImageBackground>
            );
          })
        ) : (
          <View style={styles.noData}>
            <Text>No Data</Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default VideoScreen_1;
