import { View, Text, Image } from 'react-native'
import { SIZES, assets } from '../../constants'
import { styles } from './sub_info.styles'
import React, { FC } from 'react'
import { EthPriceProps, ImageCmpProps, NFTTitleProps } from './sub_info.types'

export const NFTTitle: FC<NFTTitleProps> = ({
  title,
  subtitle,
  titleSize,
  subtitleSize,
}) => {
  return (
    <View>
      <Text
        style={[
          styles.nftTitleTitle,
          {
            fontSize: titleSize,
          },
        ]}
      >
        {title}
      </Text>

      <Text
        style={[
          styles.nftTitleSubtitle,
          {
            fontSize: subtitleSize,
          },
        ]}
      >
        {subtitle}
      </Text>
    </View>
  )
}

export const EthPrice: FC<EthPriceProps> = ({ price }) => {
  return (
    <View style={styles.ethPriceContainer}>
      <Text style={styles.ethPriceText}>{price}</Text>
      <Image source={assets.eth} style={styles.ethPriceImage} />
    </View>
  )
}

export const ImageCmp: FC<ImageCmpProps> = ({ imgURL, index }) => {
  return (
    <Image
      source={imgURL}
      style={[
        styles.imageCmp,
        {
          marginLeft: index === 0 ? 0 : -SIZES.font,
        },
      ]}
    />
  )
}

export const People = () => {
  const people = [assets.person02, assets.person03, assets.person04]

  return (
    <View style={styles.peopleContainer}>
      {people.map((imgURL, index) => (
        <ImageCmp imgURL={imgURL} index={index} key={`People-${index}`} />
      ))}
    </View>
  )
}

export const EndDate = () => {
  return (
    <View style={styles.endDateContainer}>
      <Text style={styles.endDateTitle}>Ending in</Text>
      <Text style={styles.endDateValue}>12h 30m</Text>
    </View>
  )
}

export const SubInfo = () => {
  return (
    <View style={styles.subInfoContainer}>
      <People />
      <EndDate />
    </View>
  )
}
