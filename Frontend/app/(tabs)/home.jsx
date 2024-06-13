import { View, Text } from 'react-native'
import React from 'react';
import SearchBar from '../../components/SearchBar';


const Home = () => {
  return (
    <View className='h-screen w-full'>
      <Text className='text-green-500 font-psemibold text-2xl mt-10 ml-5'>Welcome</Text>
      <SearchBar/>
      <Text className='text-black font-psemibold text-lg mt-10 ml-5'>Collections</Text>
      
    </View>
  )
}

export default Home