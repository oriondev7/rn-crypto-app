import React, { useState } from 'react'
import { View, FlatList } from 'react-native'
import { COLORS, NFTData } from '../../constants'
import { FocusedStatusBar, HomeHeader, NFTCard } from '../../components'
import { styles } from './home.styles'

export const Home = () => {
  const [nftData, setNFTData] = useState(NFTData)

  const onSearch = (text: string) => {
    if (!text.length) {
      return setNFTData(NFTData)
    }

    const filteredData = NFTData.filter((item) =>
      item.name.toLowerCase().includes(text.toLowerCase())
    )

    if (filteredData.length) {
      setNFTData(filteredData)
    } else {
      setNFTData(NFTData)
    }
  }

  return (
    <View style={styles.container}>
      <FocusedStatusBar background={COLORS.primary} />

      <View style={styles.container}>
        <View style={styles.dataContainer}>
          <FlatList
            contentInsetAdjustmentBehavior="automatic"
            data={nftData}
            renderItem={({ item }) => <NFTCard data={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader onSearch={onSearch} />}
          />
        </View>

        <View style={styles.backgroundContainer}>
          <View style={styles.backgroundPrimary} />
          <View style={styles.backgroundWhite} />
        </View>
      </View>
    </View>
  )
}
