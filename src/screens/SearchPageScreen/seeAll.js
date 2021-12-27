import React from 'react';
import {FlatList, Image, SectionList, StyleSheet} from 'react-native';
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
const SeeAllScreen_1 = (props, {navigation}) => {
  const headerComponent = () => (
    <View style={styles.sectionHeaderStyle}>
      <Text style={styles.sectionHeaderfontStyle}>
        {props.route.params.from}
      </Text>
    </View>
  );
  const renderItem = item => (
    console.log('object', item),
    (
      <CustomCard
        marginV={6}
        backColor={textBackColor}
        btnRadius={5}
        onPress={() => console.log(item, 'Pressed')}
        btnHeight={64 * heightRef}>
        <>
          <View style={styles.leftCont}>
            <View style={styles.date}>
              <Image style={styles.imageleft} source={item.item.image} />
            </View>
            <TextHeader
              fontWeight={'400'}
              fontSizeHeader={13}
              fontSizeDesc={12}
              marginTop={6 * heightRef}
              Header={item.item.Header}
              Description={item.item.Disc}
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
    )
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
      <View style={styles.main1}>
        <FlatList
          ListHeaderComponent={headerComponent()}
          data={Muqablas}
          style={styles.flatlistContainer}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};

export default SeeAllScreen_1;
