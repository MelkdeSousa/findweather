import React from 'react'
import { FlatList } from 'react-native'
import ForecastCard, { ForecastCardItem } from './ForecastCard'

export type ForecastProps = {
  data: ForecastCardItem[]
}

const ForecastList = ({ data }: ForecastProps) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        justifyContent: 'space-between',
        width: '100%',
      }}
      renderItem={({ item }) => <ForecastCard item={item} />}
    />
  )
}

export default ForecastList
