import React from 'react';
import {Image, SectionList, StyleSheet} from 'react-native';
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
import Text from 'src/Components/Text';
import TextHeader from 'src/Components/TextHeader';
import View from 'src/Components/View';
import {heightRef, widthRef} from 'src/config/screenSize';
import {Chapters, Muqablas, Topics, Tournaments} from 'src/utils/JSON';
import styles from './style';
const SearchScreen_1 = (props, {navigation}) => {
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
        contentTitle="The Matrix"
        contentDescription="Lorem ipsum dolor sit amet."
        data={[1, 1, 1, 1]}
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
              <Image style={styles.imageleft} source={item.image} />
            </View>
            <TextHeader
              fontWeight={'400'}
              fontSizeHeader={13}
              fontSizeDesc={12}
              marginTop={6 * heightRef}
              Header={item.Header}
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
              fontSize={14}
              type={'AntDesign'}
              name={'close'}
              IConSize={24}
              width={310 * widthRef}
              placeholder={'Search for subject, topic etc'}
              onPress={() => {}}
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
            {title: 'Muqablas', titleEnd: 'See all', data: Muqablas},
            {
              title: 'Tournaments',
              titleEnd: 'See all',
              horizontal: true,
              data: [1],
            },
            {title: 'Chapters', titleEnd: 'See all', data: Chapters},
            {title: 'Topics', titleEnd: 'See all', data: Topics},
          ]}
          renderSectionHeader={({section}) => (
            <View style={styles.sectionHeaderStyle}>
              <Text style={styles.sectionHeaderfontStyle}>{section.title}</Text>
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
          )}
          renderItem={renderItem}
          keyExtractor={(item, index) => index}
        />
      </View>
    </View>
  );
};

export default SearchScreen_1;
