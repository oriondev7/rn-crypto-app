import { StyleSheet } from 'react-native'
import { COLORS, SHADOWS, SIZES } from '../../constants'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.font,
    marginBottom: SIZES.extraLarge,
    margin: SIZES.base,
    ...SHADOWS.dark,
  },

  nftImageContainer: {
    width: '100%',
    height: 250,
  },

  image: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: SIZES.font,
    borderTopRightRadius: SIZES.font,
    resizeMode: 'cover',
  },

  infoContainer: {
    width: '100%',
    padding: SIZES.font,
  },

  infoInnerContainer: {
    marginTop: SIZES.font,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
})
