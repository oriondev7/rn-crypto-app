import { View, Text, Image } from 'react-native'
import { EthPrice } from '../sub_info/SubInfo'
import { styles } from './details_bid.styles'
import React, { FC } from 'react'
import { DetailsBidProps } from './details_bid.types'

export const DetailsBid: FC<DetailsBidProps> = ({ bid }) => {
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Image source={bid.image} style={styles.image} />

        <View style={styles.infoSubContainer}>
          <Text style={styles.seller}>Bid placed by {bid.name}</Text>
          <Text style={styles.date}>{bid.date}</Text>
        </View>
      </View>

      <EthPrice price={bid.price} />
    </View>
  )
}
