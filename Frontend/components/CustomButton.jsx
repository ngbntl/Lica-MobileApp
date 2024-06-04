import { TouchableOpacity, Text } from 'react-native'
import React from 'react'

const CustomButton = ({title, handlePress,containerStyles, textStyles, isLoading}) => {
  return (
    <TouchableOpacity className={`bg-green-500 relative rounded-xl min-h-[48px] px-9 justify-center items-center ${containerStyles} ${isLoading ? 'opacity-50':''}`}
    disabled={isLoading}
    onPress={handlePress}
    activeOpacity={0.7}
    >
      <Text className={`text-white font-psemibold text-lg ${textStyles}`}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton