import { StyleSheet } from 'react-native'

import colors from '../../constants/colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.primary
  },
  flatlist: {
    width: '85%'
  },
  listItemContainer: {
    backgroundColor: colors.carBackground,
    width: '100%',
    height: 280,
    marginVertical: 14,
    borderRadius: 8
  },
  textContainer: {
    margin: 15
  },
  numCase: {
    color: colors.orange,
    fontFamily: 'Roboto_400Regular',
    fontSize: 18
  },
  caseTitle: {
    color: colors.yellow,
    fontFamily: 'Roboto_700Bold',
    fontSize: 24
  },
  textCase: {
    color: colors.orange,
    fontFamily: 'Roboto_700Bold',
    fontSize: 14,
    marginTop: 10
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 10
  }
})

export default styles