
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Authlayout = () => {
  return (
    <View>
      <Text>Authlayout</Text>
    </View>

import {  StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar';

const Authlayout = () => {
  return (
   <>
   <Stack>
    <Stack.Screen 
    name='sign-in'
    options={{headerShown:false}}/>
    <Stack.Screen 
    name='sign-up'
    options={{headerShown:false}}/>
   </Stack>
   <StatusBar backgroundColor="#A7C4B5" styles="light"/>
   
   </>

  )
}

export default Authlayout

const styles = StyleSheet.create({})