import { HourForecast } from '@screens/Home/LocationWeather'
import React from 'react'
import { Text } from '../Text'
import S from './styles'

export type ForecastCardProps = {
  item: HourForecast
}

const ForecastCard = ({ item }: ForecastCardProps) => (
  <S.Container key={item.id}>
    <Text
      css={{
        color: '$white',
        fontSize: '$xxs',
        fontFamily: '$overpassRegular',
      }}
    >
      {Math.floor(item.temperature)}°
    </Text>
    <S.Icon source={{ uri: item.icon }} />
    <Text
      css={{
        color: '$gray100',
        fontSize: '$xxs',
        fontFamily: '$overpassRegular',
      }}
    >
      {item.hour}
    </Text>
  </S.Container>
)

export default ForecastCard
