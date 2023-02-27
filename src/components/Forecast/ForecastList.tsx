import { HourForecast } from '@screens/Home/LocationWeather'
import React from 'react'
import { FlatList } from 'react-native'
import ForecastCard from './ForecastCard'

export type ForecastProps = {
  data: HourForecast[]
}

const ForecastList = ({ data }: ForecastProps) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      overScrollMode="never"
      contentContainerStyle={{
        justifyContent: 'space-between',
      }}
      renderItem={({ item }) => <ForecastCard item={item} />}
    />
  )
}

export default ForecastList
