import { StyleSheet } from 'react-native';

import colors from '../../constants/colors';

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.yellow,
    width: '80%',
    height: 64,
    borderRadius: 8,
    marginVertical: 10
  },
  text: {
    fontFamily: 'Roboto_700Bold',
    fontSize: 18,
    color: colors.primary,
  },
});

export default styles;
