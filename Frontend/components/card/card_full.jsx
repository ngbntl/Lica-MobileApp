import { View, Text } from 'react-native'
import React from 'react'

const Card_full = ({vocabulary, definition, pronunciation}) => {
  return (
    <View className="h-24 p-4">
  <Text className="text-lg font-semibold text-gray-900">Vocabulary: {vocabulary}</Text>
  <Text className="text-sm text-gray-700">Definition: {definition}</Text>
  <Text className="text-sm italic text-gray-600">Pronunciation: {pronunciation}</Text>
</View>
  )
}

export default Card_full