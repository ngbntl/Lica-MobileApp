import { View, Text, Image } from 'react-native'
import React from 'react'

const Collections_list = ({ title, image, description }) => {
  return (
    <View className='flex flex-row justify-between items-center p-4 bg-white rounded-lg'>
      <View className='flex-1'>
        <Text className='font-semibold text-lg mt-2'>{title}</Text>
        <Text className='font-normal text-base mt-2'>{description}</Text>
      </View>
      <Image source={{ uri: image }} className='w-36 h-28 ml-4' />
    </View>
  )
}

export default Collections_list