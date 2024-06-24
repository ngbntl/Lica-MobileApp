import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import FormField from '../../components/FormField';
import { Picker } from '@react-native-picker/picker';
import { jwtDecode } from 'jwt-decode';
import * as SecureStore from 'expo-secure-store';
import CustomButton from '../../components/CustomButton';
import collections from '../../apis/collections';
import { router } from 'expo-router';
import topics from '../../apis/topics';
const add_topic = () => {

    const [form, setForm] = useState({
        name: '',
        collections: []
      });
  const [isSubmitting, setIsSubmitting] = useState(false);
    
useEffect(()=>{
  const fetchCollectionId = async ()=>{
    try {
     const collection = await SecureStore.getItemAsync('tmpCollection');
      setForm(prevForm => ({ ...prevForm, collections: [collection] }));
    } catch (error) {
      console.log(error)
    }
  };
  fetchCollectionId();
},[])
 
const submit = async ()=>{
 

  if (!form.name) {
    alert('Please fill in all the fields');
    return;
  }
  setIsSubmitting(true);
  try{
    const res = await topics.addTopic(form)
    console.log(res);
    router.back();
  }catch(error){
    console.error(error);
  }
  setIsSubmitting(false);
}
    return (
        <SafeAreaView className='h-full'>
          <ScrollView>
            <View className='w-full justify-center h-full px-4 my-6'>
              <Text className='mb-12 mt-4 text-2xl font-pbold text-green-500 text-center'>Add Topic</Text>
              <FormField title="Topic name" 
              value={form.name}
              handleChangeText={(e)=> setForm({...form,name:e})}
              ortherStyles="mt-7"
              keyBoardType="default"
              placeholder=''
              />
             
    
              <CustomButton
              title='Save'
              handlePress={submit}
              containerStyles='mt-7'
              isLoading={isSubmitting}
             />
            </View>
          </ScrollView>
        </SafeAreaView>
      );
    };

export default add_topic