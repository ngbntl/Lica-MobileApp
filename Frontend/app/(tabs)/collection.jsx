import { View, Text, TouchableOpacity,Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import Collection_list from '../../components/collection/Collections_list'
import collections from '../../apis/collections';
import CustomButton from '../../components/CustomButton';
import { icons } from '../../constants';

import { useIsFocused } from '@react-navigation/native';

import { Link } from 'expo-router';

const Collection = () => {
  const isFocused = useIsFocused();
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
  }, [isFocused]);
  return (
    <View className='h-screen'>
      <Text className = 'font-psemibold text-2xl mt-12 text-center text-green-500'>Collections</Text>
      {collection.map((item, index) => (
           <Link
  key={index}
  href={{
    pathname: '/(collections)/edit_topic',
     query: { id: item._id }
  }}
  className='m-2'
>
  <Collection_list key={index} title={item.name} image={item.image} description={item.description} className='h-20 ' style={{ flexDirection: 'row' }} />
</Link>

        ))}

       
  <TouchableOpacity className='absolute bottom-12 right-4'>
  <Link className='w-20 h-24'
  href={{
    pathname: '/(collections)/add_collection',
  }}
>
    <Image source={icons.plus} className='text-green-500' />
</Link>

  </TouchableOpacity>
    </View>
  )
}

export default Collection