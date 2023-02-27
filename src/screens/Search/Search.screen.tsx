import { ContainerScreen, Divider, Header } from '@components'
import { MainTabNavigationProps } from '@routes/main.tab'
import S from './styles'

import { AntDesign as Icon } from '@expo/vector-icons'
import { useForecast } from '@hooks'
import { useTheme } from '@styles'
import { useState } from 'react'
import { ActivityIndicator } from 'react-native'
import Forecast from './Forecast'
import NotFoundDestination from './NotFoundDestination'

export type SearchScreenProps = {
  navigation: MainTabNavigationProps
}

const SearchScreen = ({ navigation }: SearchScreenProps) => {
  const theme = useTheme()
  const { forecast, getForecast, loading, notFound, saveLocal } = useForecast()

  const [city, setCity] = useState('')

  const navigateToHome = () =>
    navigation.navigate('Forecast', { screen: 'Home' })

  const onSaved = async () => {
    await saveLocal()
    navigation.navigate('Forecast', { screen: 'Home' })
  }

  return (
    <ContainerScreen
      css={{
        justifyContent: 'flex-start',
      }}
    >
      <Header title="Busca" onBack={navigateToHome} />

      <S.SearchBarContainer>
        <S.SearchContainer>
          <Icon
            name="search1"
            size={theme.fontSizes.sm}
            color={theme.colors.gray100}
          />

          <S.SearchInput
            placeholder="Digite o nome de uma cidade"
            autoCorrect={false}
            autoCapitalize="none"
            value={city}
            onChangeText={setCity}
            onSubmitEditing={({ nativeEvent }) => getForecast(nativeEvent.text)}
          />
        </S.SearchContainer>

        <S.SearchButton onPress={async () => await getForecast(city)}>
          <Icon
            name="enviromento"
            size={theme.fontSizes.sm}
            color={theme.colors.white}
          />
        </S.SearchButton>
      </S.SearchBarContainer>

      <Divider bottom={32} />

      {loading ? (
        <ActivityIndicator size={theme.space.xl} color={theme.colors.white} />
      ) : notFound ? (
        <NotFoundDestination />
      ) : forecast ? (
        <Forecast forecast={forecast} onPress={onSaved} />
      ) : null}
    </ContainerScreen>
  )
}

export default SearchScreen
