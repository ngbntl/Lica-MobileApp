import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Link, useLocalSearchParams } from 'expo-router';
import topic from '../../apis/topics';
import Topics_list from '../../components/collection/Topics_list';
import { icons } from '../../constants';
import * as SecureStore from 'expo-secure-store';
import { useIsFocused } from '@react-navigation/native';

const editTopic = () => {
  const isFocused = useIsFocused();

  const params = useLocalSearchParams();
  const { id } = params;
  const [topics, setTopics] = useState([]);
  useEffect(() => {
    
    const fetchTopics = async () => {
      try {
       SecureStore.setItemAsync("tmpCollection", id)
        const response = await topic.getTopicsByColletionId(id);
        setTopics(response);
      
        console.log(response)
      } catch (error) {
        console.log(error);
      }
    };
    fetchTopics();
  }, [isFocused]);
  
  
  return (
  
     <View className='mt-10 h-full w-full'>
      <Text className='text-center font-psemibold text-2xl mt-2 text-green-500'>Topics</Text>
    
      {topics.map((item,index)=>(
       
       <Link key={index}
       href={
         {
           pathname: '/(collections)/edit_card',
           params: { id: item.id }
          
         }
       } className='m-2 ml-8 w-5/6 bg-white rounded-md'>
         
                <Topics_list key={index} name={item.name} create_at={item.create_at}  />
                </Link>
               
             ))}

     
  <TouchableOpacity className='absolute bottom-12 right-4'>
  <Link className='w-20 h-24'
  href={{
    pathname: '/(collections)/add_topic',
   
  }}
>
    <Image source={icons.plus} className='text-green-500' />
</Link>

  </TouchableOpacity>
    </View>
   
  );
};

export default editTopic;
