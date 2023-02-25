import * as weatherApi from '@services/weatherApi'
import { Forecast } from '@types/forecast'
import { useState } from 'react'

const useForecast = () => {
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

  return { getForecast, forecast, loading, notFound }
}

export default useForecast
