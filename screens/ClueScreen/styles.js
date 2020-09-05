import { StyleSheet } from 'react-native'

import colors from '../../constants/colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.primary
  },
  content: {
    flex: 1,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  clue: {
    fontFamily: 'OpenSans_700Bold',
    fontSize: 24,
    color: colors.orange
  },
  buttonContainer: {
    width: '90%',
    alignItems: 'center',
    marginBottom: 32
  }
})

export default styles