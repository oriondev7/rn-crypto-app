import { View, Text } from 'react-native'
import { useState } from 'react'
import { EthPrice, NFTTitle } from './SubInfo'
import { COLORS, SIZES, FONTS } from '../constants'

export const DetailsDesc = ({ data }) => {
  const slicedDesc = data.description.slice(0, 100)
  const [desc, setDesc] = useState(slicedDesc);
  const [readMore, setReadMore] = useState(false);
  
  const changeDecsSize = () => {
    if (!readMore) {
      setDesc(data.description);
      setReadMore(true);
    } else {
      setDesc(slicedDesc);
      setReadMore(false);
    }
  }

  return (
    <>
      <View style={{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <NFTTitle
          title={data.name}
          subtitle={data.creator}
          titleSize={SIZES.extraLarge}
          subtitleSize={SIZES.font}
        />

        <EthPrice price={data.price} />
      </View>

      <View style={{ marginVertical: SIZES.extraLarge * 1.5 }}>
        <Text style={{
          fontSize: SIZES.font,
          fontFamily: FONTS.semiBold,
          color: COLORS.primary
        }}>
          Description
        </Text>

        <View style={{ marginTop: SIZES.base }}>
        <Text style={{
          fontSize: SIZES.small,
          fontFamily: FONTS.regular,
          color: COLORS.secondary,
          lineHeight: SIZES.large
        }}>
          {desc}
          {!readMore && '...'} 
          <Text 
            style={{
              fontSize: SIZES.small,
              fontFamily: FONTS.semiBold,
              color: COLORS.primary
            }}
            onPress={changeDecsSize}
          >
            {readMore ? ' Show Less' : ' Read More'}
          </Text>
        </Text>
        </View>
      </View>
    </>
  )
}
