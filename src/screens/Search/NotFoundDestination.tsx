import NotFoundDestinationImg from '@assets/not-found-destination.png'
import { Text } from '@components/Text'
import React from 'react'
import { Image } from 'react-native'
import S from './styles'

const NotFoundDestination = () => {
  return (
    <S.ErrorContainer>
      <Image source={NotFoundDestinationImg} />

      <Text
        css={{
          fontFamily: '$overpassBold',
          fontSize: '$xxs',
          color: '$gray100',
          textAlign: 'center',
        }}
      >
        OPS!
        {'\n'}
        Não foi possível encontrar o local {'\n'} desejado!
      </Text>
    </S.ErrorContainer>
  )
}

export default NotFoundDestination
