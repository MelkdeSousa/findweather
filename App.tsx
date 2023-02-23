import {
  Overpass_300Light as overpassLight,
  Overpass_400Regular as overpassRegular,
  Overpass_600SemiBold as overpassSemiBold,
  Overpass_700Bold as overpassBold,
  useFonts
} from '@expo-google-fonts/overpass'
import { WelcomePage } from '@screens'
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
    <SafeAreaProvider>
      <ScreenProvider baseFontSize={16}>
        <WelcomePage />
      </ScreenProvider>
    </SafeAreaProvider>
  )
}
