import { CITY_TOKEN, COUNTRY_TOKEN } from '@config/tokens'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { HourForecast } from '@screens/Home/LocationWeather'
import * as weatherApi from '@services/weatherApi'
import formatDateString from '@utils/formatDateString'
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

export type DayForecast = {
  id: string
  date: string
  icon: string
  weather: string
  min: number
  max: number
  humidity: number
  wind: number
  dailyWillItRain: number
}

export type Weather = {
  city: string
  region: string
  country: string
  temperature: number
  description: string
  humidity: number
  wind: number
  dailyWillItRain: number
  hoursForecast: HourForecast[]
  next5DaysForecast: DayForecast[]
}

export type WeatherContextType = {
  currentWeather: Weather
  loading: boolean
  hasLocation: boolean
  hasCurrentWeather: boolean
  getLocationDataFromAsyncStorage: () => Promise<void>
  getCurrentWeather: () => Promise<void>
}

const WeatherContext = createContext<WeatherContextType>(
  {} as WeatherContextType,
)

export type WeatherProviderProps = {
  children: ReactNode
}

const WeatherProvider = ({ children }: WeatherProviderProps) => {
  const [location, setLocation] = useState({
    city: '',
    country: '',
  })
  const [loading, setLoading] = useState(true)

  const [currentWeather, setCurrentWeather] = useState<Weather>({
    city: '',
    region: '',
    country: '',
    temperature: 0,
    description: '',
    humidity: 0,
    wind: 0,
    dailyWillItRain: 0,
    hoursForecast: [],
    next5DaysForecast: [],
  })

  const hasCurrentWeather = Boolean(
    currentWeather.city && currentWeather.description,
  )

  const hasLocation = Boolean(location.city && location.country)

  const getLocationDataFromAsyncStorage = useCallback(async () => {
    setLoading(true)

    const city = await AsyncStorage.getItem(CITY_TOKEN)
    const country = await AsyncStorage.getItem(COUNTRY_TOKEN)

    setLocation({
      city,
      country,
    })

    setLoading(false)
  }, [])

  const getCurrentWeather = useCallback(async () => {
    if (!hasLocation) {
      return
    }

    const { city } = location

    const response = await weatherApi.getForecastRaw(city)

    const [, , ...forecasts] = response.forecast.forecastday

    const next5DaysForecast: DayForecast[] = forecasts.map((forecast) => ({
      id: forecast.date_epoch.toString(),
      date: formatDateString(forecast.date),
      icon: 'https:' + forecast.day.condition.icon,
      weather: forecast.day.condition.text,
      min: Math.floor(forecast.day.mintemp_c),
      max: Math.floor(forecast.day.maxtemp_c),
      humidity: forecast.day.avghumidity,
      wind: forecast.day.maxwind_kph,
      dailyWillItRain: forecast.day.daily_chance_of_rain,
    }))

    const hoursForecast: HourForecast[] = response.forecast.forecastday[0].hour
      .filter((_, index) => index % 2 === 0)
      .map((hour) => ({
        hour: hour.time.split(' ')[1],
        temperature: Math.floor(hour.temp_c),
        description: hour.condition.text,
        icon: 'https:' + hour.condition.icon,
        id: hour.time_epoch,
      }))

    setCurrentWeather({
      city: response.location.name,
      region: response.location.region,
      country: response.location.country,
      temperature: response.current.temp_c,
      description: response.current.condition.text,
      humidity: response.current.humidity,
      wind: response.current.wind_kph,
      dailyWillItRain:
        response.forecast.forecastday[0].day.daily_chance_of_rain,
      hoursForecast,
      next5DaysForecast,
    })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.city])

  useEffect(() => {
    getLocationDataFromAsyncStorage()
  }, [getLocationDataFromAsyncStorage, location.city, location.country])

  const value = useMemo<WeatherContextType>(
    () => ({
      currentWeather,
      loading,
      hasLocation,
      hasCurrentWeather,
      getLocationDataFromAsyncStorage,
      getCurrentWeather,
    }),
    [
      currentWeather,
      getCurrentWeather,
      getLocationDataFromAsyncStorage,
      hasCurrentWeather,
      hasLocation,
      loading,
    ],
  )

  return (
    <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
  )
}

const useWeather = () => {
  const context = useContext(WeatherContext)

  if (context === undefined) {
    throw new Error('useWeather must be used within a WeatherProvider')
  }
  return context
}

export { WeatherContext, WeatherProvider, useWeather }
