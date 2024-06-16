import { View, Text,Image, ScrollView } from 'react-native'
import React from 'react'

const Collection_card = ({title,image}) => {
  return (

    <View  className='w-36 h-40 m-2  bg-white' >

      <Image source={{uri:image}} className='w-36 h-28' />
      <Text className=' font-psemibold text-lg text-center justify-center items-center mt-2 '>{title}</Text>
      

    </View>

  )
}

export default Collection_card