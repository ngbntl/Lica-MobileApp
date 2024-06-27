import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native'; // Sử dụng 'react-native' hoặc thẻ tương ứng nếu bạn đang làm việc với web
import * as SecureStore from 'expo-secure-store';
import auth from '../../apis/auth';
import { jwtDecode } from 'jwt-decode';

const ProfileScreen = () => {
  const [user, setUser] = useState([]);
  const [userId, setUserId] = useState([]);

  useEffect(() => {
  const fetchToken = async () => {
    try {
      const token = await SecureStore.getItemAsync('token');
      
      if (token) {
        const decoded = jwtDecode(token);
        setUserId(decoded.user_id);
      }
    } catch (error) {
      console.error("Error fetching or decoding token:", error);
    }
  };
  fetchToken();
}, []);

  useEffect(()=>{
    const fetchUser = async ()=>{
      try{
        const response = await auth.getUser(userId);
        setUser(response);
      }catch(error){
        console.log(error);
    }
  }
  fetchUser();
  },[])


  return (
    <View className="w-full h-screen items-center mt-10">
      <Text className=' items-center text-3xl font-psemibold text-green-500 mt-4'>Profile</Text>
      <Image
        source={require('../../assets/icons/profile.png')}
        className='w-32 h-32 rounded-full mt-4'
      />
      <Text className='text-2xl font-pseimbold mt-4'> {user.name}</Text>
      <Text className='text-md font-pbold mt-4'>
        <Text className='text-md font-pregular'>
          {' '}
          giabao5443@gmail.com
        </Text>
      </Text>

    </View>
  );
};

export default ProfileScreen;