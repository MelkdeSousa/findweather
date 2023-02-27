import { Fragment } from 'react'
import { Image, ImageSourcePropType } from 'react-native'
import { Text } from '../Text'
import S from './styles'

export type WeatherProps = {
  data: {
    id: string
    text: string
    icon: ImageSourcePropType
    value: string
  }[]
}

const Weather = ({ data }: WeatherProps) => {
  return (
    <S.Container>
      {data.map((item, index) => (
        <Fragment key={item.id}>
          <S.WeatherItem>
            <Image source={item.icon} />

            <Text
              css={{
                color: '$white',
                fontSize: '$xxs',
                fontFamily: '$overpassBold',
              }}
            >
              {item.value}
            </Text>

            <Text
              css={{
                color: '$gray400',
                fontSize: '$xxs',
                fontFamily: '$overpassLight',
              }}
            >
              {item.text}
            </Text>
          </S.WeatherItem>

          {index !== data.length - 1 && <S.VerticalDivider />}
        </Fragment>
      ))}
    </S.Container>
  )
}

export default Weather
