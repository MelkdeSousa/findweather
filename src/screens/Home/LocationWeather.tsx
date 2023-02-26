import { Button, Divider, ForecastList, Text, Weather } from '@components'
import { AntDesign as Icon } from '@expo/vector-icons'
import { useTheme } from '@styles'
import S from './styles'

import DropMiniatureImg from '@assets/drop-miniature.png'
import RainingCloudMiniatureImg from '@assets/raining-cloud-miniature.png'
import WindMiniatureImg from '@assets/wind-miniature.png'
import { MainStackNavigationProps } from '@routes/main.stack'
import { forecastConditionsIcons } from '@utils/forecastIcon'
import formatDate from '@utils/formatDate'
import { Image, View } from 'react-native'

export type HourForecast = {
  id: string
  hour: string
  icon: string
  temperature: number
}

export type LocationWeatherProps = {
  navigation: MainStackNavigationProps
  currentWeather: Weather
  hoursForecast: HourForecast[]
}

const LocationWeather = ({
  currentWeather,
  hoursForecast,
}: LocationWeatherProps) => {
  const { fontSizes, colors } = useTheme()

  return (
    <>
      <S.Header>
        <Text
          css={{
            color: '$white',
            fontSize: '$sm',
            fontFamily: '$overpassRegular',
          }}
        >
          <Icon name="enviromento" size={fontSizes.sm} color={colors.white} />
          {currentWeather.city}, {currentWeather.region},{' '}
          {currentWeather.country}
        </Text>
        <Text
          css={{
            color: '$gray400',
            fontSize: '$xxs',
            fontFamily: '$overpassRegular',
          }}
        >
          {formatDate()}
        </Text>
      </S.Header>

      <Divider bottom={24} />

      <S.Body>
        <S.Image>
          <Image
            style={{
              width: 170,
              height: '100%',
            }}
            source={forecastConditionsIcons(currentWeather.description)}
          />
        </S.Image>

        <Text
          css={{
            color: '$white',
            fontSize: '$giant',
            fontFamily: '$overpassBold',
          }}
        >
          {Math.round(currentWeather.temperature)}°
        </Text>
        <Text
          css={{
            color: '$gray100',
            fontSize: '$lg',
            fontFamily: '$overpassRegular',
          }}
        >
          {currentWeather.description}
        </Text>

        <Divider bottom={24} />

        <Weather
          data={[
            {
              id: '1',
              text: 'Umidade',
              icon: DropMiniatureImg,
              value: currentWeather.humidity + '%',
            },
            {
              id: '2',
              text: 'Veloc. Vento',
              icon: WindMiniatureImg,
              value: `${Math.floor(currentWeather.wind)}km/h`,
            },
            {
              id: '3',
              text: 'Chuva',
              icon: RainingCloudMiniatureImg,
              value: `${Math.floor(currentWeather.dailyWillItRain)}%`,
            },
          ]}
        />

        <Divider bottom={24} />

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

        <Divider bottom={24} />

        <ForecastList data={hoursForecast} />
      </S.Body>
    </>
  )
}

export default LocationWeather
