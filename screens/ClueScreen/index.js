import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import Header from '../../components/Header';
import YellowButton from '../../components/YellowButton';

const ClueScreen = ({ route }) => {
  const clueParams = route.params ? route.params.place : null;
  const clue = route.params ? route.params.clue : null;

  const { goBack } = useNavigation();

  return (
    <View style={styles.container}>
      <Header title={clueParams.name} />
      <View style={styles.content}>
        <Text style={styles.clue}>{clue}</Text>
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
