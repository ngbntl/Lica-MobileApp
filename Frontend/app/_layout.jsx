import React, { useEffect } from "react";
import { Text } from 'react-native';
import { SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";
import store from "../stores/store";
import { Provider, useSelector } from 'react-redux';

SplashScreen.preventAutoHideAsync();



const App = () => {
  return (
    <Provider store={store}>
      <RootLayout />
    </Provider>
  );
};
const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
  });
  const accessToken = useSelector(state => state.auth.authData.accesstoken);
  useEffect(() => {
    if (error) throw error;
    if (fontsLoaded) SplashScreen.hideAsync();
    console.log(accessToken)

  }, [fontsLoaded, error]);
  if (!fontsLoaded && !error) return null;

  return (
    <Stack screenOptions={{headerShown:false}}>
      {accessToken ? (
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      ) : (
        <Stack.Screen name="index" options={{ headerShown: false }} />
      )}
      <Stack.Screen name="start" options={{ headerShown: false }} />
      <Stack.Screen name="ls" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      <Stack.Screen name="(modals)" options={{ headerShown: false }} />
      <Stack.Screen name="(collections)" options={{ headerShown: false }} />
    </Stack>
  );
};

export default App;