import {  StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar';
const ModalLayout = () => {
  return (
    <>
    <Stack>
      <Stack.Screen name="collection_detail" options={{ title: 'Collection Detail', headerShown:false }} />
    </Stack>
   <StatusBar backgroundColor="#A7C4B5" styles="light"/>
   
   </>
  )
}

export default ModalLayout