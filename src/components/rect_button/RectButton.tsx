import { TouchableOpacity, Text } from 'react-native'
import { styles } from './rect_button.styles'
import React, { FC } from 'react'
import { RectButtonProps } from './rect_button.types'

export const RectButton: FC<RectButtonProps> = ({
  minWidth,
  fontSize,
  onPress,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          minWidth: minWidth,
          ...props,
        },
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          styles.title,
          {
            fontSize: fontSize,
          },
        ]}
      >
        Place a bid
      </Text>
    </TouchableOpacity>
  )
}
