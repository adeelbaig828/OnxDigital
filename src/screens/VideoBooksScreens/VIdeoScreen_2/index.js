import BottomSheet from '@gorhom/bottom-sheet';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {
  FlatList,
  I18nManager,
  Image,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import Orientation from 'react-native-orientation';
import RNRestart from 'react-native-restart';
import VP from 'react-native-video-controls';
import {useDispatch, useSelector} from 'react-redux';
import {
  BgColor,
  BlackColorSheet,
  BorderColor,
  BottomNavColor,
  fontColorDark,
  fontColorGray,
  fontColorLight,
  OnxGreen,
  pureWhiteColor,
} from 'src/assets/Colors/colors';
import {CustomButton} from 'src/Components/CustomButton';
import {CustomCard} from 'src/Components/customCard';
import OnxHeader from 'src/Components/Header';
import MultiColorText from 'src/Components/HighlightedColorText';
import OnxIcon from 'src/Components/OnxIcons';
import OnxLoading from 'src/Components/OnxLoading';
import PlansModal from 'src/Components/PlansModal';
import Separator from 'src/Components/separator';
import Text from 'src/Components/Text';
import TextHeader from 'src/Components/TextHeader';
import View from 'src/Components/View';
import {heightRef, widthRef} from 'src/config/screenSize';
import {
  GET_LANGUAGES,
  ZONES_BY_ARENAS,
  ZONES_BY_GRADE_AND_SUBJECTS,
} from 'src/Redux/Reducers/Books/BooksActions';
import {changelanguage, strings} from 'src/services/translation';
import {languageData} from 'src/utils/JSON';
import styles from './style';

const Tab = createMaterialTopTabNavigator();

const VideoScreen_2 = () => {
  const fullScreen = () => {
    Orientation.getOrientation((err, orientation) => {
      if (orientation == 'LANDSCAPE') {
        Orientation.lockToPortrait();
        setfullScreenMode(false);
      } else {
        Orientation.lockToLandscape();
        console.log('lockToPortrait');
        setfullScreenMode(true);
      }
    });
  };
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ['25%'], []);
  const handleSheetChanges = useCallback(index => {
    // console.log('handleSheetChanges', index);
  }, []);
  const navigation = useNavigation();
  const refRBSheet = useRef();
  const modalRef = useRef();
  const [language, setlanguage] = useState(null);
  const [languageDataState, setlanguageData] = useState(null);
  const [fullScreenMode, setfullScreenMode] = useState(null);
  const [selectedIndex, setselectedIndex] = useState(null);
  const [loading, setloading] = useState(false);
  const [allzones, setAllzones] = useState([]);
  const [videoId, setvideoId] = useState(null);
  const [videoURL, setvideoURL] = useState(null);
  const [oops, setOops] = useState(false);
  const [headerData, setheaderData] = useState(null);
  const [discriptionData, setdiscriptionData] = useState(null);
  console.log('videoId', videoId);
  useEffect(() => {
    setloading(true);
    getAllZonesbyGradesandsubjects();
  }, []);
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);
  const getLanguages = () => {
    GET_LANGUAGES(token)(dispatch)
      .then(res => {
        if (res.code === 200) {
          setlanguageData(res.data.data);
        } else {
          console.log('then re', res);
        }
      })
      .catch(err => {
        console.log('catch err', err);
      });
  };
  const assignData = res =>
    res.map(
      response => (
        setheaderData(response.name), setdiscriptionData(response.description)
      ),
    );
  const getAllZonesbyGradesandsubjects = () => {
    ZONES_BY_GRADE_AND_SUBJECTS(token)(dispatch)
      .then(res => {
        if (res.code === 200) {
          assignData(res.data.data);
          console.log('object', JSON.stringify(res, null, 3));
          setAllzones(res.data.data);
          setTimeout(() => {
            setloading(false);
          }, 500);
        } else {
          console.log('then re', res);
          setloading(false);
        }
      })
      .catch(err => {
        console.log('catch err', err);
        setloading(false);
      });
  };
  const Subs = () => (
    <View style={styles.ooops}>
      <OnxIcon
        left={1}
        bottom={3 * heightRef}
        size={25}
        colorIcon={pureWhiteColor}
        type={'MaterialIcons'}
        name={'lock'}
      />
      <TextHeader
        alignItems={'center'}
        width={'98%'}
        colorheader={pureWhiteColor}
        colorDesc={pureWhiteColor}
        fontSizeDesc={15}
        fontWeight={'600'}
        marginTop={6 * heightRef}
        Header={'Oops! Free Version Ended'}
        Description={
          'Please subscribe to our KarMuqabala PLUS to continue watching'
        }
      />
      <CustomButton
        onPress={() => modalRef.current.open()}
        btnHeight={12 * heightRef}
        backColor={OnxGreen}
        text={'Get Subscription'}
        btnWidth={'45%'}
        btnHeight={50 * heightRef}
        textColor={'white'}
        textSize={heightRef * 12}
        justifyContent={'center'}
        fontWeight={'500'}
        alignItems={'center'}
        btnRadius={5}
      />
    </View>
  );
  const renderItem = (item, index) =>
    item.item.topics.map(k =>
      k.id === videoId ? null : (
        <CustomCard
          onPress={() =>
            item.item.topics.map(
              j => (setvideoId(j.id), setvideoURL(j.video.video_url)),
            )
          }
          marginV={7}
          btnWidth={'100%'}
          btnHeight={64 * heightRef}>
          <>
            <View style={styles.scndCont}>
              <View style={styles.date}>
                {item.item.topics.map(i => (
                  <>
                    <Image
                      style={styles.imageleft}
                      source={item.item.image_url}
                    />
                    <View style={styles.lock}>
                      <OnxIcon
                        left={1}
                        bottom={3 * heightRef}
                        size={25}
                        colorIcon={fontColorLight}
                        type={'MaterialIcons'}
                        name={'lock'}
                      />
                      <Text
                        color={fontColorLight}
                        fontSize={12}
                        padding={10}
                        backColor={'black'}>
                        {i.video.video_duration}
                      </Text>
                    </View>
                  </>
                ))}
              </View>
              <View style={styles.months}>
                <TextHeader
                  alignItemsMain={
                    selectedIndex !== 1 ? 'flex-start' : 'flex-end'
                  }
                  width={'60%'}
                  fontWeight={'600'}
                  fontSizeHeader={11}
                  marginTop={6 * heightRef}
                  Header={item.item.name}
                  Description={item.item.description}
                />
              </View>
            </View>
          </>
        </CustomCard>
      ),
    );
  const Chapters1 = () => (
    <FlatList
      style={{backgroundColor: BgColor}}
      contentContainerStyle={{backgroundColor: BgColor}}
      data={allzones}
      keyExtractor={item => item.id}
      renderItem={renderItem}
    />
  );
  const Chapters2 = () => (
    <FlatList
      style={{backgroundColor: BgColor}}
      contentContainerStyle={{backgroundColor: BgColor}}
      data={allzones}
      keyExtractor={item => item.id}
      renderItem={renderItem}
    />
  );
  const Chapters3 = () => (
    <FlatList
      style={{backgroundColor: BgColor}}
      contentContainerStyle={{backgroundColor: BgColor}}
      data={allzones}
      keyExtractor={item => item.id}
      renderItem={renderItem}
    />
  );
  return loading ? (
    <OnxLoading />
  ) : (
    <View style={styles.mainContainer}>
      {fullScreenMode ? <StatusBar hidden /> : null}
      <PlansModal
        onPress={() => {
          navigation.navigate('PaymentGatewayScreen');
          modalRef.current.close();
        }}
        perMonths={'200'}
        perYears={'2400'}
        paused={oops ? true : false}
        ref={modalRef}
      />
      {fullScreenMode ? null : (
        <OnxHeader
          marginBottom
          backgroundColor={'black'}
          borderWidth1
          borderBottomWidth2
          left={
            <View style={styles.header}>
              <OnxIcon
                onPress={() => {
                  navigation.goBack();
                }}
                colorIcon={fontColorLight}
                name={'arrow-left'}
                type={'MaterialCommunityIcons'}
              />
              <Text paddingLeft={10} color={fontColorLight}>
                Chemsitry Book Trailer
              </Text>
            </View>
          }
          right={
            <OnxIcon
              onPress={() => {
                bottomSheetRef.current.expand();
              }}
              colorIcon={fontColorLight}
              name={'dots-vertical'}
              type={'MaterialCommunityIcons'}
            />
          }
        />
      )}
      <View
        style={[
          styles.videoPLayer,
          {
            minHeight: fullScreenMode ? '100%' : '25%',
            minWidth: fullScreenMode ? '100%' : '20%',
          },
        ]}>
        <VP
          resizeMode={fullScreenMode ? 'contain' : 'cover'}
          disableVolume
          onEnterFullscreen={() => fullScreen()}
          onExitFullscreen={() => fullScreen()}
          disableBack
          // repeat={true}
          source={{uri: videoURL}}
          // source={require('src/assets/hd1722.mov')}
          style={styles.backgroundVideo}
        />
        {oops ? <Subs /> : null}
      </View>
      {fullScreenMode ? null : (
        <SafeAreaView style={{flex: 1}}>
          <View style={styles.mainContainr}>
            <View style={{width: '100%'}}>
              <Text
                marginbtm={5 * heightRef}
                color={fontColorLight}
                textAlign={selectedIndex ? 'right' : 'left'}>
                {headerData}
              </Text>
              <Text
                fontSize={12}
                textAlign={selectedIndex ? 'right' : 'left'}
                marginbtm={5 * heightRef}>
                {discriptionData}
              </Text>
            </View>
            <View style={styles.tabs}>
              <Tab.Navigator
                screenOptions={{
                  tabBarLabelStyle: {
                    fontSize: 12,
                    textTransform: 'capitalize',
                    fontWeight: '500',
                  },
                  tabBarIndicatorContainerStyle: {
                    borderBottomColor: BorderColor,
                    width: '100%',
                    borderBottomWidth: 1,
                  },
                  tabBarInactiveTintColor: fontColorDark,
                  tabBarActiveTintColor: OnxGreen,
                  tabBarIndicatorStyle: {backgroundColor: OnxGreen},
                  tabBarStyle: {backgroundColor: BgColor},
                }}>
                <Tab.Screen name="Chapters" component={Chapters1} />
                <Tab.Screen
                  listeners={{
                    tabPress: e => {
                      // Prevent default press
                      e.preventDefault();
                    },
                  }}
                  name="Quizzes"
                  component={Chapters2}
                />
                <Tab.Screen
                  listeners={{
                    tabPress: e => {
                      // Prevent default press
                      e.preventDefault();
                    },
                  }}
                  name="Games"
                  component={Chapters3}
                />
              </Tab.Navigator>
            </View>
            <View style={styles.button}>
              <CustomButton
                onPress={() => {
                  setOops(true);
                }}
                btnHeight={12 * heightRef}
                backColor={OnxGreen}
                text={'Get Subscription'}
                btnWidth={'95%'}
                btnHeight={54 * heightRef}
                textColor={'white'}
                textSize={heightRef * 15}
                fontWeight={'500'}
                justifyContent={'center'}
                alignItems={'center'}
                btnRadius={5}
              />
            </View>
          </View>
        </SafeAreaView>
      )}
      {fullScreenMode ? null : (
        <BottomSheet
          ref={bottomSheetRef}
          index={-1}
          enablePanDownToClose
          handleComponent={() => <View />}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}>
          <View style={{width: '100%'}}>
            {language ? (
              <>
                <View style={styles.bottomHeader}>
                  <MultiColorText
                    color={BottomNavColor}
                    highlightedColor={fontColorGray}
                    highlightedText={'• Urdu'}
                    textArray={'Language • Urdu'}
                  />
                  <OnxIcon
                    size={18}
                    onPress={() => {
                      bottomSheetRef.current.close(), setlanguage(null);
                    }}
                    colorIcon={BlackColorSheet}
                    type={'AntDesign'}
                    name={'close'}
                  />
                </View>
                <Separator
                  marginVertical={10}
                  borderBottomWidth={0.3}
                  width={'100%'}
                />
                <View style={styles.bottomSheetConta}>
                  {languageData.map((i, index) => (
                    <TouchableOpacity
                      onPress={() => {
                        setselectedIndex(index), languageFunction(i.key);
                      }}
                      style={styles.languageCon}>
                      <Text marginLeft={15 * widthRef} color={BlackColorSheet}>
                        {i.name}
                      </Text>
                      {index === selectedIndex ? (
                        <OnxIcon
                          size={18}
                          colorIcon={OnxGreen}
                          type={'Feather'}
                          name={'check'}
                        />
                      ) : null}
                      {index === selectedIndex ? (
                        <View style={styles.greenContainer} />
                      ) : null}
                    </TouchableOpacity>
                  ))}
                </View>
              </>
            ) : (
              <>
                <View style={styles.bottomHeader}>
                  <Text color={BlackColorSheet} bold={'500'}>
                    Options
                  </Text>
                  <OnxIcon
                    size={18}
                    onPress={() => bottomSheetRef.current.close()}
                    colorIcon={BlackColorSheet}
                    type={'AntDesign'}
                    name={'close'}
                  />
                </View>
                <Separator
                  marginVertical={10}
                  borderBottomWidth={0.3}
                  width={'100%'}
                />
                <View
                  style={[
                    styles.bottomSheetConta,
                    {
                      marginHorizontal: 10 * heightRef,
                    },
                  ]}>
                  <TouchableOpacity
                    onPress={() => {
                      setlanguage(true), getLanguages();
                    }}>
                    <MultiColorText
                      color={BottomNavColor}
                      highlightedColor={fontColorGray}
                      highlightedText={'• Urdu'}
                      textArray={'Language • Urdu'}
                    />
                  </TouchableOpacity>
                  <MultiColorText
                    color={BottomNavColor}
                    highlightedColor={fontColorGray}
                    highlightedText={'• 240p'}
                    textArray={'Quality • 240p'}
                  />
                </View>
              </>
            )}
          </View>
        </BottomSheet>
      )}
    </View>
  );
};
// Language change functionality

const languageFunction = item => {
  AsyncStorage.setItem('language', item);
  if (item.id === 2) {
    languageRestart(true);
    changelanguage(item);
  } else {
    languageRestart(false);
    changelanguage(item);
  }
};

const languageRestart = async isRestart => {
  if (!isRestart) {
    if (I18nManager.isRTL) {
      await I18nManager.forceRTL(false);
    } else {
      if (I18nManager.isRTL) {
        await I18nManager.forceRTL(true);
      }
    }
    RNRestart.Restart;
  }
};

export default VideoScreen_2;
