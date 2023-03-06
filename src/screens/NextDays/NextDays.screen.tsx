import { ContainerScreen, Text, Weather } from '@components'
import { MainStackNavigationProps } from '@routes/main.stack'

import DropMiniatureImg from '@assets/drop-miniature.png'
import RainingCloudMiniatureImg from '@assets/raining-cloud-miniature.png'
import WindMiniatureImg from '@assets/wind-miniature.png'

import { useWeather } from '@hooks'
import { forecastConditionsIcons } from '@utils/forecastIcon'
import S from './styles'

export type NextDaysScreenProps = {
  navigation: MainStackNavigationProps
}

const NextDaysScreen = ({ navigation }: NextDaysScreenProps) => {
  const { currentWeather } = useWeather()

  const [tomorrow] = currentWeather.nextDaysForecast

  const navigateToHome = () =>
    navigation.navigate('Tab', {
      screen: 'Forecast',
      params: {
        screen: 'Home',
      },
    })

  return (
    <ContainerScreen
      css={{
        justifyContent: 'flex-start',
        paddingHorizontal: 0,
      }}
    >
      <S.TomorrowForecastBanner>
        <S.BannerForecast>
          <S.Header
            title={`Próximos ${currentWeather.nextDays} dias`}
            onBack={navigateToHome}
          />
          <S.DetailContainer>
            <S.Image source={forecastConditionsIcons(tomorrow.weather)} />
            <S.Description>
              <Text
                css={{
                  fontSize: '$sm',
                  fontFamily: '$overpassRegular',
                  color: '$gray200',
                }}
              >
                Amanhã
              </Text>
              <S.TemperatureContainer>
                <Text
                  css={{
                    fontSize: '$giant',
                    fontFamily: '$overpassBold',
                    color: '$white',
                    marginVertical: '-10%',
                  }}
                >
                  {Math.floor(tomorrow.max)}°
                </Text>
                <Text
                  css={{
                    fontSize: '$lg',
                    fontFamily: '$overpassSemiBold',
                    color: '$gray200',
                  }}
                >
                  /
                </Text>
                <Text
                  css={{
                    fontSize: '$lg',
                    fontFamily: '$overpassSemiBold',
                    color: '$gray200',
                  }}
                >
                  {Math.floor(tomorrow.min)}°
                </Text>
              </S.TemperatureContainer>
              <Text
                css={{
                  fontSize: '$sm',
                  fontFamily: '$overpassRegular',
                  color: '$gray200',
                }}
              >
                {tomorrow.weather}
              </Text>
            </S.Description>
          </S.DetailContainer>

          <Weather
            data={[
              {
                id: '1',
                text: 'Umidade',
                icon: DropMiniatureImg,
                value: tomorrow.humidity + '%',
              },
              {
                id: '2',
                text: 'Veloc. Vento',
                icon: WindMiniatureImg,
                value: `${Math.floor(tomorrow.wind)}km/h`,
              },
              {
                id: '3',
                text: 'Chuva',
                icon: RainingCloudMiniatureImg,
                value: `${Math.floor(tomorrow.dailyWillItRain)}%`,
              },
            ]}
          />
        </S.BannerForecast>
      </S.TomorrowForecastBanner>

      <S.NextDaysForecast
        keyExtractor={(item) => item.id}
        data={currentWeather.nextDaysForecast}
        renderItem={({ item }) => (
          <S.ForecastItem>
            <S.Section>
              <S.WhiteText>{item.date.weekday}, </S.WhiteText>
              <S.GrayText>{item.date.day} </S.GrayText>
              <S.GrayText>{item.date.month}</S.GrayText>
            </S.Section>

            <S.Section
              css={{
                width: '55%',
              }}
            >
              <S.Icon source={{ uri: item.icon }} />
              <S.GrayText>{item.weather}</S.GrayText>
            </S.Section>

            <S.Section>
              <S.WhiteText>{item.max}°</S.WhiteText>
              <S.GrayText>/</S.GrayText>
              <S.GrayText>{item.min}°</S.GrayText>
            </S.Section>
          </S.ForecastItem>
        )}
      />
    </ContainerScreen>
  )
}

export default NextDaysScreen
