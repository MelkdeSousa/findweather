import { NavigationProp, NavigatorScreenParams } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeScreen, Next5DaysScreen } from '@screens'

export type ForecastStackParamList = {
  Home: undefined
  Next5Days: undefined
}

export type ForecastStackNavigationProps =
  NavigationProp<ForecastStackParamList>

export type ForecastStackScreenParams =
  NavigatorScreenParams<ForecastStackParamList>

const Stack = createNativeStackNavigator<ForecastStackParamList>()

const ForecastStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Next5Days" component={Next5DaysScreen} />
    </Stack.Navigator>
  )
}

export default ForecastStack
