import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import topic from '../../apis/topics';

const CollectionDetail = () => {

  const params = useLocalSearchParams();
  const { id } = params;
  const [topics, setTopics] = useState([]);

  useEffect(() => {

    const fetchTopics = async () => {
      try {
        const response = await topic.getTopicsByColletionId(id);
        setTopics(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTopics();
  }, []);
  

  return (
  
     <View className='mt-10 h-full w-full'>
      <Text className='text-center font-psemibold text-xl'>Topics</Text>
      {topics.map((item,index)=>{
        
      })}
    </View>
   
  );
};

export default CollectionDetail;
