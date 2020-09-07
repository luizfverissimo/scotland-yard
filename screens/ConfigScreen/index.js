import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';

import Header from '../../components/Header';

import styles from './styles';
import YellowButton from '../../components/YellowButton';

const ConfigScreen = () => {
  const [timeSaved, setTimeSaved] = useState('10');

  const { goBack } = useNavigation();

  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem('clueTime', value);
      setTimeSaved(value);
      console.log(value);
    } catch (e) {
      console.log(e);
    }
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('clueTime');
      if (value !== null) {
        return value;
      } else {
        const defaultTime = '10';
        storeData(defaultTime);

        return defaultTime;
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const loadTimeStart = async () => {
      const time = await getData();
      setTimeSaved(time);
    };

    loadTimeStart();
  }, []);

  return (
    <View style={styles.container}>
      <Header title='Configurações' onPressBackAction={goBack} />
      <ScrollView style={styles.scrollView}>
        <View style={styles.content}>
          <Text style={styles.description}>
            Selecione o tempo que cada pista ficará disponível
          </Text>

          <View style={styles.card}>
            <Text style={styles.text}>Selecionado: {timeSaved} segundos</Text>

            <View style={styles.buttonContainer}>
              <YellowButton
                text='10 segundos'
                onPressAction={() => storeData('10')}
              />
              <YellowButton
                text='20 segundos'
                onPressAction={() => storeData('20')}
              />
              <YellowButton
                text='30 segundos'
                onPressAction={() => storeData('30')}
              />
              <YellowButton
                text='60 segundos'
                onPressAction={() => storeData('60')}
              />
              <YellowButton
                text='90 segundos'
                onPressAction={() => storeData('90')}
              />
              <YellowButton
                text='120 segundos'
                onPressAction={() => storeData('120')}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ConfigScreen;
