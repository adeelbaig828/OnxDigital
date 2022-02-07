import React, {useEffect, useState} from 'react';
import {FlatList, Image, ImageBackground} from 'react-native';
import {
  BgColor,
  BorderColor,
  fontColorDark,
  fontColorGray,
  fontColorLight,
  OnxGreen,
  pureWhiteColor,
  sliderColorOrange,
  textBackColor,
  Trophycolor,
} from 'src/assets/Colors/colors';
import {CustomButton} from 'src/Components/CustomButton';
import OnxHeader from 'src/Components/Header';
import OnxIcon from 'src/Components/OnxIcons';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Text from 'src/Components/Text';
import Dropdown from 'src/Components/DropDownPicker';
import TextHeader from 'src/Components/TextHeader';
import TextIcon from 'src/Components/TextIcon';
import View from 'src/Components/View';
import DropDownPicker from 'react-native-dropdown-picker';
import {fontRef, fullWidth, heightRef, widthRef} from 'src/config/screenSize';
import styles from './style';
import {AttemptPersons, AttemptsPersons, Prizes, Videos} from 'src/utils/JSON';
import {CustomCard} from 'src/Components/customCard';
import {GET_ALL_PRIZES} from 'src/Redux/Reducers/Tournaments/TournamentsActions';
import {useDispatch, useSelector} from 'react-redux';
import OnxLoading from 'src/Components/OnxLoading';

const Tab = createMaterialTopTabNavigator();

const Muqabla_2 = (props, {navigation}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('last week');
  const [loading, setloading] = useState(false);
  const [prizes, setprizes] = useState([]);
  const [items, setItems] = useState([
    {label: 'Last Week', value: 'Last Week'},
    {label: 'Last Month', value: 'Last Month'},
  ]);
  const dispatch = useDispatch();
  const barearToken = useSelector(state => state.auth.token);
  useEffect(() => {
    setloading(true);
    getAllPrizes();
  }, []);
  const getAllPrizes = () => {
    GET_ALL_PRIZES(barearToken)(dispatch)
      .then(res => {
        if (res.code === 200) {
          setprizes(res.data.data);
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
  const renderItem = (item, index) => (
    <CustomCard
      marginT={13 * heightRef}
      backColor={textBackColor}
      btnRadius={5}
      // onPress={() => console.log(item, 'Pressed')}
      btnHeight={90 * heightRef}>
      <>
        <View style={styles.iconCont}>
          {item.item.position == '3rd Position' ? (
            <View style={styles.bookBack}>
              <Image
                style={styles.book}
                source={require('../../../assets/Vector.png')}
              />
            </View>
          ) : (
            <OnxIcon
              backRoundBorderColor={fontColorGray}
              backRoundBorder
              name={item.item.position == '2nd Position' ? 'pen-alt' : 'mobile'}
              type={'FontAwesome5'}
              size={23}
              colorIcon={pureWhiteColor}
            />
          )}

          <TextHeader
            widthDesText={'60%'}
            marginL={7}
            fontSizeHeader={14}
            colorheader={fontColorLight}
            fontSizeDesc={11}
            fontWeight={'500'}
            Header={`${item.item.position}st position`}
            Description={item.item.prize_value}
          />
        </View>
      </>
    </CustomCard>
  );
  const PositionsContainer = () => (
    <View
      style={{
        borderBottomWidth: 1,
        borderBottomColor: BorderColor,
        width: '100%',
        height: '100%',
        justifyContent: 'space-evenly',
      }}>
      <CustomCard
        marginT={13 * heightRef}
        backColor={textBackColor}
        btnRadius={5}
        onPress={() => console.log(item, 'Pressed')}
        btnHeight={64 * heightRef}>
        <>
          <View style={styles.iconContHeader}>
            <OnxIcon
              colorIcon={Trophycolor}
              size={15 * heightRef}
              type={'EvilIcons'}
              name={'trophy'}
            />
            <Text fontSize={12} color={fontColorLight}>
              51th Position
            </Text>
            <OnxIcon
              name={'dot-single'}
              size={20 * heightRef}
              colorIcon={fontColorLight}
              type={'Entypo'}
            />
            <Image
              style={styles.imagestyle}
              source={require('src/assets/coin.png')}
            />
            <Text
              marginLeft={5 * heightRef}
              color={fontColorLight}
              fontSize={12}>
              5 Gold Coins
            </Text>
          </View>
        </>
      </CustomCard>
      <Text>Attempts</Text>
    </View>
  );
  const PositionsContainer_1 = () => (
    <View
      style={{
        borderBottomWidth: 1,
        borderBottomColor: BorderColor,
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        // backgroundColor: 'red',
      }}>
      <Text marginTop={10 * heightRef} color={fontColorLight}>
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
            // position: 'absolute',
            borderColor: 'transparent',
            // right: 30 * widthRef,
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
      paddinginner={-10}
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
      style={{backgroundColor: BgColor}}
      contentContainerStyle={{backgroundColor: BgColor}}
      data={prizes}
      keyExtractor={item => item.id}
      renderItem={renderItem}
    />
  );
  const Chspters2 = () => (
    <FlatList
      ListHeaderComponentStyle={{
        alignItems: 'center',
        justifyContent: 'space-evenly',
        height: 115 * heightRef,
      }}
      ListHeaderComponent={PositionsContainer}
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
  return loading ? (
    <OnxLoading />
  ) : (
    <View style={styles.rootContainer}>
      <OnxHeader
        borderWidth1
        borderBottomWidth2
        widthHeader={fullWidth}
        left={
          <OnxIcon
            onPress={() => {
              props.navigation.navigate('Home');
            }}
            colorIcon={fontColorLight}
            name={'arrow-left'}
            type={'MaterialCommunityIcons'}
          />
        }
      />
      <View style={styles.upperCon}>
        <Image
          style={styles.adsBack}
          source={require('../../../assets/wholebacl.png')}
        />
        <TextHeader
          colorheader={fontColorLight}
          marginTop={20}
          fontWeight={'500'}
          Header={'Back to School'}
          Description={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam massa eget est sit blandit purus.'
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
              tabBarInactiveTintColor: fontColorDark,
              tabBarActiveTintColor: OnxGreen,
              tabBarIndicatorStyle: {backgroundColor: OnxGreen},
              tabBarIndicatorContainerStyle: {
                borderBottomColor: BorderColor,
                width: '100%',
                borderBottomWidth: 1,
              },
              tabBarStyle: {backgroundColor: BgColor},
            }}>
            <Tab.Screen name="Prizes" component={Chspters1} />
            <Tab.Screen name="Progress" component={Chspters2} />
            <Tab.Screen name="Leadrboard" component={Chspters3} />
          </Tab.Navigator>
        </View>
      </View>
      <View style={styles.bottomCon}>
        <CustomButton
          onPress={() => {
            props.navigation.navigate('Muqabla_3');
          }}
          backColor={OnxGreen}
          btnRadius={5}
          textSize={16}
          btnWidth={'100%'}
          btnHeight={43 * heightRef}
          text={'Continue Playing'}
          fontWeight={'600'}
          marginT={15 * heightRef}
          paddingVertical={10}
        />
      </View>
    </View>
  );
};

export default Muqabla_2;
