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
        <>
          <S.WeatherItem key={item.id}>
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
        </>
      ))}
    </S.Container>
  )
}

export default Weather
