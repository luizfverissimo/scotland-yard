import { StyleSheet } from 'react-native'

import colors from '../../constants/colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: colors.primary
  },
  titleContainer: {
    width: '90%',
    marginTop: 64,
    alignItems: 'center'
  },
  logo: {
    width: 84,
    height: 84,
    marginBottom: 24
  },
  title: {
    fontFamily: 'OpenSans_700Bold',
    fontSize: 64,
    color: colors.yellow,
    textAlign: 'right'
  }
  
})

export default styles