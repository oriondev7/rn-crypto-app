import { StyleSheet } from 'react-native'
import { COLORS, FONTS, SIZES } from '../../constants'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    padding: SIZES.font,
  },

  subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  logoImage: {
    width: 170,
    height: 30,
    resizeMode: 'contain',
  },

  personContainer: {
    width: 45,
    height: 45,
  },

  personImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },

  badgeImage: {
    position: 'absolute',
    width: 15,
    height: 15,
    bottom: 0,
    right: 0,
    resizeMode: 'contain',
  },

  userContainer: {
    marginVertical: SIZES.font,
  },

  userTitle: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.small,
    color: COLORS.white,
  },

  title: {
    fontFamily: FONTS.bold,
    fontSize: SIZES.large,
    color: COLORS.white,
    marginTop: SIZES.base / 2,
  },

  searchContainer: {
    marginTop: SIZES.font,
  },

  searchInnerContainer: {
    width: '100%',
    borderRadius: SIZES.font,
    backgroundColor: COLORS.gray,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SIZES.font,
    paddingVertical: SIZES.small - 2,
  },

  searchIcon: {
    width: 20,
    height: 20,
    marginRight: SIZES.base,
  },

  searchInput: {
    color: COLORS.white,
    padding: 0,
  },
})
