import { Text } from '@components/Text'
import { AntDesign as Icon } from '@expo/vector-icons'
import { useTheme } from '@styles'
import { Platform, View } from 'react-native'
import S from './styles'

export type HeaderProps = {
  title: string
  onBack: () => void
}

const Header = ({ title, onBack }: HeaderProps) => {
  const theme = useTheme()

  return (
    <S.Container>
      <S.BackButton onPress={onBack}>
        <Icon name="left" size={20} color={theme.colors.white} />
      </S.BackButton>

      <View
        style={{
          alignItems: Platform.OS === 'android' ? 'center' : 'stretch',
          flexDirection: 'row',
          marginHorizontal: '30%',
        }}
      >
        <Text
          css={{
            fontFamily: '$overpassRegular',
            fontSize: '$md',
            color: '$white',
          }}
        >
          {title}
        </Text>
      </View>
    </S.Container>
  )
}

export default Header
