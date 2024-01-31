import { TouchableOpacity, Text } from 'react-native'
import { COLORS, SIZES, FONTS, SHADOWS } from '../constants'

export const RectButton = ({ 
  minWidth, 
  fontSize, 
  onPress, 
  ...props
}) => {
  return (
    <TouchableOpacity 
      style={{
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.extraLarge,
        minWidth: minWidth,
        padding: SIZES.small,
        ...props
      }}
      onPress={onPress}
    >
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: fontSize,
          color: COLORS.white,
          textAlign: 'center'
        }}
      >
        Place a bid
      </Text>
    </TouchableOpacity>
  )
}
