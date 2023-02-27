import { styled } from '@styles'

const Container = styled('View', {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
})

const BackButton = styled('TouchableOpacity', {
  padding: 12,
  borderColor: '$gray600',
  borderWidth: 2,
  borderRadius: 50,
  width: 50,
  height: 50,
  alignItems: 'center',
  justifyContent: 'center',
})

export default {
  Container,
  BackButton,
}
