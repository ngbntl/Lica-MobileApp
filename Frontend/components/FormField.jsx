import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import {icons, images} from '../constants'
const FormField = ({title, value, placeholder, handleChangeText, ortherStyles, ...props}) => {
  const [showPassword, setshowPassword] = useState(false)
  return (
    <View className={`space-y-2 ${ortherStyles}`} >
      <Text className='text-base text-gray-400'>{title}</Text>
      <View className='border-2 border-gray-300 w-full h-16 px-4  rounded-lg focus:border-green-500 flex-row '>
        <TextInput 
        className='flex-1 font-pmedium text-base'
        value={value}
        placeholder={placeholder}
        placeholderTextColor=""
        onChangeText={handleChangeText}
        secureTextEntry={title === 'Password' && !showPassword}
        />
        {title === 'Password' && (
          <TouchableOpacity onPress={()=>{
            setshowPassword(!showPassword)
          }}>
            <Image source={!showPassword ? icons.eye : icons.eyeHide} className='w-8 h-8 top-3' resizeMode='contain' />
          </TouchableOpacity>
        )}
        </View>
      </View>
  )
}

export default FormField