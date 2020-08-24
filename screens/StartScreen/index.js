import React from 'react';
import { View, Text, Image } from 'react-native';

import YellowButton from '../../components/YellowButton';

import logo from '../../assets/logo.png'

import styles from './styles';


const StartScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Image source={logo} style={styles.logo}/>
        <Text style={styles.title}>Scotland Yard</Text>
      </View>
      <YellowButton text='Iniciar Investigação' icon='magnify' />      
    </View>
  );
};

export default StartScreen;
