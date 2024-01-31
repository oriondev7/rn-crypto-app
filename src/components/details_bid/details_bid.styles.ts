import { StyleSheet } from 'react-native'
import { COLORS, FONTS, SIZES } from '../../constants'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: SIZES.base,
    paddingHorizontal: SIZES.base * 2,
  },

  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  infoSubContainer: {
    paddingLeft: 10,
  },

  image: {
    width: 48,
    height: 48,
    resizeMode: 'contain',
  },

  seller: {
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.small,
    color: COLORS.primary,
  },

  date: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.small - 2,
    color: COLORS.secondary,
    marginTop: 3,
  },
})
