import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity,SafeAreaView, Image } from 'react-native';
import { Link, useLocalSearchParams } from 'expo-router';
import Card_full from '../../components/card/card_full';
import { icons } from '../../constants';
import * as SecureStore from 'expo-secure-store';
import { useIsFocused } from '@react-navigation/native';
import card from '../../apis/card';

const editCard = () => {
  const isFocused = useIsFocused();

  const params = useLocalSearchParams();
  const { id } = params;
  const [cards, setCard] = useState([]);
  useEffect(() => {
    console.log(id)
    const fetchCards  = async () => {
      try {
       SecureStore.setItemAsync("tmpTopic", id)

        const response = await card.getCardsByTopic(id);
        setCard(response); 
        console.log(response)
      } catch (error) {
        console.log(error);
      }
    };
    fetchCards();
  }, [isFocused]);
  
  
  return (
    <SafeAreaView className='h-full'>

  <ScrollView>
     <View className='mt-10 h-full w-full'>
      <Text className='text-center font-psemibold text-2xl mt-2 text-green-500'>Cards</Text>
    
      {cards.map((item,index)=>(
     
       <Link key={index}
       href={
         {
           pathname: '/(collections)/edit_card',
           params: { id: item.id }
          
         }
       } className='m-2 ml-8 w-5/6 bg-white rounded-md'>
         <Card_full vocabulary={item.vocabulary} definition={item.definition} pronunciation={item.pronunciation} className='p-4'/>
       
                </Link>
               
             ))}


    </View>
    </ScrollView>
         
  <TouchableOpacity className='absolute bottom-12 right-4'>
  <Link className='w-20 h-24'
  href={{
    pathname: '/(collections)/add_card',
   
  }}
>
    <Image source={icons.plus} className='text-green-500' />
</Link>

  </TouchableOpacity>
  </SafeAreaView>
  );
};

export default editCard;
