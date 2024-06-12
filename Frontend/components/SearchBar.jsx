import { View, Text, TextInput } from 'react-native'
import React from 'react'
import FormField from './FormField'

const SearchBar = () => {
  return (
    <View className='border-2 border-gray-300 w-full h-16 px-4 rounded-lg focus:border-green-500 flex-row '>
      <TextInput className='flex-1 font-pmedium text-base' />
      <Text>hihidsfsd</Text>
    </View>
  )
}

export default SearchBar