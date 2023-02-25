import { OPENCAGE_URL } from '@config/constants'
import env from '@config/env'

export const getCountryCode = async (country: string): Promise<string> => {
  const response = await fetch(
    // eslint-disable-next-line prettier/prettier
    `${OPENCAGE_URL}/json?q=${country}&key=${env.API_KEY_OPENCAGE}`
  )

  const data = await response.json()

  return data.results[0].components.country_code
}
