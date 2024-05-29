import {  ScrollView, Text, View } from "react-native";
import React from "react";
import {Link} from 'expo-router';
import { SafeAreaView } from "react-native-safe-area-context";
const RootLayout = () => {
  return (
    <SafeAreaView className = "bg-white h-full">
      <ScrollView contentContainerStyle={{height:'100%'}}>
        <View className="w-full h-full px-4 items-center justify-center">
          
        </View>
      </ScrollView>
      
    </SafeAreaView>
  );
};

export default RootLayout;
