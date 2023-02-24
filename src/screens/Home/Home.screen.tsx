import { MainStackNavigationProps } from '@routes/main.stack'
import LocationWeather from './LocationWeather'

export type HomeScreenProps = {
  navigation: MainStackNavigationProps
}

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  return <LocationWeather />
}

export default HomeScreen
