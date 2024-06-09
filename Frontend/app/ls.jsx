import { ScrollView, Text, View } from 'react-native'
import React, { Component } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomButton from '../components/CustomButton'

import { router } from 'expo-router'

export class ls extends Component {
  render() {
    return (

<SafeAreaView className='bg-white h-full'>
  <ScrollView className='top-1/3'>
    <View className='flex-1 items-center justify-center px-4'>
      <Text className='font-bold text-3xl text-center'> It’s not just learning,
      It’s a promise! </Text>
      <Text className='text-center font-plight text-gray-500 pt-4'>Learn together, progress together - A place for knowledge exchange</Text>
      <CustomButton
      title='Register'
      handlePress={()=> router.push('/sign-up')}
      containerStyles="w-full mt-7"
      />
      <CustomButton
      title='Login'
        handlePress={()=> router.push('/sign-in')}
        containerStyles="w-full mt-7 bg-white border-2 border-green-500 "
        textStyles='text-green-500'

      />
    </View>
  </ScrollView>
</SafeAreaView>
    )
  }
}

export default ls