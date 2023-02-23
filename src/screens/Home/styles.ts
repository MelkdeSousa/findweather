import { styled } from '@styles'

const Container = styled('SafeAreaView', {
  backgroundColor: '$dark',
  flex: 1,
  justifyContent: 'center',
  paddingHorizontal: '$md',
})

const ContainerImage = styled('View', {
  alignItems: 'center',
})

export default {
  Container,
  ContainerImage,
}
