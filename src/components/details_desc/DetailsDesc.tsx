import { View, Text } from 'react-native'
import React, { FC, useState } from 'react'
import { EthPrice, NFTTitle } from '../sub_info/SubInfo'
import { SIZES } from '../../constants'
import { styles } from './details_desc.styles'
import { DetailsDescProps } from './details_desc.types'

export const DetailsDesc: FC<DetailsDescProps> = ({ data }) => {
  const slicedDesc = data.description.slice(0, 100)
  const [desc, setDesc] = useState(slicedDesc)
  const [readMore, setReadMore] = useState(false)

  const changeDecsSize = () => {
    if (!readMore) {
      setDesc(data.description)
      setReadMore(true)
    } else {
      setDesc(slicedDesc)
      setReadMore(false)
    }
  }

  return (
    <View>
      <View style={styles.container}>
        <NFTTitle
          title={data.name}
          subtitle={data.creator}
          titleSize={SIZES.extraLarge}
          subtitleSize={SIZES.font}
        />

        <EthPrice price={data.price} />
      </View>

      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionTitle}>Description</Text>

        <View style={{ marginTop: SIZES.base }}>
          <Text style={styles.descriptionText}>
            {desc}
            {!readMore && '...'}
            <Text
              style={styles.textLengthButton}
              onPress={changeDecsSize}
              suppressHighlighting
            >
              {readMore ? ' Show Less' : ' Read More'}
            </Text>
          </Text>
        </View>
      </View>
    </View>
  )
}
