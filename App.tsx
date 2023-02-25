import {
  Overpass_300Light as overpassLight,
  Overpass_400Regular as overpassRegular,
  Overpass_600SemiBold as overpassSemiBold,
  Overpass_700Bold as overpassBold,
  useFonts,
} from '@expo-google-fonts/overpass'
import { NavigationContainer } from '@react-navigation/native'
import { MainStack } from '@routes'
import { StatusBar } from 'expo-status-bar'
import 'intl'
import 'intl/locale-data/jsonp/pt-BR'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ScreenProvider } from 'responsive-native'

export default function App() {
  const [fontsLoaded] = useFonts({
    overpassLight,
    overpassRegular,
    overpassSemiBold,
    overpassBold,
  })

  if (!fontsLoaded) {
    return
  }

  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <StatusBar translucent style="inverted" />
        <ScreenProvider baseFontSize={16}>
          <MainStack />
        </ScreenProvider>
      </SafeAreaProvider>
    </NavigationContainer>
  )
}
