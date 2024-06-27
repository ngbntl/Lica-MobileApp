import { View, Text, TextInput,Image } from 'react-native';
import { icons } from '../constants';
import React from 'react'


const SearchBar = () => {
  return (
    <View className='border-2 border-gray-300 w-4/5 ml-8 h-12 px-4 mt-4 rounded-lg focus:border-green-500 flex-row'>
      <TextInput className='flex-1 font-pmedium text-base'/>
      <Image source={icons.search} className='w-7 h-7 mt-2 text-gray-500' resizeMode='contain'/>
    </View >
  )
}

export default SearchBar