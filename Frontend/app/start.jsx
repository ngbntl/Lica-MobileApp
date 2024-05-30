import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {  ScrollView, Text, View } from "react-native";
import Onboarding from 'react-native-onboarding-swiper';
import LottieView from 'lottie-react-native';
function start() {
  return (
    <SafeAreaView className = "bg-white h-full">
    <ScrollView contentContainerStyle={{height:'100%'}}>
      <View className="flex items-center justify-center w-full h-full">
      <Onboarding
  pages={[
    {
      backgroundColor: '#fff',
      image: <View > 
       <LottieView source={require('../assets/animations/')} autoPlay loop />;
      </View>,
      title: 'study every time and everywhere',
      subtitle: 'Done with React Native Onboarding Swiper',
    },
   

  ]}
/>
     
      </View>
    </ScrollView>
    
  </SafeAreaView>
  )
}

export default start
