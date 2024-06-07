import { View, Text, ScrollView, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import { Link } from 'expo-router'
import { user } from '../../repositories/user';
const signIn = () => {

  // const {setUser, setIsLogged} = useGloc
  const [form, setForm] = useState({
    email:'',
    password:''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const submit = async ()=>{
    if(!form.email || !form.password){
      Alert.alert('Error','Please fill in all the fields')
    }

    setIsSubmitting(true)

    try{
      const res = await user.signin(form);
      console.log(res)
    }catch(error){
      Alert.alert('Error', error.message)
    }finally{
      setIsSubmitting(false);
    }

  }
  return (
  <SafeAreaView className="bg-white h-full">
    <ScrollView >
      <View className="w-full justify-center h-full px-4 my-6">
        <Text className='text-3xl font-pbold text-center'>Sign In</Text>
        <Text className='text-center font-plight text-gray-500 pt-4'>Join us to explore the world of unlimited knowledge!</Text>
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
       title='Sign in'
       handlePress={submit}
       containerStyles='mt-7'
       isLoading={isSubmitting}
       />

       <View className=' justify-center flex-row gap-2 mt-2 '>
        <Text className='text-md text-gray-500 font-pregular'>Don't have an account?</Text>
        <Link href='/sign-up' className='text-md font-psemibold text-green-500'>Sign Up</Link>
       </View>

       
      </View>
    </ScrollView>

  </SafeAreaView>
  )
}

export default signIn