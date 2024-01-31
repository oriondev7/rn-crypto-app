import { StyleSheet } from 'react-native'
import { COLORS } from '../../constants'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  dataContainer: {
    zIndex: 0,
  },

  backgroundContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    zIndex: -1,
  },

  backgroundPrimary: {
    height: 300,
    backgroundColor: COLORS.primary,
  },

  backgroundWhite: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
})
