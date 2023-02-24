import { styled } from '@styles'

const Container = styled('View', {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-around',
  padding: '$md',
  borderRadius: 24,
  width: '100%',
  borderColor: '$gray300',
  borderWidth: 1,
})

const VerticalDivider = styled('View', {
  width: 1,
  height: '100%',
  backgroundColor: '$gray300',
})

const WeatherItem = styled('View', {
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
})

export default {
  Container,
  VerticalDivider,
  WeatherItem,
}
