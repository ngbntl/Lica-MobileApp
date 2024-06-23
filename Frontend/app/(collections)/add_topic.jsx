import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import FormField from '../../components/FormField';
import { Picker } from '@react-native-picker/picker';
import { jwtDecode } from 'jwt-decode';
import * as SecureStore from 'expo-secure-store';
import CustomButton from '../../components/CustomButton';
import collections from '../../apis/collections';
import { router } from 'expo-router';
const add_topic = () => {

    const [form, setForm] = useState({
        name: '',
        description:'',
      
        image: '',
        user: ''
      });
  const [isSubmitting, setIsSubmitting] = useState(false);
    
    return (
        <SafeAreaView className='h-full'>
          <ScrollView>
            <View className='w-full justify-center h-full px-4 my-6'>
              <Text className='mb-12 mt-4 text-2xl font-pbold text-green-500 text-center'>Add Collection</Text>
              <FormField title="Collection name" 
              value={form.name}
              handleChangeText={(e)=> setForm({...form,name:e})}
              ortherStyles="mt-7"
              keyBoardType="default"
              placeholder=''
              />
               <FormField title="Description" 
              value={form.description}
              handleChangeText={(e)=> setForm({...form,description:e})}
              ortherStyles="mt-7"
              keyBoardType="default"
              placeholder=''
              />
              <Text className='mt-4 text-base text-gray-400'>Level</Text>
              
              <FormField title="image link"
              value={form.image}
              handleChangeText={(e)=> setForm({...form,image:e})}
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