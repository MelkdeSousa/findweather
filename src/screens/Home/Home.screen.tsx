import { ContainerScreen } from '@components'
import { useWeather } from '@hooks'
import { MainStackNavigationProps } from '@routes/main.stack'
import { useEffect } from 'react'
import { ActivityIndicator } from 'react-native'
import EmptyHome from './Empty'
import LocationWeather from './LocationWeather'

export type HomeScreenProps = {
  navigation: MainStackNavigationProps
}

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const {
    currentWeather,
    loading,
    hasLocation,
    hasCurrentWeather,
    getCurrentWeather,
  } = useWeather()

  useEffect(() => {
    getCurrentWeather()
  }, [getCurrentWeather])

  return (
    <ContainerScreen>
      {loading ? (
        <ActivityIndicator />
      ) : hasLocation && hasCurrentWeather ? (
        <LocationWeather
          navigation={navigation}
          currentWeather={currentWeather}
          hoursForecast={currentWeather.hoursForecast}
        />
      ) : (
        <EmptyHome navigation={navigation} />
      )}
    </ContainerScreen>
  )
}

export default HomeScreen
