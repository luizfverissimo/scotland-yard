import { StyleSheet } from 'react-native';

import colors from '../../constants/colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.primary
  },
  content: {
    width: '90%',
    marginVertical: 15,
    alignItems: 'center',
    flex: 1
  },
  description: {
    fontFamily: 'Roboto_700Bold',
    fontSize: 24,
    color: colors.orange,
  },
  flatlist: {
    width: '90%',
    marginTop: 10
  },
  flatlistItem: {
    width: '100%'
  },
  buttonContainer: {
    alignItems: 'center'
  }
});

export default styles;