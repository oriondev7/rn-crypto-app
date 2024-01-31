import { View, Text, Image, TextInput, SafeAreaView } from 'react-native'
import { assets } from '../../constants'
import { styles } from './home_header.styles'
import React, { FC } from 'react'
import { HomeHeaderProps } from './home_header.types'

export const HomeHeader: FC<HomeHeaderProps> = ({ onSearch }) => {
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <View style={styles.subContainer}>
        <Image source={assets.logo} style={styles.logoImage} />

        <View style={styles.personContainer}>
          <Image source={assets.person01} style={styles.personImage} />
          <Image source={assets.badge} style={styles.badgeImage} />
        </View>
      </View>

      <View style={styles.userContainer}>
        <Text style={styles.userTitle}>Hello, Carl 👋</Text>

        <Text style={styles.title}>Let's find a masterpiece</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchInnerContainer}>
          <Image source={assets.search} style={styles.searchIcon} />

          <TextInput
            placeholder="Search NFTs"
            style={styles.searchInput}
            placeholderTextColor={'#rgb(220,220,220)'}
            onChangeText={onSearch}
          />
        </View>
      </View>
    </View>
  )
}
