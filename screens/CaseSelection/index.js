import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';

import styles from './styles';
import Header from '../../components/Header';

import data from '../../data/data.json';
import YellowButton from '../../components/YellowButton';

const CaseSelection = () => {
  const renderFlatlistItem = ({ item }) => {
    return (
      <View style={styles.listItemContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.numCase}>Caso {item.caso}</Text>
          <Text style={styles.caseTitle}>{item.nomecaso}</Text>
          <Text style={styles.textCase}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            pellentesque ipsum vitae lectus tincidunt sagittis. Nam posuere
            augue at est lobortis, in efficitur neque luctus. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit.
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <YellowButton text={'Investigar'} icon={'magnify'}/>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Header title={'Selecione o caso'} />
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
