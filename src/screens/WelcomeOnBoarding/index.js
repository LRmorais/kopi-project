import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  Dimensions,
} from 'react-native';

import OnBoarding from 'react-native-onboarding-swiper';
import {theme} from '../../utils/style';

import Spacer from '../../components/spacer';
import {RoundedButton} from '../../components/roundedButton/index';

import Illustration1 from '../../images/stuff/onboarding-illustration-1.png';
import Illustration2 from '../../images/stuff/onboarding-illustration-2.png';
import Illustration3 from '../../images/stuff/onboarding-illustration-3.png';

const phoneHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#30287b',
  },
  onBoardingContainer: {
    height: phoneHeight > 592 ? phoneHeight / 1.5 : phoneHeight / 1.5,
  },
  containerOnBoarding: {
    justifyContent: 'flex-start',
  },
  imageContainer: {
    height: phoneHeight > 592 ? phoneHeight / 2.3 : phoneHeight / 2.5,
    paddingBottom: 0,
    marginBottom: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  illustration: {
    height: '100%',
    width: '100%',
    marginBottom: 0,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 22,
    // fontFamily: theme.typography.fontFamily.bold,
    color: theme.palette.primary.contrast,
  },
  subtitleContainer: {
    maxWidth: 320,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    // fontFamily: theme.typography.fontFamily.extraLight,
    color: theme.palette.primary.contrast,
  },
  bold: {
    // fontFamily: theme.typography.fontFamily.bold,
  },
  dotComponent: {
    padding: 1,
    width: 30,
    marginHorizontal: 5,
    backgroundColor: theme.palette.primary.contrast,
  },
  dotComponentSelected: {
    opacity: 0.3,
  },
  actionsContainer: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 15,
    paddingBottom: 30,
    backgroundColor: theme.palette.primary.main,
    // backgroundColor: '#30287b',
    justifyContent: 'center',
  },
});

const WelcomeOnBoarding = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={theme.palette.primary.main} />
      <View style={styles.onBoardingContainer}>
        <OnBoarding
          containerStyles={styles.containerOnBoarding}
          imageContainerStyles={styles.imageContainer}
          titleStyles={styles.title}
          showPagination={true}
          showDone={false}
          showSkip={false}
          showNext={false}
          DotComponent={({selected}) => (
            <View
              style={[
                styles.dotComponent,
                !selected && styles.dotComponentSelected,
              ]}
            />
          )}
          skipToPage={1}
          bottomBarColor={theme.palette.primary.main}
          bottomBarHeight={20}
          pages={[
            {
              image: (
                <Image style={styles.illustration} source={Illustration1} />
              ),
              title: 'Bem vindo ao KoPi',
              subtitle: (
                <View style={styles.subtitleContainer}>
                  <Text style={styles.subtitle}>
                    Com o <Text style={styles.bold}>KoPi</Text> você torna suas
                    aulas mais dinâmicas e animadas sem precisar estar
                    conectado.
                  </Text>
                </View>
              ),
              backgroundColor: theme.palette.primary.main,
            },
            {
              image: (
                <Image style={styles.illustration} source={Illustration2} />
              ),
              title: 'Seu primeiro quiz local',
              subtitle: (
                <View style={styles.subtitleContainer}>
                  <Text style={styles.subtitle}>
                    Teste seus conhecimentos com KoPi.
                  </Text>
                </View>
              ),
              backgroundColor: theme.palette.primary.main,
            },
            {
              image: (
                <Image style={styles.illustration} source={Illustration3} />
              ),
              title: 'Mais performace, mais crescimento',
              subtitle: (
                <View style={styles.subtitleContainer}>
                  <Text style={styles.subtitle}>
                    Com KoPi se torna fácil melhorar o rendimento da sua turma.
                  </Text>
                </View>
              ),
              backgroundColor: theme.palette.primary.main,
            },
          ]}
        />
      </View>
      <View style={styles.actionsContainer}>
        <RoundedButton action={() => {}} title="ENTRAR" />
        <Spacer size={2} fixedSize />
        <RoundedButton action={() => {}} outlined title="CADASTRE-SE" />
      </View>
    </View>
  );
};

export default WelcomeOnBoarding;
