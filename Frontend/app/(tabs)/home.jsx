import { View, Text } from 'react-native'
import React from 'react'
import { SearchBar } from 'react-native-screens'

const Home = () => {
  return (
    <View className='h-screen w-full'>
      <Text className='text-green-500 font-psemibold text-2xl mt-10 ml-5'>Welcome</Text>
      <SearchBar className='bg-blue-500 mt-40 relative items-center justify-center'/>
    </View>
  )
}

export default Home