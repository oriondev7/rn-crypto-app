import { TouchableOpacity, Image } from 'react-native'
import { styles } from './circle_button.styles'
import React, { FC } from 'react'
import { CircleButtonProps } from './circle_button.types'

export const CircleButton: FC<CircleButtonProps> = ({
  imgURL,
  onPress,
  top,
  left,
  right,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          left,
          top,
          right,
        },
      ]}
      onPress={onPress}
    >
      <Image source={imgURL} style={styles.image} />
    </TouchableOpacity>
  )
}
