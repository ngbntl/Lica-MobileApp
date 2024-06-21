import {  StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar';
const ModalLayout = () => {
  return (
    <>
    <Stack>
      <Stack.Screen name="edit_topic" options={{ title: 'Edit Topic', headerShown:true }} />
        <Stack.Screen name="add_collection" options={{ presentation:'modal', title: 'Add Collection', headerShown:true,

      
         }} />
    </Stack>
   <StatusBar backgroundColor="#A7C4B5" styles="light"/>
   
   </>
  )
}

export default ModalLayout