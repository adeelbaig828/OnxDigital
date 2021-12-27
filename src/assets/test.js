import React, {useState} from 'react';
import {Modal, StyleSheet, View} from 'react-native';
import {
  fontColorDark,
  fontColorLight,
  pureWhiteColor,
  sliderBAckColorOrange,
  sliderColorOrange,
} from 'src/assets/Colors/colors';
import {heightRef} from 'src/config/screenSize';
import {CustomButton} from '../CustomButton';
import {CustomCard} from '../customCard';
import OnxIcon from '../OnxIcons';
import Text from '../Text';
import TextHeader from '../TextHeader';
import TextIcon from '../TextIcon';

const PlansModal = ({onPress, perMonths, perYears}, ref) => {
  const textData = [
    {
      text: 'Get access to interactive books',
    },
    {
      text: 'Earn silver coins at 2X rate',
    },
    {
      text: 'Earn silver coins at 2X rate',
    },
    {
      text: 'Earn silver coins at 2X rate',
    },
  ];
  const plansData = [
    {
      months: '24 Months',
      papular: 'Papular',
    },
    {
      months: '18 Months',
      papular: 'Papular',
    },
    {
      months: '12 Months',
      papular: 'Papular',
    },
    {
      papular: 'Papular',
      months: '6 Months',
    },
  ];
  const [showModal, setShowModal] = useState(false);

  React.useImperativeHandle(
    ref,
    () => ({
      open: () => setShowModal(true),
      close: () => setShowModal(false),
    }),
    [],
  );
  if (showModal)
    return (
      <View>
        <Modal
          animationType="slide"
          transparent={true}
          onTouchMove={() => console.log('move')}
          onTouchStart={() => console.log('move')}
          onRequestClose={() => setShowModal(false)}
          onDismiss={() => setShowModal(false)}
          visible={showModal}>
          <View style={styles.main}>
            <View style={styles.inside}>
              <View style={styles.header}>
                <Text paddingVertical={15} bold={'500'} color={fontColorLight}>
                  Subscription name
                </Text>
                <OnxIcon
                  onPress={() => setShowModal(false)}
                  size={29}
                  colorIcon={fontColorLight}
                  type={'AntDesign'}
                  name={'close'}
                />
              </View>
              {textData.map(text => (
                <TextIcon iconcolor={fontColorLight} fontSize={12}>
                  {text.text}
                </TextIcon>
              ))}
                <TextHeader
                  fontWeight={'600'}
                  marginTop={20}
                  width={'80%'}
                  Header={'Some text about the product and the plans'}
                />
                {plansData.map(text => (
                  <CustomCard
                    marginV={5}
                    onPress={onPress}
                    btnRadius={5}
                    textSize={16}
                    btnWidth={'100%'}
                    btnHeight={59 * heightRef}
                    borderWidth={0.5}
                    paddingVertical={10}
                    borderColor={fontColorLight}>
                    <>
                      <View style={styles.months}>
                        <Text color={fontColorLight}>{text.months}</Text>
                        <Text
                          borderRadius={'50'}
                          borderRadius={5}
                          width={60 * heightRef}
                          fontSize={9}
                          marginTop={5}
                          paddingVertical={3}
                          textAlign={'center'}
                          backColor={
                            text.months == '18 Months'
                              ? sliderBAckColorOrange
                              : null
                          }
                          color={pureWhiteColor}>
                          {text.months == '18 Months' ? text.papular : null}
                        </Text>
                      </View>
                      <View style={styles.rightCont}>
                        <View style={styles.monthsconscnd}>
                          <Text color={fontColorLight}>${perMonths}/mo</Text>
                          <Text fontSize={12} color={sliderColorOrange}>
                            ${perYears}
                          </Text>
                        </View>
                        <OnxIcon
                          size={22}
                          colorIcon={fontColorLight}
                          type={'Feather'}
                          name={'chevron-right'}
                        />
                      </View>
                    </>
                  </CustomCard>
                ))}
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  return null;
};

export default React.forwardRef(PlansModal);

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  inside: {
    height: '95%',
    width: '100%',
    paddingHorizontal: 13,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: 'black',
  },
  header: {
    paddingTop: 25,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  months: {height: '100%'},
  rightCont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '35%',
  },
  monthsconscnd: {height: '100%', alignItems: 'flex-end'},
});
