import { Image, View } from 'react-native'
import { CircleButton } from '../'
import React, { FC } from 'react'
import { DetailsHeaderProps } from './details_header.types'
import { useNavigation } from '@react-navigation/native'
import { assets } from '../../constants'
import { styles } from './details_header.styles'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export const DetailsHeader: FC<DetailsHeaderProps> = ({ data }) => {
  const topInset = useSafeAreaInsets().top + 10
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Image source={data.image} style={styles.image} />

      <CircleButton
        imgURL={assets.left}
        onPress={() => navigation.goBack()}
        left={15}
        top={topInset}
      />
      <CircleButton imgURL={assets.heart} right={15} top={topInset} />
    </View>
  )
}
