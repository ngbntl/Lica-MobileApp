import { View, Text } from 'react-native'
import React from 'react'

const Collection_list = ({name, create_at}) => {
  const date = new Date(create_at);

 
  const formattedDate = date.toLocaleDateString('vi-VN', {
    day: '2-digit', 
    month: 'long', 
    year: 'numeric' 
  });
  return (
    <View  className=' w-5/6 h-30 mt-10  mx-8 bg-white p-2 rounded-md' >

  
      <Text className=' font-psemibold text-lg justify-center items-center mt-2 '>{name}</Text>
      <Text className=' font-pregular text-md  justify-center items-center mt-2 '>Create at: {formattedDate}</Text>
  
    </View>
  )
}

export default Collection_list