import { View, Text } from 'react-native'
import React from 'react'

const colection_list = () => {
  return (
    <View  className='w-full h-30 m-2  bg-white' >

      <Image source={{uri:image}} className='w-36 h-28' />
      <Text className=' font-psemibold text-lg text-center justify-center items-center mt-2 '>{title}</Text>
      

    </View>
  )
}

export default colection_list