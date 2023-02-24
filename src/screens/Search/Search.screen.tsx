import { Header } from '@components'
import { MainTabNavigationProps } from '@routes/main.tab'
import S from './styles'

export type SearchScreenProps = {
  navigation: MainTabNavigationProps
}

const SearchScreen = ({ navigation }: SearchScreenProps) => {
  const navigateToHome = () => navigation.navigate('Home')

  return (
    <S.Container>
      <Header title="Buscar" onBack={navigateToHome} />
    </S.Container>
  )
}

export default SearchScreen
