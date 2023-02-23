import { Button, Divider, Text } from '@components'
import { Image } from 'react-native'
import S from './styles'

import CloudAndThunderImg from '@assets/cloud-and-thunder.png'

const WelcomePage = () => {
  return (
    <S.Container>
      <S.ContainerImage>
        <Image source={CloudAndThunderImg} />
      </S.ContainerImage>

      <Divider top={34} />

      <Text
        css={{
          fontFamily: '$overpassSemiBold',
          fontSize: '$xxl',
          color: '$white',
          textAlign: 'center',
          width: 300,
          alignSelf: 'center',
        }}
      >
        Descubra o Clima na sua Cidade
      </Text>

      <Divider top={24} />

      <Text
        css={{
          fontFamily: '$overpassRegular',
          fontSize: '$md',
          color: '$gray100',
          textAlign: 'center',
        }}
      >
        Com o Find
        <Text
          css={{
            fontFamily: '$overpassBold',
            fontSize: '$md',
            color: '$gray100',
          }}
        >
          Weather
        </Text>{' '}
        nunca{'\n'}ficou tão fácil ter a previsão do{'\n'}tempo na palma da sua
        mão
      </Text>

      <Divider top={64} />

      <Button
        css={{
          alignSelf: 'center',
          backgroundColor: '$dark300',
          borderColor: '$gray300',
          borderWidth: 1,
          borderRadius: 18,
          height: 54,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text
          css={{
            fontFamily: '$OverpassRegular',
            fontSize: '$md',
            color: '$white',
            textAlign: 'center',
          }}
        >
          Iniciar
        </Text>
      </Button>

      <Divider bottom={10} />
    </S.Container>
  )
}

export default WelcomePage
