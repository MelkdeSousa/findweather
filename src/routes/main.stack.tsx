import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '@screens/Home'
import WelcomeScreen from '@screens/Welcome'

export type MainStackRoutes = {
  Home: undefined
  Welcome: undefined
}

const Stack = createNativeStackNavigator<MainStackRoutes>()

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
