import { StyleSheet } from 'react-native'
import { COLORS, FONTS, SHADOWS, SIZES } from '../../constants'

export const styles = StyleSheet.create({
  // NFTTitle styles

  nftTitleTitle: {
    fontFamily: FONTS.semiBold,
    color: COLORS.primary,
  },

  nftTitleSubtitle: {
    fontFamily: FONTS.regular,
    color: COLORS.primary,
  },

  // EthPrice styles

  ethPriceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  ethPriceImage: {
    width: 20,
    height: 20,
    marginRight: 2,
    resizeMode: 'contain',
  },

  ethPriceText: {
    fontFamily: FONTS.medium,
    fontSize: SIZES.font,
    color: COLORS.primary,
  },

  // ImageCmp styles

  imageCmp: {
    width: 48,
    height: 48,
    resizeMode: 'contain',
  },

  // ImageCmp styles

  peopleContainer: {
    flexDirection: 'row',
  },

  // EndDate styles

  endDateContainer: {
    paddingHorizontal: SIZES.font,
    paddingVertical: SIZES.base,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    ...SHADOWS.light,
    elevation: 1,
    maxWidth: '50%',
  },

  endDateTitle: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.small,
    color: COLORS.primary,
  },

  endDateValue: {
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.medium,
    color: COLORS.primary,
  },

  // SubInfo styles

  subInfoContainer: {
    width: '100%',
    paddingHorizontal: SIZES.font,
    marginTop: -SIZES.extraLarge,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})
