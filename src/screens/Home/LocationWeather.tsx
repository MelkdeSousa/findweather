import {
  Button,
  ContainerScreen,
  Divider,
  ForecastList,
  Text,
  Weather,
} from '@components'
import { AntDesign as Icon } from '@expo/vector-icons'
import { useTheme } from '@styles'
import S from './styles'

import DropMiniatureImg from '@assets/drop-miniature.png'
import RainingCloudMiniatureImg from '@assets/raining-cloud-miniature.png'
import WindMiniatureImg from '@assets/wind-miniature.png'
import { View } from 'react-native'

const weatherData = [
  {
    id: '1',
    text: 'Umidade',
    icon: DropMiniatureImg,
    value: '24%',
  },
  {
    id: '2',
    text: 'Veloc. Vento',
    icon: WindMiniatureImg,
    value: '10 km/h',
  },
  {
    id: '3',
    text: 'Chuva',
    icon: RainingCloudMiniatureImg,
    value: '76%',
  },
]

const forecastData = [
  {
    id: '1',
    hour: '12:00',
    icon: 'https://cdn.weatherapi.com/weather/64x64/day/176.png',
    temperature: '23°',
  },
  {
    id: '2',
    hour: '12:00',
    icon: 'https://cdn.weatherapi.com/weather/64x64/day/176.png',
    temperature: '23°',
  },
  {
    id: '3',
    hour: '12:00',
    icon: 'https://cdn.weatherapi.com/weather/64x64/day/176.png',
    temperature: '23°',
  },
  {
    id: '4',
    hour: '12:00',
    icon: 'https://cdn.weatherapi.com/weather/64x64/day/176.png',
    temperature: '23°',
  },
]

const LocationWeather = () => {
  const { fontSizes, colors } = useTheme()

  return (
    <ContainerScreen>
      <S.Header>
        <Text
          css={{
            color: '$white',
            fontSize: '$sm',
            fontFamily: '$overpassRegular',
          }}
        >
          <Icon name="enviromento" size={fontSizes.sm} color={colors.white} />A
          Corunã, Espanha
        </Text>
        <Text
          css={{
            color: '$gray400',
            fontSize: '$xxs',
            fontFamily: '$overpassRegular',
          }}
        >
          Domingo, 12 de Abril de 2020
        </Text>
      </S.Header>

      <Divider bottom={64} />

      <S.Body>
        <Text
          css={{
            color: '$white',
            fontSize: '$giant',
            fontFamily: '$overpassBold',
          }}
        >
          23°
        </Text>
        <Text
          css={{
            color: '$gray100',
            fontSize: '$lg',
            fontFamily: '$overpassRegular',
          }}
        >
          Chuva Moderada
        </Text>

        <Divider bottom={64} />

        <Weather data={weatherData} />

        <Divider bottom={64} />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <Text
            css={{
              color: '$white',
              fontSize: '$md',
              fontFamily: '$overpassRegular',
            }}
          >
            Hoje
          </Text>

          <Button>
            <Text
              css={{
                color: '$gray100',
                fontSize: '$md',
                fontFamily: '$overpassRegular',
              }}
            >
              Próximos 5 dias <Icon name="right" />
            </Text>
          </Button>
        </View>

        <Divider bottom={64} />

        <ForecastList data={forecastData} />
      </S.Body>
    </ContainerScreen>
  )
}

export default LocationWeather
