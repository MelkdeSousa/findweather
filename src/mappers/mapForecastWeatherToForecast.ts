import { Forecast } from '@types/forecast'

export default (data: any): Forecast => {
  return {
    city: data.location.name,
    country: data.location.country,
    region: data.location.region,
    temperature: data.current.temp_c,
    condition: data.current.condition.text,
    icon: data.current.condition.icon,
  }
}
