import { AntDesign as Icon } from '@expo/vector-icons'

import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs'
import { NavigatorScreenParams } from '@react-navigation/native'
import { SearchScreen } from '@screens'
import { useTheme } from '@styles'
import ForecastStack, { ForecastStackScreenParams } from './forecast.stack'

export type MainTabParamList = {
  Forecast: ForecastStackScreenParams
  Search: undefined
}

export type MainTabNavigationProps = BottomTabNavigationProp<MainTabParamList>

export type MainTabScreenParams = NavigatorScreenParams<MainTabParamList>

const Tab = createBottomTabNavigator<MainTabParamList>()

const MainTab = () => {
  const theme = useTheme()

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor: theme.colors.gray400,
        tabBarActiveTintColor: theme.colors.white,
        tabBarStyle: {
          backgroundColor: theme.colors.dark,
          borderTopColor: theme.colors.dark,
        },
      }}
    >
      <Tab.Screen
        name="Forecast"
        component={ForecastStack}
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="search1" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default MainTab
