import React, { useState } from 'react';
import { View, SafeAreaView, FlatList } from 'react-native';
import { COLORS, NFTData } from '../constants';
import { FocusedStatusBar, HomeHeader, NFTCard } from '../components';

export const Home = () => {
  const [nftData, setNFTData] = useState(NFTData)
  
  const onSearch = (value) => {
    if(!value.length) {
      return setNFTData(NFTData)
    }

    const filteredData = NFTData.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    if(filteredData.length) {
      setNFTData(filteredData)
    } else {
      setNFTData(NFTData)
    }
  }
  
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar background={COLORS.primary} />

      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={nftData}
            renderItem={({ item }) => <NFTCard data={item} />}
            keyExtractor={(item) => item.id }
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader onSearch={onSearch} />}
          />
        </View>

        <View style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          zIndex: -1
        }}>
          <View style={{ height: 300, backgroundColor: COLORS.primary }}/>
          <View style={{ flex: 1, backgroundColor: COLORS.white }}/>
        </View>
      </View>
    </SafeAreaView>
  )
}
