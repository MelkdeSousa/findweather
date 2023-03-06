import { WeatherContext } from '@contexts/weather'
import { useContext } from 'react'

export default () => {
  const context = useContext(WeatherContext)

  if (context === undefined) {
    throw new Error('useWeather must be used within a WeatherProvider')
  }
  return context
}
