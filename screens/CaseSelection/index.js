import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import Header from '../../components/Header';
import YellowButton from '../../components/YellowButton';

import data from '../../data/data.json';

const CaseSelection = () => {
  const { navigate, goBack } = useNavigation();

  const renderFlatlistItem = ({ item }) => {
    return (
      <View style={styles.listItemContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.numCase}>Caso {item.caso}</Text>
          <Text style={styles.caseTitle}>{item.nomecaso}</Text>
          <Text style={styles.textCase}>
            {item.desc}
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <YellowButton
            text={'Investigar'}
            icon={'magnify'}
            onPressAction={() =>
              navigate('clueSelection', { numCase: item.caso })
            }
          />
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Header title={'Selecione o caso'} onPressBackAction={goBack}/>
      <FlatList
        style={styles.flatlist}
        data={data.pistas}
        renderItem={renderFlatlistItem}
        keyExtractor={(items) => items.caso}
      />
    </View>
  );
};

export default CaseSelection;
