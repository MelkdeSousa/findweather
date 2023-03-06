import { CITY_TOKEN, COUNTRY_TOKEN } from '@config/tokens'
import AsyncStorage from '@react-native-async-storage/async-storage'
import * as opencageApi from '@services/opencageApi'
import * as weatherApi from '@services/weatherApi'
import { Forecast } from '@types/forecast'
import { useState } from 'react'
import useWeather from './useWeather'

const useForecast = () => {
  const { getLocationDataFromAsyncStorage } = useWeather()

  const [forecast, setForecast] = useState<Forecast | undefined>(undefined)
  const [notFound, setNotFound] = useState<boolean | undefined>(undefined)
  const [loading, setLoading] = useState(false)

  const getForecast = async (city: string) => {
    setLoading(true)

    try {
      const forecast = await weatherApi.getForecast(city)
      setForecast(forecast)

      setNotFound(false)
    } catch (error) {
      console.log(error)
      setNotFound(true)
    } finally {
      setLoading(false)
    }
  }

  const saveLocal = async () => {
    try {
      const code = await opencageApi.getCountryCode(forecast.country)

      await AsyncStorage.setItem(COUNTRY_TOKEN, code)
      await AsyncStorage.setItem(CITY_TOKEN, forecast.city)

      await getLocationDataFromAsyncStorage()
    } catch (error) {
      console.log(error)
    }
  }

  return { getForecast, forecast, loading, notFound, saveLocal }
}

export default useForecast
