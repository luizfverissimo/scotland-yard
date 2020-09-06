import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ProgressBar from 'react-native-progress/Bar';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import styles from './styles';
import colors from '../../constants/colors';

import Header from '../../components/Header';
import YellowButton from '../../components/YellowButton';

const ClueScreen = ({ route }) => {
  const [progressBarValue, setProgressBarValue] = useState(0);

  const clueParams = route.params ? route.params.place : null;
  const clue = route.params ? route.params.clue : null;

  const { goBack } = useNavigation();

  const limit = 10;
  let timer = 0;
  const progressIncrement = 1 / limit;

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer >= limit) {
        clearInterval(interval);
        goBack();
      }

      timer += 1;

      setProgressBarValue(
        (progressBarValue) => progressBarValue + progressIncrement
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <Header title={clueParams.name} />
      <View style={styles.content}>
        <Text style={styles.clue}>{clue}</Text>
        <View style={styles.barContainer}>
          <ProgressBar
            styleAttr='Horizontal'
            progress={progressBarValue}
            indeterminate={false}
            color={colors.yellow}
            unfilledColor={colors.carBackground}
            width={null}
            height={10}
            borderWidth={0}
          />
          <View style={styles.iconContainer}>
            <MaterialCommunityIcons name='clock' size={36} color={colors.carBackground} />
          </View>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <YellowButton
          text='Voltar'
          icon='keyboard-backspace'
          onPressAction={goBack}
        />
      </View>
    </View>
  );
};

export default ClueScreen;
