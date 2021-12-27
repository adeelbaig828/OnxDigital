import React, {useState} from 'react';
import {Modal, StyleSheet, View} from 'react-native';
import {
  fontColorDark,
  fontColorLight,
  pureWhiteColor,
  sliderBAckColorOrange,
  sliderColorOrange,
} from 'src/assets/Colors/colors';
import {heightRef, widthRef} from 'src/config/screenSize';
import {CustomCard} from '../customCard';
import OnxIcon from '../OnxIcons';
import Text from '../Text';
import LinearGradient from 'react-native-linear-gradient';
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
  const [changeGradient, setGradient] = useState(false);

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
            <LinearGradient
              start={{x: 0, y: 0.75}}
              end={{x: 0, y: 0}}
              colors={
                changeGradient ? ['black','black','black'] : ['black', '#1e402f', '#3b845c']
              }
              style={styles.inside}>
            <View style={styles.header}>
              <Text
                paddingVertical={15}
                bold={'500'}
                color={changeGradient ? fontColorLight : pureWhiteColor}>
                Subscription name
              </Text>
              <OnxIcon
                onPress={() => setShowModal(false)}
                size={29}
                colorIcon={changeGradient ? fontColorLight : pureWhiteColor}
                type={'AntDesign'}
                name={'close'}
              />
            </View>
            {textData.map(text => (
              <TextIcon
                onPress={() =>
                  changeGradient ? setGradient(false) : setGradient(true)
                }
                color={changeGradient ? fontColorDark : pureWhiteColor}
                iconcolor={changeGradient ? fontColorLight : pureWhiteColor}
                fontSize={12}>
                {text.text}
              </TextIcon>
            ))}
            <TextHeader
              fontWeight={'600'}
              marginTop={20}
              colorheader={changeGradient ? fontColorLight : pureWhiteColor}
              width={'80%'}
              Header={'Some text about the product and the plans'}
            />
            {plansData.map(text => (
              <CustomCard
                marginV={5}
                onPress={onPress}
                btnRadius={5}
                btnWidth={328 * widthRef}
                textSize={16}
                btnHeight={64 * heightRef}
                borderWidth={0.5}
                paddingVertical={10}
                borderColor={changeGradient ? fontColorLight : pureWhiteColor}>
                <>
                  <View style={styles.months}>
                    <Text
                      color={changeGradient ? fontColorLight : pureWhiteColor}>
                      {text.months}
                    </Text>
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
                      <Text
                        color={
                          changeGradient ? fontColorLight : pureWhiteColor
                        }>
                        ${perMonths}/mo
                      </Text>
                      <Text fontSize={12} color={sliderColorOrange}>
                        ${perYears}
                      </Text>
                    </View>
                    <OnxIcon
                      size={22}
                      colorIcon={
                        changeGradient ? fontColorLight : pureWhiteColor
                      }
                      type={'Feather'}
                      name={'chevron-right'}
                    />
                  </View>
                </>
              </CustomCard>
            ))}
            </LinearGradient>
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
    height: '100%',
    width: '100%',
    paddingHorizontal: 13,
    padding: 15,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  header: {
    paddingTop: 25 * heightRef,
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
