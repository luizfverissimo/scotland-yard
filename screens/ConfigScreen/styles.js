import { StyleSheet } from 'react-native';

import colors from '../../constants/colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.primary
  },
  scrollView: {
    width: '90%',
  },
  content: {
    width: '100%',
    alignItems: 'center',
  },
  description: {
    fontFamily: 'Roboto_700Bold',
    fontSize: 24,
    color: colors.orange,
  },
  card: {
    backgroundColor: colors.carBackground,
    width: '100%',
    marginVertical: 12,
    alignItems: 'center',
    borderRadius: 8,
    minHeight: 100,
    paddingVertical: 18
  },
  text: {
    fontFamily: 'Roboto_700Bold',
    color: colors.yellow,
    fontSize: 24,
    marginBottom: 18
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
})

export default styles