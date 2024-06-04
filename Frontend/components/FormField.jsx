import { View, Text, TextInput } from 'react-native'
import React from 'react'

const FormField = (title, value, placeholder, handleChangeText, ortherStyles, ...props) => {
  return (
    <View className={`space-y-2 ${ortherStyles}`} >
      <Text className='text-base text-gray-400'>{title}</Text>
      <View className='border-2 border-green-300 w-full h-16 px-4 bg-green-50 rounded-2xl focus:border-green-500 items-center'>
        <TextInput 
        className='flex-1 text-black  font-psemibold text-base'
        value={value}
        placeholder={placeholder}
        placeholderTextColor="gray-500"
        onChangeText={handleChangeText}
        secureTextEntry></TextInput>
        </View>
      </View>
  )
}

export default FormField