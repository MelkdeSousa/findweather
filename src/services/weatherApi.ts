import { WEATHER_URL } from '@config/constants'
import env from '@config/env'
import { mapForecastWeatherToForecast } from '@mappers'
import { Forecast } from '@types/forecast'

export const getForecast = async (city: string): Promise<Forecast> => {
  const response = await fetch(
    // eslint-disable-next-line prettier/prettier
    `${WEATHER_URL}/forecast.json?key=${env.API_KEY_WEATHER_API}&q=${city}&days=7&aqi=no&alerts=no&lang=pt`
  )

  const data = await response.json()

  return mapForecastWeatherToForecast(data)
}

export const getForecastRaw = async (city: string): Promise<any> => {
  const response = await fetch(
    // eslint-disable-next-line prettier/prettier
    `${WEATHER_URL}/forecast.json?key=${env.API_KEY_WEATHER_API}&q=${city}&days=7&aqi=no&alerts=no&lang=pt`
  )

  const data = await response.json()

  return data
}
