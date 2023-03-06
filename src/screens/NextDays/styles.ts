import { Header as HeaderComponent } from '@components/Header'
import { Text } from '@components/Text'
import { styled } from '@styles'

const Header = styled(HeaderComponent, {
  paddingHorizontal: '$xl',
})

const TomorrowForecastBanner = styled('View')

const BannerForecast = styled('View', {
  alignItems: 'center',
  width: '100%',
  borderBottomLeftRadius: 64,
  borderBottomRightRadius: 64,
  backgroundColor: '$dark200',
  paddingHorizontal: '$lg',
  paddingBottom: '$lg',
})

const DetailContainer = styled('View', {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-around',
  width: '100%',
  marginBottom: '$md',
  marginTop: '-$lg',
})

const Description = styled('View', {
  width: '60%',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
})

const TemperatureContainer = styled('View', {
  flexDirection: 'row',
  alignItems: 'center',
  width: '85%',
  justifyContent: 'space-between',
})

const Image = styled('Image', {
  width: 120,
  height: 120,
})

const NextDaysForecast = styled('FlatList', {
  width: '100%',
  paddingHorizontal: '$lg',
  marginTop: '$lg',
})

const ForecastItem = styled('View', {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
})

const Section = styled('View', {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start',
})

const GrayText = styled(Text, {
  color: '$gray400',
  fontFamily: '$overpassRegular',
  fontSize: '$xs',
})

const WhiteText = styled(GrayText, {
  color: '$white',
})

const Icon = styled('Image', {
  width: 40,
  height: 40,
})

const Weather = styled(Text)

export default {
  BannerForecast,
  DetailContainer,
  Description,
  TemperatureContainer,
  Image,
  Header,
  TomorrowForecastBanner,
  NextDaysForecast,
  ForecastItem,
  GrayText,
  Icon,
  Weather,
  WhiteText,
  Section,
}
