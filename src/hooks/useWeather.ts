import { CITY_TOKEN, COUNTRY_TOKEN } from '@config/tokens'
import AsyncStorage from '@react-native-async-storage/async-storage'
import * as openWeatherApi from '@services/openWeatherApi'
import * as weatherApi from '@services/weatherApi'
import { useCallback, useEffect, useReducer, useState } from 'react'

type Action = {
  type: 'SET_LOCATION'
  payload: { city?: string; country?: string }
}

export type CurrentWeather = {
  city: string
  region: string
  country: string
  temperature: number
  description: string
  humidity: number
  wind: number
  dailyWillItRain: number
}

const initialState = {
  city: '',
  country: '',
}

const reducer = (state: typeof initialState, action: Action) => {
  switch (action.type) {
    case 'SET_LOCATION':
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}

const useWeather = () => {
  const [location, dispatch] = useReducer(reducer, initialState)
  const [loading, setLoading] = useState(false)

  const hasLocation = Boolean(location.city && location.country)

  const [currentWeather, setCurrentWeather] = useState<CurrentWeather>({
    city: '',
    region: '',
    country: '',
    temperature: 0,
    description: '',
    humidity: 0,
    wind: 0,
    dailyWillItRain: 0,
  })

  const getLocationDataFromAsyncStorage = useCallback(async () => {
    setLoading(true)

    const city = await AsyncStorage.getItem(CITY_TOKEN)
    const country = await AsyncStorage.getItem(COUNTRY_TOKEN)

    dispatch({
      type: 'SET_LOCATION',
      payload: { city, country },
    })

    setLoading(false)
  }, [])

  const getForecast = useCallback(async () => {
    setLoading(true)

    const { city, country } = location
    const response = await openWeatherApi.getForecast(city, country)

    setLoading(false)

    return response
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.city, location.country])

  const getCurrentWeather = useCallback(async () => {
    setLoading(true)

    const { city } = location

    const response = await weatherApi.getForecastRaw(city)

    setCurrentWeather({
      city: response.location.name,
      region: response.location.region,
      country: response.location.country,
      temperature: response.current.temp_c,
      description: response.current.condition.text,
      humidity: response.current.humidity,
      wind: response.current.wind_kph,
      dailyWillItRain: response.forecast.forecastday[0].day.daily_will_it_rain,
    })

    setLoading(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.city])

  useEffect(() => {
    Promise.all([
      getLocationDataFromAsyncStorage(),
      getCurrentWeather(),
      getForecast(),
    ])
  }, [getCurrentWeather, getForecast, getLocationDataFromAsyncStorage])

  return {
    currentWeather,
    loading,
    hasLocation,
  }
}

export default useWeather
