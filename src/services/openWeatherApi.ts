import { OPEN_WEATHER_URL } from '@config/constants'
import env from '@config/env'

export const getForecast = async (city: string, country: string) => {
  const response = await fetch(
    // eslint-disable-next-line prettier/prettier
    `${OPEN_WEATHER_URL}/forecast?q=${city},${country}&appid=${env.API_KEY_OPEN_WEATHER_MAP}&units=metric&lang=pt`
  )
  return response.json()
}
