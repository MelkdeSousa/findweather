import { Text } from '@components/Text'
import { Forecast as ForecastType } from '@types/forecast'
import React from 'react'
import { Image } from 'react-native'
import S from './styles'

export type ForecastProps = {
  forecast: ForecastType
}

const Forecast = ({
  forecast: { city, temperature, condition, icon, region, country },
}: ForecastProps) => {
  return (
    <S.ResultsContainer>
      <S.ForecastContainer>
        <S.ForecastHeader>
          <Text
            css={{
              fontSize: '$lg',
              fontFamily: '$overpassBold',
              color: '$white',
            }}
          >
            {Math.floor(temperature)}°
          </Text>
          <Image
            style={{
              width: 64,
              height: 64,
            }}
            source={{
              uri: `https:${icon}`,
            }}
          />
        </S.ForecastHeader>

        <S.ForecastDescription>
          <Text
            css={{
              fontSize: '$xs',
              fontFamily: '$overpassRegular',
              color: '$gray100',
              marginBottom: '$sm',
            }}
          >
            {condition}
          </Text>
          <Text
            css={{
              fontSize: '$xs',
              fontFamily: '$overpassRegular',
              color: '$white',
            }}
          >
            {city}, {region}, {country}
          </Text>
        </S.ForecastDescription>
      </S.ForecastContainer>
    </S.ResultsContainer>
  )
}

export default Forecast
