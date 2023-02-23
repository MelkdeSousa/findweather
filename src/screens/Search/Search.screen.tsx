import { Text } from '@components/Text'
import S from './styles'

const SearchScreen = () => {
  return (
    <S.Container>
      <Text
        css={{
          fontFamily: '$overpassRegular',
          fontSize: '$xxxl',
          color: '$white',
          textAlign: 'center',
        }}
      >
        Search Screen
      </Text>
    </S.Container>
  )
}

export default SearchScreen
