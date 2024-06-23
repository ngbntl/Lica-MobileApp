import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import FormField from '../../components/FormField';
import { Picker } from '@react-native-picker/picker';
import { jwtDecode } from 'jwt-decode';
import * as SecureStore from 'expo-secure-store';
import CustomButton from '../../components/CustomButton';
import collections from '../../apis/collections';
import { router } from 'expo-router';
const AddCollection = () => {
  const [selectedValue, setSelectedValue] = useState("easy");
  const [user, setUser] = useState(null);
  const [form, setForm] = useState({
    name: '',
    description:'',
    level: selectedValue,
    image: '',
    user: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  useEffect(() => {
    setForm(prevForm => ({ ...prevForm, level: selectedValue }));
  }, [selectedValue]);

 useEffect(() => {

  
  const fetchToken = async () => {
    try {
      const token = await SecureStore.getItemAsync('token');
      
      if (token) {
        const decoded = jwtDecode(token);
        setUser(decoded);
       
        setForm(prevForm => ({ ...prevForm, user: decoded.user_id }));
      }
    } catch (error) {
      console.error("Error fetching or decoding token:", error);
    }
  };
  fetchToken();
}, []);

  const submit = async () => {
   

    if (!form.name || !form.level) {
      alert('Please fill in all the fields');
      return;
    }
    setIsSubmitting(true);
   try{
    console.log(form)
    const res = await collections.addCollection(form);
    console.log(res);
    router.push('/(tabs)/collection');
    }catch(error){
      console.error(error);
   }
   finally{
    setIsSubmitting(false);
   }
  };

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
          <View className='mt-2 border-2 border-gray-300 w-full h-16 px-4 rounded-lg focus:border-green-500 flex-row'>
            <Picker
              selectedValue={selectedValue}
              onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
              style={{ height: 50, width: '100%' }}
            >
              <Picker.Item label="Easy" value="easy" />
              <Picker.Item label="Medium" value="medium" />
              <Picker.Item label="Hard" value="hard" />
            </Picker>
          </View>
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

export default AddCollection;