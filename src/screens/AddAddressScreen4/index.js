import React, {useState} from 'react';
import {Image, ScrollView} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {
  BgColor,
  BorderColor,
  fontColorDark,
  fontColorLight,
  mediumSizeFont,
  OnxGreen,
  pureWhiteColor,
  sliderColorOrange,
  textBackColor,
} from 'src/assets/Colors/colors';
import AddressProgressBar from 'src/Components/AddressProgressBar';
import {CustomButton} from 'src/Components/CustomButton';
import {CustomCard} from 'src/Components/customCard';
import OnxHeader from 'src/Components/Header';
import OnxIcon from 'src/Components/OnxIcons';
import Separator from 'src/Components/separator';
import Text from 'src/Components/Text';
import TextFeild from 'src/Components/TextFeild';
import TextHeader from 'src/Components/TextHeader';
import TextIcon from 'src/Components/TextIcon';
import View from 'src/Components/View';
import {fullWidth, heightRef, widthRef} from 'src/config/screenSize';
import styles from './style';
const AddAdressScreen4 = ({navigation}) => {
  const [open, setOpen] = useState(false);
  const [selectIndex, setSelectIndex] = useState(null);
  const [value, setValue] = useState('last week');
  const [items, setItems] = useState([
    {label: 'Last Week', value: 'Last Week'},
    {label: 'Last Month', value: 'Last Month'},
  ]);
  const AddressMethods = [
    {
      id: 1,
      Methods: 'Jhon',
    },
    {
      id: 2,
      Methods: 'Bonnie L',
    },
  ];
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.root}>
          <View style={{width: '100%'}}>
            <OnxHeader
              left={
                <View style={styles.header}>
                  <OnxIcon
                    onPress={() => {
                      navigation.navigate('Home');
                    }}
                    colorIcon={fontColorLight}
                    name={'arrow-left'}
                    type={'MaterialCommunityIcons'}
                  />
                  <Text paddingLeft={15} color={fontColorLight}>
                    Add Address
                  </Text>
                </View>
              }
            />
            <View style={styles.mainContainr}>
              <AddressProgressBar
                number={1}
                completed={true}
                labelText={'Address'}
                isNextLineActive={true}
              />
              <AddressProgressBar
                number={2}
                labelText={'Order Summary'}
                active={true}
              />
              <AddressProgressBar number={3} next={true} labelText={'Finish'} />
            </View>
            <Separator width={'100%'} />
            <View style={{marginHorizontal: 0}}>
              <TextHeader
                marginL={10 * heightRef}
                fontSizeHeader={14}
                fontWeight={'600'}
                colorheader={OnxGreen}
                width={'80%'}
                Header={'+ Add New Address'}
              />
              <Separator width={'100%'} />
              {AddressMethods.map((data, index) => (
                <CustomCard
                  paddingH={10 * widthRef}
                  onPress={() => setSelectIndex(index)}
                  marginV={10}
                  btnHeight={99 * heightRef}
                  paddingVertical={10}
                  style={{
                    borderBottomWidth: index === selectIndex ? 0.5 : 0.2,
                    justifyContent: 'flex-start',
                    alignItems: 'flex-end',
                  }}
                  borderColor={fontColorLight}>
                  <>
                    <View style={styles.innerCard}>
                      <View>
                        <Text
                          bold={'500'}
                          marginbtm={10 * heightRef}
                          color={fontColorLight}>
                          {data.Methods}
                        </Text>
                        <Text fontSize={12} color={fontColorDark}>
                          Address sentence 1
                        </Text>
                        <Text fontSize={12} color={fontColorDark}>
                          Address sentence and all
                        </Text>
                        <Text fontSize={12} color={fontColorDark}>
                          Phone Number
                        </Text>
                      </View>
                      <OnxIcon
                        onPress={() => setSelectIndex(index)}
                        color={
                          index === selectIndex ? OnxGreen : fontColorLight
                        }
                        type={'MaterialCommunityIcons'}
                        name={
                          index === selectIndex
                            ? 'radiobox-marked'
                            : 'radiobox-blank'
                        }
                        colorIcon={
                          index === selectIndex ? OnxGreen : fontColorLight
                        }
                      />
                    </View>
                  </>
                </CustomCard>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.textBack}>
        <CustomButton
          backColor={OnxGreen}
          btnRadius={5}
          textSize={16}
          // onPress={() => {
          //   navigation.navigate('AddAdressScreen3');
          // }}
          btnWidth={333 * widthRef}
          btnHeight={48 * heightRef}
          text={'Deliver Here'}
          fontWeight={'600'}
          marginT={15 * heightRef}
          paddingVertical={10}
          marginHorizontal={5}
          marginBottom={20}
        />
      </View>
    </View>
  );
};

export default AddAdressScreen4;
