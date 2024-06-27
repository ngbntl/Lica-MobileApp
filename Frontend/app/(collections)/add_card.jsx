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
import card from '../../apis/card';


const add_card = () => {

    const [form, setForm] = useState({
        vocabulary:'',
        definition:'',
        pronunciation:'',
        
        user:''
      });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [user, setUser] = useState(null);
    
useEffect(()=>{
  const fetchTopicId = async ()=>{
    try {
      const token = await SecureStore.getItemAsync('token');

     const topicId = await SecureStore.getItemAsync('tmpTopic');
      setForm(prevForm => ({ ...prevForm, topics: [topicId] }));
      if (token) {
        const decoded = jwtDecode(token);
        setUser(decoded);
       
        setForm(prevForm => ({ ...prevForm, user: decoded.user_id }));
      }
    } catch (error) {
      console.log(error)
    }
  };
  fetchTopicId();
},[])
 
const submit = async ()=>{
    
    
    if (!form.vocabulary || !form.definition || !form.pronunciation) {
        alert('Please fill in all the fields');
        return;
    }
   
    
 console.log(form)

  
  setIsSubmitting(true);
  try{
    const res = await card.addCard(form)
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
              <FormField title="Vocabulary" 
              value={form.vocabulary}
              handleChangeText={(e)=> setForm({...form,vocabulary:e})}
              ortherStyles="mt-7"
              keyBoardType="default"
              placeholder=''
              />
              <FormField title="Definition" 
              value={form.definition}
              handleChangeText={(e)=> setForm({...form,definition:e})}
              ortherStyles="mt-7"
              keyBoardType="default"
              placeholder=''
              />
               <FormField title="Pronunciation" 
              value={form.pronunciation}
              handleChangeText={(e)=> setForm({...form,pronunciation:e})}
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

export default add_card