import { WeatherProvider } from '@contexts/weather'
import { NavigationProp } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { WelcomeScreen } from '@screens'
import MainTab, { MainTabScreenParams } from './main.tab'

export type MainStackParamList = {
  Tab: MainTabScreenParams
  Welcome: undefined
}

export type MainStackNavigationProps = NavigationProp<MainStackParamList>

const Stack = createNativeStackNavigator<MainStackParamList>()

const MainStack = () => {
  return (
    <WeatherProvider>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Tab" component={MainTab} />
      </Stack.Navigator>
    </WeatherProvider>
  )
}

export default MainStack
