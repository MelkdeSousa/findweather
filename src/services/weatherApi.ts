import env from '@config/env'
import { Forecast } from '@hooks/useForecast'
import { mapForecastWeatherToForecast } from '@mappers'

export const getForecast = async (city: string): Promise<Forecast> => {
  const response = await fetch(
    // eslint-disable-next-line prettier/prettier
    `http://api.weatherapi.com/v1/forecast.json?key=${env.API_KEY_WEATHER_API}&q=${city}&days=7&aqi=no&alerts=no&lang=pt`
  )

  const data = await response.json()

  return mapForecastWeatherToForecast(data)
}
