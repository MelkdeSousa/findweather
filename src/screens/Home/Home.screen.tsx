import { useWeather } from '@hooks'
import { MainStackNavigationProps } from '@routes/main.stack'
import { ActivityIndicator } from 'react-native'
import EmptyHome from './Empty'
import LocationWeather from './LocationWeather'

export type HomeScreenProps = {
  navigation: MainStackNavigationProps
}

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const { currentWeather, loading, hasLocation } = useWeather()

  return loading ? (
    <ActivityIndicator />
  ) : hasLocation ? (
    <LocationWeather navigation={navigation} currentWeather={currentWeather} />
  ) : (
    <EmptyHome navigation={navigation} />
  )
}

export default HomeScreen
