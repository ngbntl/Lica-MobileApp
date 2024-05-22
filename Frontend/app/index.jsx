import {  Text, View } from "react-native";
import React from "react";
import {Link} from 'expo-router';
const RootLayout = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-5xl font-pblack text-green-500">Lica</Text>
        <Link href="/home" style={{color:'blue'}}>home</Link>
    </View>
  );
};

export default RootLayout;
