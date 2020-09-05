import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import data from '../../data/data.json';

import Header from '../../components/Header';
import YellowButton from '../../components/YellowButton';

const places = [
  {
    name: 'Farmácia',
    icon: 'pharmacy', //materialCommunityIcons
    json: 'farm',
  },
  {
    name: 'Banco',
    icon: 'bank', //materialCommunityIcons
    json: 'banc',
  },
  {
    name: 'Estação de carruagem',
    icon: 'horseshoe', //materialCommunityIcons
    json: 'estac',
  },
  {
    name: 'Docas',
    icon: 'anchor', //materialCommunityIcons
    json: 'docas',
  },
  {
    name: 'Hotel',
    icon: 'hotel', //materialCommunityIcons
    json: 'hotel',
  },
  {
    name: 'Chaveiro',
    icon: 'key', //materialCommunityIcons
    json: 'chav',
  },
  {
    name: 'Museu',
    icon: 'image-frame', //materialCommunityIcons
    json: 'museu',
  },
  {
    name: 'Livraria',
    icon: 'library-shelves', //materialCommunityIcons
    json: 'livra',
  },
  {
    name: 'Parque',
    icon: 'tree', //materialCommunityIcons
    json: 'parq',
  },
  {
    name: 'Casa de penhores',
    icon: 'cart', //materialCommunityIcons
    json: 'cpen',
  },
  {
    name: 'Teatro',
    icon: 'drama-masks', //materialCommunityIcons
    json: 'teat',
  },
  {
    name: 'Bar',
    icon: 'glass-cocktail', //materialCommunityIcons
    json: 'bar',
  },
  {
    name: 'Scotland Yard',
    icon: 'alarm-light', //materialCommunityIcons
    json: 'syard',
  },
  {
    name: 'Charutaria',
    icon: 'smoking', //materialCommunityIcons
    json: 'charut',
  },
];

const ClueSelection = ({ route }) => {
  const caseNumber = route.params ? route.params.numCase : null;
  const caseClues = data.pistas.filter((item) => item.caso === caseNumber);

  const { navigate } = useNavigation();

  const renderFlatlistItem = ({ item }) => {
    return (
      <View style={styles.buttonContainer}>
        <YellowButton
          text={item.name}
          icon={item.icon}
          onPressAction={() => navigate('clueScreen', {place: item, clue: caseClues[0][item.json]})}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Header title={caseClues[0].nomecaso} numCase={caseClues[0].caso} />
      <View style={styles.content}>
        <Text style={styles.description}>
          Selecione os locais para buscar pistas
        </Text>
        <FlatList
          style={styles.flatlist}
          data={places}
          renderItem={renderFlatlistItem}
          keyExtractor={(items) => items.name}
          contentContainerStyle={styles.flatlistItem}
        />
      </View>
    </View>
  );
};

export default ClueSelection;
