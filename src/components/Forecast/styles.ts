import { styled } from '@styles'

const Container = styled('View', {
  backgroundColor: '$dark300',
  borderRadius: 24,
  padding: '$sm',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: 80,
  borderColor: '$gray300',
  borderWidth: 1,
  elevation: 2,
})

const Icon = styled('Image', {
  width: 36,
  height: 36,
})

export default {
  Container,
  Icon,
}
