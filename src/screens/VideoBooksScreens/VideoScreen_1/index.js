import React from 'react';
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
const VideoScreen_1 = props => {
  const navigation = useNavigation();
  const Percentage = videoProgress => (100 * videoProgress) / 100;
  return (
    <SafeAreaView style={styles.mainContainer}>
      <AppHeader
        onPressCoins={() => navigation.navigate('CoinsPageScreen')}
        onPressSearch={() => navigation.navigate('SearchScreen_1')}
        onPressGetPlus={() => navigation.navigate('PlusPageScreen')}
        onPressDrawer={() => navigation.openDrawer()}
      />
      <ScrollView style={styles.mainRoot} showsVerticalScrollIndicator={false}>
        <TextHeader
          colorheader={fontColorLight}
          marginTop={20}
          Header={'Interactive Books'}
          Description={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
          }
        />
        {interactiveBook.map(item => (
          <ImageBackground source={item.img2} style={styles.imageStyleScnd}>
            <View
              style={{
                backgroundColor: OnxGreen,
                width: `${item.progress}%`,
                height: 10,
                position: 'absolute',
                left: 0,
                bottom: 0,
              }}
            />
            <View style={styles.locker}>
              {item.videodone ? (
                <View
                  style={{
                    marginTop: 10 * heightRef,
                    borderRadius: (40 / 2) * heightRef,
                    justifyContent: 'center',
                    borderWidth: 2,
                    borderColor: OnxGreen,
                    alignItems: 'center',
                    width: 40 * heightRef,
                    height: 40 * heightRef,
                    // backgroundColor: OnxGreen,
                  }}>
                  <Text color={'white'}>18%</Text>
                </View>
              ) : item.unlocked ? null : (
                <OnxIcon
                  right={1}
                  top={15}
                  onPress={() => navigation.navigate('ChapterComplete')}
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
                  fontSizeHeader={14}
                  Header={item.title}
                  Description={item.disc}
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
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default VideoScreen_1;
