import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormField from '../../components/FormField'

const signIn = () => {
  const [form, setForm] = useState({
    email:'',
    password:''
  })
  return (
  <SafeAreaView className="bg-white h-full">
    <ScrollView >
      <View className="w-full justify-center h-full px-4 my-6">
        <Text className='text-3xl font-pbold text-center'>Sign In</Text>
        <Text>Join us to explore the world of unlimited knowledge!</Text>
       <FormField
       title="Email"
       value={form.email}
       handleChangeText={(e)=> setForm({...form, email:e})}
       ortherStyles="mt-7"
       keyBoardType="email-address"
       />
        <FormField
       title="Password"
       value={form.email}
       handleChangeText={(e)=> setForm({...form, password:e})}
       ortherStyles="mt-7"
        keyBoardType="default"
        secureTextEntry
        
       
       />

       
      </View>
    </ScrollView>

  </SafeAreaView>
  )
}

export default signIn