import {  StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar';
const ModalLayout = () => {
  return (
    <>
    <Stack>
      <Stack.Screen name="edit_topic" options={{presentation:'modal', title: 'Edit Topic', headerShown:false }} />
        <Stack.Screen name="add_collection" options={{ presentation:'modal', title: 'Add Collection', headerShown:false,
         }} />
        <Stack.Screen name="add_topic" options={{ presentation:'modal', title: 'Add Topic', headerShown:false,
         }} />
        <Stack.Screen name="edit_card" options={{ presentation:'modal', title: 'Edit Card', headerShown:false,
         }} />
    </Stack>
   <StatusBar backgroundColor="#A7C4B5" styles="light"/>
   
   </>
  )
}

export default ModalLayout