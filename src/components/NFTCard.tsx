import { View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLORS, SIZES, SHADOWS, assets } from '../constants';
import { CircleButton } from './CircleButton';
import { RectButton } from './RectButton';
import { SubInfo, EthPrice, NFTTitle } from './SubInfo';

export const NFTCard = ({ data }) => {
  const navigation = useNavigation();
  const goToDetails = () => navigation.navigate('Details', { data })

  return (
    <View style={{
      backgroundColor: COLORS.white,
      borderRadius: SIZES.font,
      marginBottom: SIZES.extraLarge,
      margin: SIZES.base,
      ...SHADOWS.dark
    }}>
      <View style={{ width: '100%', height: 250}}>
        <Image 
          source={data.image}
          resizeMode='cover'
          style={{
            width: '100%',
            height: '100%',
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font,
          }}
        />
        
        <CircleButton imgURL={assets.heart} right={10} top={10} />
      </View>

      <SubInfo />

      <View 
        style={{
          width: '100%',
          padding: SIZES.font
        }}
        >
          <NFTTitle 
            title={data.name}
            subtitle={data.creator}
            titleSize={SIZES.large}
            subtitleSize={SIZES.small}
          />

          <View style={{
            marginTop: SIZES.font,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
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
