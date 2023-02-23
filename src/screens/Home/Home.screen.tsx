import { Divider } from '@components/Divider'
import { Text } from '@components/Text'
import { Image } from 'react-native'
import S from './styles'

import ClimateChangeImg from '@assets/climate-change.png'

const HomeScreen = () => {
  return (
    <S.Container>
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
    </S.Container>
  )
}

export default HomeScreen
