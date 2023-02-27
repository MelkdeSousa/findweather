import { Text } from '@components/Text'
import { AntDesign as Icon } from '@expo/vector-icons'
import { useTheme } from '@styles'
import { View } from 'react-native'
import { Divider } from '../Divider'
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

      <View>
        <Text
          css={{
            fontFamily: '$overpassRegular',
            fontSize: '$md',
            color: '$white',
            textAlign: 'center',
          }}
        >
          {title}
        </Text>
      </View>

      <Divider bottom={128} />
    </S.Container>
  )
}

export default Header
