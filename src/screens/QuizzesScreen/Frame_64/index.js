import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {FlatList, Image, ImageBackground} from 'react-native';
import {
  BgColor,
  BorderColor,
  fontColorDark,
  fontColorLight,
  OnxGreen,
  sliderColorOrange,
} from 'src/assets/Colors/colors';
import OnxHeader from 'src/Components/Header';
import OnxIcon from 'src/Components/OnxIcons';
import Text from 'src/Components/Text';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import View from 'src/Components/View';
import {fullWidth, heightRef, widthRef} from 'src/config/screenSize';
import styles from './style';
import {AttemptPersons} from 'src/utils/JSON';
import DropDownPicker from 'react-native-dropdown-picker';
import {CustomCard} from 'src/Components/customCard';
import TextHeader from 'src/Components/TextHeader';
const Tab = createMaterialTopTabNavigator();

const LeaderboardScreen = () => {
  const navigation = useNavigation();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('last week');
  const [items, setItems] = useState([
    {label: 'Last Week', value: 'Last Week'},
    {label: 'Last Month', value: 'Last Month'},
  ]);
  const PositionsContainer_1 = () => (
    <View
      style={{
        borderBottomWidth: 1,
        borderBottomColor: BorderColor,
        width: '100%',
        height: '100%',
        // alignItems: 'center',
        marginHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <Text marginTop={15 * heightRef} color={fontColorLight}>
        Lists
      </Text>
      <View
        style={{
          width: '40%',
        }}>
        <DropDownPicker
          placeholder="Last Week"
          placeholderStyle={{}}
          arrowIconStyle={{
            tintColor: fontColorLight,
          }}
          labelStyle={{
            fontWeight: 'bold',
            color: fontColorLight,
          }}
          textStyle={{
            fontSize: 12 * heightRef,
            color: fontColorLight,
          }}
          style={{
            width: '100%',
            backgroundColor: 'transparent',
            borderColor: 'transparent',
          }}
          dropDownContainerStyle={{
            width: '100%',
            justifyContent: 'flex-end',
            borderColor: 'transparent',
            backgroundColor: 'transparent',
          }}
          labelProps={'Last Week'}
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
        />
      </View>
    </View>
  );
  const renderItem1 = (item, index) => (
    <CustomCard
      marginV={6}
      btnRadius={5}
      onPress={() => console.log(item, 'Pressed')}
      btnHeight={64 * heightRef}>
      <>
        <View style={styles.leftCont}>
          <View style={styles.date}>
            <Text fontWeight={'600'} color={fontColorLight}>
              {item.item.date}
            </Text>
            <Text color={fontColorLight} fontSize={14}>
              0{item.item.id}
            </Text>
          </View>
          <TextHeader
            colorDesc={fontColorDark}
            fontWeight={'600'}
            fontSizeHeader={14}
            marginTop={6 * heightRef}
            Header={'Jhon Doe'}
            Description={'Pakistan'}
          />
        </View>
        <View style={styles.rightCont}>
          <Text color={sliderColorOrange}>{item.item.points}</Text>
          <Text fontSize={14} color={fontColorDark}>
            Points
          </Text>
        </View>
      </>
    </CustomCard>
  );
  const Chspters1 = () => (
    <FlatList
      ListHeaderComponentStyle={{
        height: open ? 120 * heightRef : 40 * heightRef,
      }}
      ListHeaderComponent={PositionsContainer_1}
      style={{backgroundColor: BgColor}}
      contentContainerStyle={{backgroundColor: BgColor}}
      data={AttemptPersons}
      keyExtractor={item => item.id}
      renderItem={renderItem1}
    />
  );
  const Chspters2 = () => (
    <FlatList
      ListHeaderComponentStyle={{
        height: open ? 120 * heightRef : 40 * heightRef,
      }}
      ListHeaderComponent={PositionsContainer_1}
      style={{backgroundColor: BgColor}}
      contentContainerStyle={{backgroundColor: BgColor}}
      data={AttemptPersons}
      keyExtractor={item => item.id}
      renderItem={renderItem1}
    />
  );
  const Chspters3 = () => (
    <FlatList
      ListHeaderComponentStyle={{
        height: open ? 120 * heightRef : 40 * heightRef,
      }}
      ListHeaderComponent={PositionsContainer_1}
      style={{backgroundColor: BgColor}}
      contentContainerStyle={{backgroundColor: BgColor}}
      data={AttemptPersons}
      keyExtractor={item => item.id}
      renderItem={renderItem1}
    />
  );
  const Chspters4 = () => (
    <FlatList
      ListHeaderComponentStyle={{
        height: open ? 120 * heightRef : 40 * heightRef,
      }}
      ListHeaderComponent={PositionsContainer_1}
      style={{backgroundColor: BgColor}}
      contentContainerStyle={{backgroundColor: BgColor}}
      data={AttemptPersons}
      keyExtractor={item => item.id}
      renderItem={renderItem1}
    />
  );
  const Chspters5 = () => (
    <FlatList
      ListHeaderComponentStyle={{
        height: open ? 120 * heightRef : 40 * heightRef,
      }}
      ListHeaderComponent={PositionsContainer_1}
      style={{backgroundColor: BgColor}}
      contentContainerStyle={{backgroundColor: BgColor}}
      data={AttemptPersons}
      keyExtractor={item => item.id}
      renderItem={renderItem1}
    />
  );
  return (
    <View style={{flex: 1, backgroundColor: BgColor}}>
      <OnxHeader
        left={
          <View style={[styles.header, {flexDirection: 'row'}]}>
            <OnxIcon
              onPress={() => {
                navigation.navigate('Home');
              }}
              colorIcon={fontColorLight}
              name={'arrow-left'}
              type={'MaterialCommunityIcons'}
            />
            <Text bold={'600'} paddingLeft={16} color={fontColorLight}>
              Leaderboard
            </Text>
          </View>
        }
      />
      <View style={styles.mainContainer}>
        <View>
          <ImageBackground
            style={styles.menuIcon}
            source={require('src/assets/ProfilePic.png')}></ImageBackground>
        </View>
        <Text bold={'500'} color={fontColorLight}>
          Profile Name
        </Text>
        <View style={styles.iconContHeader}>
          <Image
            style={styles.imagestyle}
            source={require('src/assets/coin.png')}
          />
          <Text marginLeft={5} fontSize={12} color={fontColorLight}>
            300 Points
          </Text>
          <Text marginHorizontal={10}>|</Text>
          <Image
            style={styles.imagestyle}
            source={require('src/assets/Group.png')}
          />
          <Text marginLeft={5 * heightRef} color={fontColorLight} fontSize={12}>
            300 Silver Coins
          </Text>
        </View>
        <View style={styles.tabs}>
          <Tab.Navigator
            tabBarOptions={{
              scrollEnabled: true,
              tabStyle: {
                width: 90,
                borderBottomColor: BorderColor,
                borderBottomWidth: 1,
              },
            }}
            screenOptions={{
              tabBarLabelStyle: {
                fontSize: 14,
                width: 54 * widthRef,
                textTransform: 'capitalize',
                fontWeight: '500',
              },
              tabBarInactiveTintColor: fontColorDark,
              tabBarActiveTintColor: OnxGreen,
              tabBarIndicatorStyle: {backgroundColor: OnxGreen},
              tabBarStyle: {backgroundColor: BgColor},
            }}>
            <Tab.Screen name="OverAll" component={Chspters1} />
            <Tab.Screen name="Math" component={Chspters2} />
            <Tab.Screen name="Science" component={Chspters3} />
            <Tab.Screen name="Maths" component={Chspters4} />
            <Tab.Screen name="Space" component={Chspters5} />
          </Tab.Navigator>
        </View>
      </View>
    </View>
  );
};

export default LeaderboardScreen;
