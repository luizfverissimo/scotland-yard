import React from 'react';
import { View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import YellowButton from '../../components/YellowButton';

import logo from '../../assets/logo.png';

import styles from './styles';

const StartScreen = () => {
  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.title}>Scotland Yard</Text>
      </View>
      <View style={styles.buttonContainer}>
        <YellowButton
          text='Iniciar Investigação'
          icon='magnify'
          onPressAction={() => navigate('caseSelection')}
        />
        <YellowButton
          text='Configurações'
          icon='cogs'
          onPressAction={() => navigate('configScreen')}
        />
      </View>
    </View>
  );
};

export default StartScreen;
