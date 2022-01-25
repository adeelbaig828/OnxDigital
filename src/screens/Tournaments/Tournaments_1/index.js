import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  BgColor,
  BorderColor,
  fontColorDark,
  fontColorLight,
  OnxGreen,
} from 'src/assets/Colors/colors';
import {CustomCard} from 'src/Components/customCard';
import OnxIcon from 'src/Components/OnxIcons';
import Text from 'src/Components/Text';
import TextHeader from 'src/Components/TextHeader';
import View from 'src/Components/View';
import {fontRef, heightRef, widthRef} from 'src/config/screenSize';
import {TournamentsJson, TournamentsJson3, Videos} from 'src/utils/JSON';
import TextIcon from 'src/Components/TextIcon';

import styles from './style';
import {CustomButton} from 'src/Components/CustomButton';
import AppHeader from 'src/Components/AppHeader';

const Tab = createMaterialTopTabNavigator();

const Tournaments_1 = props => {
  const navigation = useNavigation();
  const Percentage = videoProgress => (100 * videoProgress) / 100;

  const renderItem = (item, index) => (
    <ImageBackground
      source={require('../../../assets/newbottomback2.png')}
      style={styles.imgback}>
      <LinearGradient
        start={{x: 0, y: 0.75}}
        end={{x: 0, y: 0}}
        colors={['rgba(0,0,0,.5)', 'rgba(0,0,0,.01)']}
        style={styles.innerCon}>
        <View style={styles.mainInner}>
          <Text color={fontColorLight}>Back to School</Text>
          <View style={styles.coinsRow}>
            <Image source={require('src/assets/coin.png')} />
            <Text paddingLeft={10} fontSize={10} color={fontColorLight}>
              5 Gold Coins
            </Text>
            <OnxIcon
              name={'dot-single'}
              size={20}
              colorIcon={fontColorLight}
              type={'Entypo'}
            />
            <TextIcon
              size={25}
              paddingLeft={3}
              maxWidth={'90%'}
              color={fontColorLight}
              type={'Entypo'}
              name={'back-in-time'}
              iconcolor={'#AB4695'}
              fontSize={10}>
              {item.item.Days == 14
                ? 'Ends in 12 Days'
                : item.item.Days == 24
                ? 'Ended on 24th May 2021'
                : '14 Days Left'}
            </TextIcon>
          </View>
          {item.item.Days == 24 ? (
            <View style={styles.prize}>
              <CustomButton
                onPress={() => {
                  navigation.navigate('Muqabla_2');
                }}
                borderColor={OnxGreen}
                borderWidth={1}
                btnRadius={5}
                textSize={16}
                textColor={OnxGreen}
                btnWidth={296 * widthRef}
                btnHeight={40 * heightRef}
                text={'View Prizes'}
              />
            </View>
          ) : (
            <View style={styles.coinsRow1}>
              <CustomButton
                borderColor={OnxGreen}
                onPress={() => {
                  navigation.navigate('Muqabla_2');
                }}
                borderWidth={1}
                btnRadius={5}
                textSize={16}
                textColor={OnxGreen}
                btnWidth={140 * widthRef}
                btnHeight={40 * heightRef}
                text={'View Prizes'}
              />
              <CustomButton
                backColor={OnxGreen}
                onPress={() => {
                  navigation.navigate('Muqabla_1');
                }}
                btnRadius={5}
                textSize={16}
                btnWidth={140 * widthRef}
                btnHeight={40 * heightRef}
                text={'Participate'}
                fontWeight={'bold'}
              />
            </View>
          )}
        </View>
      </LinearGradient>
    </ImageBackground>
  );
  const Chspters1 = () => (
    <FlatList
      style={{backgroundColor: BgColor}}
      contentContainerStyle={{
        marginTop: 20 * heightRef,
        backgroundColor: BgColor,
      }}
      data={Videos}
      keyExtractor={item => item.id}
      renderItem={renderItem}
    />
  );
  const Chspters2 = () => (
    <FlatList
      style={{backgroundColor: BgColor}}
      contentContainerStyle={{
        marginTop: 20 * heightRef,
        backgroundColor: BgColor,
      }}
      data={TournamentsJson}
      keyExtractor={item => item.id}
      renderItem={renderItem}
    />
  );
  const Chspters3 = () => (
    <FlatList
      style={{backgroundColor: BgColor}}
      contentContainerStyle={{
        marginTop: 20 * heightRef,
        backgroundColor: BgColor,
      }}
      data={TournamentsJson3}
      keyExtractor={item => item.id}
      renderItem={renderItem}
    />
  );

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.mainRoot}>
        <TextHeader
          colorheader={fontColorLight}
          marginTop={20}
          Header={'Tournaments'}
          Description={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
          }
        />
        <View style={styles.tabs}>
          <Tab.Navigator
            screenOptions={{
              tabBarLabelStyle: {
                fontSize: 14,
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
            <Tab.Screen name="Upcoming" component={Chspters1} />
            <Tab.Screen name="Running" component={Chspters2} />
            <Tab.Screen name="Completed" component={Chspters3} />
          </Tab.Navigator>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Tournaments_1;
