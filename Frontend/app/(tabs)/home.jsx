import { View, Text, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react';
import SearchBar from '../../components/SearchBar';
import Collection_card from '../../components/collection/Collection_card';
import collections from '../../apis/collections';



const Home =  () => {
  const [collection, setCollection] = useState([]);
  useEffect(() => {
    const fetchCollection = async () => {
      try {
        const response = await collections.getCollections();
        setCollection(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCollection();
  }, []);

  return (
    <View className='h-screen w-full'>
      <Text className='text-green-500 font-psemibold text-2xl mt-10 ml-5'>Welcome</Text>

      <SearchBar/>
      <Text className='text-black font-psemibold text-lg mt-10 ml-5'>Collections</Text>
   
      <ScrollView horizontal={true}>
        {collection.map((item, index) => (
          <Collection_card key={index} title={item.name} image={item.image} className='h-20 'style={{flexDirection:'row'}}/>
        ))}
      </ScrollView>
   
    </View>
  )
}

export default Home