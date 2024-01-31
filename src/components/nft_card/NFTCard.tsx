import { View, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { SIZES, ScreenName, assets } from '../../constants'
import { CircleButton } from '../circle_button/CircleButton'
import { RectButton } from '../rect_button/RectButton'
import { SubInfo, EthPrice, NFTTitle } from '../sub_info/SubInfo'
import { styles } from './nft_card.styles'
import React, { FC } from 'react'
import { NFTCardProps } from './nft_card.types'

export const NFTCard: FC<NFTCardProps> = ({ data }) => {
  const navigation = useNavigation()
  const goToDetails = () => navigation.navigate(ScreenName.details, { data })

  return (
    <View style={styles.container}>
      <View style={styles.nftImageContainer}>
        <Image source={data.image} style={styles.image} />

        <CircleButton imgURL={assets.heart} right={10} top={10} />
      </View>

      <SubInfo />

      <View style={styles.infoContainer}>
        <NFTTitle
          title={data.name}
          subtitle={data.creator}
          titleSize={SIZES.large}
          subtitleSize={SIZES.small}
        />

        <View style={styles.infoInnerContainer}>
          <EthPrice price={data.price} />
          <RectButton
            minWidth={120}
            fontSize={SIZES.font}
            onPress={goToDetails}
          />
        </View>
      </View>
    </View>
  )
}
