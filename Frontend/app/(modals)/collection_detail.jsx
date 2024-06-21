import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Link, useLocalSearchParams } from 'expo-router';
import topic from '../../apis/topics';
import Topics_list from '../../components/collection/Topics_list';

const CollectionDetail = () => {

  const params = useLocalSearchParams();
  const { id } = params;
  const [topics, setTopics] = useState([]);

  useEffect(() => {

    const fetchTopics = async () => {
      try {
        const response = await topic.getTopicsByColletionId(id);
        setTopics(response);
        console.log(response)
      } catch (error) {
        console.log(error);
      }
    };
    fetchTopics();
  }, []);
  

  return (
  
     <View className='mt-10 h-full w-full'>
      <Text className='text-center font-psemibold text-2xl mt-2 text-green-500'>Topics</Text>


      {topics.map((item,index)=>(
       
<Link key={index}
href={
  {
    pathname: '/(modals)/card',
    params: { id: item.id }
   
  }
} className='m-2 ml-8 w-5/6 bg-white rounded-md'>
  
         <Topics_list key={index} name={item.name} create_at={item.create_at}  />
         </Link>
        
      ))}
  
    </View>
   
  );
};

export default CollectionDetail;
