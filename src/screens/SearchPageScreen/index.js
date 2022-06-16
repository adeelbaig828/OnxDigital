import React, {useEffect, useState} from 'react';
import {Image, SectionList, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  fontColorDark,
  fontColorLight,
  textBackColor,
} from 'src/assets/Colors/colors';
import {CustomCard} from 'src/Components/customCard';
import {CustomInput} from 'src/Components/CustomInput';
import FlatListComponent from 'src/Components/FlatListComponent';
import OnxHeader from 'src/Components/Header';
import OnxIcon from 'src/Components/OnxIcons';
import OnxLoading from 'src/Components/OnxLoading';
import Text from 'src/Components/Text';
import TextHeader from 'src/Components/TextHeader';
import View from 'src/Components/View';
import {print} from 'src/config/function';
import {heightRef, widthRef} from 'src/config/screenSize';
import {GLOBAL_SEARCH} from 'src/Redux/Reducers/Tournaments/TournamentsActions';
import {Chapters, Muqablas, Topics, Tournaments} from 'src/utils/JSON';
import styles from './style';
const SearchScreen_1 = (props, {navigation}) => {
  const token = useSelector(state => state.auth.token);
  const [MuqablaSearch, setMuqablaSearch] = useState({});
  const [search, setSearch] = useState('');
  const [loading, setloading] = useState(false);

  const dispatch = useDispatch();
  print({MuqablaSearch});

  useEffect(() => {
    let id = setTimeout(() => {
      getAttemptScore(search);
    }, 300);
    return () => clearTimeout(id);
  }, [search]);

  const getAttemptScore = text => {
    setloading(true);
    GLOBAL_SEARCH(
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
  const renderItem = ({item, section}) =>
    section.horizontal ? (
      <FlatListComponent
        componentHeight={134 * heightRef}
        componentWidth={148 * widthRef}
        fontSizedis={8}
        fontSize={10}
        TextColor={fontColorLight}
        TextColorDesc={fontColorDark}
        dots
        contentTitle={MuqablaSearch.tournaments}
        contentDescription="Lorem ipsum dolor sit amet."
        data={MuqablaSearch.tournaments || []}
      />
    ) : (
      // Item for the FlatListItems
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
                resizeMode={'cover'}
                style={styles.imageleft}
                source={require('../../assets/no-image.png')}
              />
            </View>
            <TextHeader
              fontWeight={'400'}
              fontSizeHeader={13}
              fontSizeDesc={12}
              marginTop={6 * heightRef}
              Header={item.name}
              Description={item.Disc}
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
      <View style={styles.main}>
        <SectionList
          style={styles.flatlistContainer}
          ListEmptyComponent={
            <TextHeader
              alignItems={'center'}
              fontWeight={'600'}
              marginTop={6 * heightRef}
              Header={'Search what you love'}
              Description={'Search for tournaments, muqablas, topics and more'}
            />
          }
          sections={[
            {
              title: 'Muqablas',
              titleEnd: 'See all',
              data: MuqablaSearch.muqablas || [],
            },
            {
              title: 'Tournaments',
              titleEnd: 'See all',
              horizontal: true,
              data: [1],
            },
            {
              title: 'Chapters',
              titleEnd: 'See all',
              data: MuqablaSearch.zones || [],
            },
            {
              title: 'Topics',
              titleEnd: 'See all',
              data: MuqablaSearch.zones || [],
            },
          ].filter(v => v.data.length > 0)}
          renderSectionHeader={({section}) =>
            section.title === 'Tournaments' &&
            MuqablaSearch?.tournaments?.length === 0 ? null : (
              <View style={styles.sectionHeaderStyle}>
                <Text style={styles.sectionHeaderfontStyle}>
                  {section.title}
                </Text>
                <Text
                  onPress={() => {
                    props.navigation.navigate('SeeAllScreen_1', {
                      from: section.title,
                    });
                  }}
                  style={styles.sectionHeaderfontend}>
                  {section.titleEnd}
                </Text>
              </View>
            )
          }
          renderItem={renderItem}
          keyExtractor={(item, index) => index}
        />
      </View>
    </View>
  );
};

export default SearchScreen_1;
