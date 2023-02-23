import { NavigationProp } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '@screens/Home'
import WelcomeScreen from '@screens/Welcome'

export type MainStackParamList = {
  Home: undefined
  Welcome: undefined
}

export type MainStackNavigationProps = NavigationProp<MainStackParamList>

const Stack = createNativeStackNavigator<MainStackParamList>()

const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  )
}

export default MainStack
