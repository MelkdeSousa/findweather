import { Image } from 'react-native'
import S from './styles'

import { MainStackNavigationProps } from '@routes/main.stack'

import ClimateChangeImg from '@assets/climate-change.png'
import { Button, ContainerScreen, Divider, Text } from '@components'

export type EmptyHomeProps = {
  navigation: MainStackNavigationProps
}

const EmptyHome = ({ navigation }: EmptyHomeProps) => {
  const navigateToSearch = () =>
    navigation.navigate('Tab', { screen: 'Search' })

  return (
    <ContainerScreen>
      <Text
        css={{
          fontFamily: '$overpassRegular',
          fontSize: '$xxxl',
          color: '$white',
          textAlign: 'center',
        }}
      >
        Find
        <Text
          css={{
            fontFamily: '$overpassBold',
          }}
        >
          Weather
        </Text>
      </Text>

      <Divider top={24} />

      <S.ContainerImage>
        <Image source={ClimateChangeImg} />
      </S.ContainerImage>

      <Divider top={64} />

      <Button onPress={navigateToSearch}>
        <Text
          css={{
            fontFamily: '$overpassRegular',
            fontSize: '$md',
            color: '$gray100',
            textAlign: 'center',
            textDecorationLine: 'underline',
            textDecorationColor: '$gray100',
          }}
        >
          Selecione aqui um local e encontre o{'\n'}clima em tempo real
        </Text>
      </Button>
    </ContainerScreen>
  )
}

export default EmptyHome
