import React, {useEffect, useState} from 'react';
import {FlatList, Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  fontColorDark,
  fontColorLight,
  textBackColor,
} from 'src/assets/Colors/colors';
import {CustomCard} from 'src/Components/customCard';
import {CustomInput} from 'src/Components/CustomInput';
import OnxHeader from 'src/Components/Header';
import OnxIcon from 'src/Components/OnxIcons';
import Text from 'src/Components/Text';
import TextHeader from 'src/Components/TextHeader';
import View from 'src/Components/View';
import {heightRef, widthRef} from 'src/config/screenSize';
import {
  SEARCH_TOPICS,
  SEARCH_TOURNAMENTS,
  SEARCH_ZONE,
} from 'src/Redux/Reducers/Tournaments/TournamentsActions';
import styles from './style';
const SeeAllScreen_1 = (props, {navigation}) => {
  const [MuqablaSearch, setMuqablaSearch] = useState({});
  const [search, setSearch] = useState('');
  const [loading, setloading] = useState(false);
  const token = useSelector(state => state.auth.token);
  const dispatch = useDispatch();
  useEffect(() => {
    let id = setTimeout(() => {
      props.route.params.from === 'Muqablas'
        ? getMuqablasSearch(search)
        : props.route.params.from === 'Tournaments'
        ? gettournamentsSearch(search)
        : props.route.params.from === 'Chapters'
        ? getTopicsSearch(search)
        : getTopicsSearch(search);
    }, 300);
    return () => clearTimeout(id);
  }, [search]);
  const getMuqablasSearch = text => {
    setloading(true);
    SEARCH_ZONE(
      text,
      token,
    )(dispatch)
      .then(res => {
        if (res.code === 200) {
          setloading(false);
          setMuqablaSearch(res.data);
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
  const gettournamentsSearch = text => {
    setloading(true);
    SEARCH_TOURNAMENTS(
      text,
      token,
    )(dispatch)
      .then(res => {
        if (res.code === 200) {
          setloading(false);
          setMuqablaSearch(res.data);
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
  const getTopicsSearch = text => {
    setloading(true);
    SEARCH_TOPICS(
      text,
      token,
    )(dispatch)
      .then(res => {
        if (res.code === 200) {
          setloading(false);
          setMuqablaSearch(res.data);
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
  const headerComponent = () =>
    MuqablaSearch?.data?.length === 0 ? null : (
      <View style={styles.sectionHeaderStyle}>
        <Text style={styles.sectionHeaderfontStyle}>
          {props.route.params.from}
        </Text>
      </View>
    );
  const emptyComponent = () => (
    <View style={styles.emptyMain}>
      <View style={styles.rowStyle}>
        <Image
          style={styles.imageleft2}
          source={require('../../assets/Vectoroops.png')}
        />
        <Text bold={'700'} fontSize={16}>
          {'  '}
          Oops! No results found
        </Text>
      </View>
      <Text>Please try searching some other keyword</Text>
    </View>
  );
  const renderItem = item => (
    <CustomCard
      marginV={6}
      backColor={textBackColor}
      btnRadius={5}
      onPress={() => console.log(item, 'Pressed')}
      btnHeight={64 * heightRef}>
      <>
        <View style={styles.leftCont}>
          <View style={styles.date}>
            <Image
              style={styles.imageleft}
              source={require('../../assets/no-image.png')}
            />
          </View>
          <TextHeader
            fontWeight={'400'}
            fontSizeHeader={13}
            fontSizeDesc={12}
            marginTop={6 * heightRef}
            Header={item.item.name}
            Description={item?.item?.Disc}
          />
        </View>
        <View style={styles.rightCont}>
          <OnxIcon
            colorIcon={fontColorDark}
            size={30 * heightRef}
            type={'Entypo'}
            name={'chevron-small-right'}
          />
        </View>
      </>
    </CustomCard>
  );
  return (
    <View style={styles.mainContainer}>
      <OnxHeader
        left={
          <View style={styles.header}>
            <OnxIcon
              onPress={() => {
                props.navigation.navigate('Home');
              }}
              colorIcon={fontColorLight}
              name={'arrow-left'}
              type={'MaterialCommunityIcons'}
            />
            <CustomInput
              disableError
              fontSize={14}
              type={'AntDesign'}
              name={'close'}
              loading={loading}
              value={search}
              IConSize={24}
              width={310 * widthRef}
              placeholder={'Search for subject, topic etc'}
              onChangeText={text => {
                setSearch(text);
                // print(text);
              }}
              onPress={() => setSearch('')}
            />
          </View>
        }
      />
      <View style={styles.main1}>
        <FlatList
          ListHeaderComponent={headerComponent()}
          ListEmptyComponent={emptyComponent()}
          data={MuqablaSearch.data}
          style={styles.flatlistContainer}
          contentContainerStyle={{flexGrow: 1}}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};

export default SeeAllScreen_1;
