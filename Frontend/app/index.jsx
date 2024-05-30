import { ScrollView, Text, View, Animated } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

const RootLayout = () => {
  const navigation = useNavigation();
  const [fadeAnim] = useState(new Animated.Value(0))  // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,  
      }
    ).start();

    const timer = setTimeout(() => {
      navigation.navigate('start');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation, fadeAnim]);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView contentContainerStyle={{flexGrow: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Animated.View style={{opacity: fadeAnim}}>
          <Text style={{fontSize: 40, fontWeight: 'bold', color: 'green'}}>Lica</Text>
        </Animated.View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RootLayout;