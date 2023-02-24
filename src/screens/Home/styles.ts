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

const Header = styled('View', {
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'space-between',
})

const Body = styled('View', {
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'space-between',
})

export default {
  Container,
  ContainerImage,
  Header,
  Body,
}
