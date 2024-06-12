import { View, Text, ScrollView, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import { Link } from 'expo-router'

const signUp = () => {
  const [form, setForm] = useState({
    first_name:'',
    last_name:'',
    email:'',
    password:''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const submit = async ()=>{
    if(!form.username || form.email || form.password){
      Alert.alert('Error','Please fill in all the fields')
    }
    setIsSubmitting(true)
    try{
      const res = await user.signUp(form);
      console.log(res)
      router.push('/sign-in')
    }catch(error){
      console.log(error)
      if(error.message == "Request failed with status code 400"){
        Alert.alert('Error','Invalid email or password');
      }

    }
   
  }
  return (
  <SafeAreaView className="bg-white h-full">
    <ScrollView >
      <View className="w-full justify-center h-full px-4 my-6">
        <Text className='text-3xl font-pbold text-center'>Sign Up</Text>
       
        <FormField
       title="Username"
       value={form.username}
       handleChangeText={(e)=> setForm({...form, username:e})}
       ortherStyles="mt-7"
       keyBoardType="default"
       placeholder=''
       />
         <FormField
       title="Username"
       value={form.username}
       handleChangeText={(e)=> setForm({...form, username:e})}
       ortherStyles="mt-7"
       keyBoardType="default"
       placeholder=''
       />
       <FormField
       title="Email"
       value={form.email}
       handleChangeText={(e)=> setForm({...form, email:e})}
       ortherStyles="mt-7"
       keyBoardType="email-address"
       placeholder=''
       />
        <FormField
       title="Password"
       value={form.password}
       handleChangeText={(e)=> setForm({...form, password:e})}
       ortherStyles="mt-7"
        keyBoardType="default"
        placeholder=''
        secureTextEntry
        
       
       />

       <CustomButton
       title='Sign Up'
       handlePress={submit}
       containerStyles='mt-7'
       isLoading={isSubmitting}
       />

       <View className=' justify-center flex-row gap-2 mt-2 '>
        <Text className='text-md text-gray-500 font-pregular'>have an account?</Text>
        <Link href='/sign-in' className='text-md font-psemibold text-green-500'>Sign In</Link>
       </View>

       
      </View>
    </ScrollView>

  </SafeAreaView>
  )
}

export default signUp