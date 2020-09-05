import { StyleSheet } from 'react-native'

import colors from '../../constants/colors'

const styles = StyleSheet.create({
  container: {
    width: '90%',
    marginTop: 42,
    marginBottom: 12
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row'
  },
  headerTitle: {
    fontSize: 36,
    fontFamily: 'OpenSans_700Bold',
    color: colors.yellow,
    marginTop: 24
  },
  subTitle: {
    fontSize: 19,
    color: colors.red,
    fontFamily: 'Roboto_400Regular'
  }
})

export default styles
