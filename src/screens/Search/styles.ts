import { Button } from '@components/Button'
import { styled } from '@styles'
import { Platform } from 'react-native'

const Container = styled('SafeAreaView', {
  backgroundColor: '$dark',
  flex: 1,
  justifyContent: 'center',
  paddingHorizontal: '$md',
})

const SearchBarContainer = styled('KeyboardAvoidingView', {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  width: '100%',
}).attrs((props) => ({
  behavior: Platform.OS === 'ios' ? 'padding' : 'height',
}))

const SearchContainer = styled('View', {
  flex: 1,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  backgroundColor: '$dark400',
  paddingHorizontal: '$md',
  paddingVertical: '$sm',
  borderRadius: 12,
})

const SearchInput = styled('TextInput', {
  flex: 1,
  color: '$white',
  fontSize: '$xs',
  marginLeft: '$md',
  fontFamily: '$overpassRegular',
  width: '100%',
}).attrs((props) => ({
  placeholderTextColor: props.theme.colors.gray300,
  cursorColor: props.theme.colors.white,
}))

const SearchButton = styled(Button, {
  height: '100%',
  width: '15%',
  marginLeft: '$md',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  backgroundColor: '$dark400',
  padding: '$sm',
  borderRadius: 12,
})

const ErrorContainer = styled('View', {
  flex: 1,
})

const ResultsContainer = styled('TouchableOpacity', {
  flex: 1,
  flexWrap: 'wrap',
  flexDirection: 'row',
})

const ForecastContainer = styled('View', {
  backgroundColor: '$dark400',
  padding: '$md',
  borderRadius: 12,
  borderWidth: 1,
  borderColor: '$gray600',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'flex-start',
  marginRight: '$md',
  marginBottom: '$md',
  flex: 1,
  height: '25%',
})

const ForecastHeader = styled('View', {
  flexDirection: 'row',
  width: '100%',
  flex: 1,
  alignItems: 'center',
  justifyContent: 'space-between',
})

const ForecastDescription = styled('View', {
  alignItems: 'flex-start',
})

export default {
  Container,
  SearchContainer,
  SearchInput,
  SearchBarContainer,
  SearchButton,
  ErrorContainer,
  ResultsContainer,
  ForecastContainer,
  ForecastHeader,
  ForecastDescription,
}
