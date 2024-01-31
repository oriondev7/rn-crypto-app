import { StyleSheet } from 'react-native'
import { COLORS, SHADOWS, SIZES } from '../../constants'

export const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.white,
    position: 'absolute',
    borderRadius: SIZES.extraLarge,
    alignItems: 'center',
    justifyContent: 'center',
    ...SHADOWS.light,
  },

  image: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
})
