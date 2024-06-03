import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, Text, View, TouchableOpacity } from "react-native";
import Onboarding from 'react-native-onboarding-swiper';
import { LogBox } from 'react-native';
import LottieView from 'lottie-react-native';

LogBox.ignoreLogs([
  'Warning: Page: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.',
  'Warning: TextButton: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.',
  'Warning: SymbolButton: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.'
]);


const Page = ({ backgroundColor = '#fff', title = 'study every time and everywhere', subtitle = 'Done with React Native Onboarding Swiper' }) => (
  <View>
    <Text>{title}</Text>
  </View>
);
const CustomTitle = ({ title }) => (
  <View className="flex items-center justify-center">
    <Text className="text-center text-4xl font-semibold ">
        {title}
    </Text>
</View>

);
const CustomSubtitle = ({ subtitle }) => (
  <View className="flex items-center justify-center">
    <Text className="text-center text-md font-pregular  text-gray-500">
        {subtitle}
    </Text>
</View>
);
const CustomNextButton = ({ ...props }) => (
  <TouchableOpacity className='bg-green-500 px-4 py-2 rounded-full ' {...props}>
    <Text className='text-white font-bold'>Next</Text>
  </TouchableOpacity>
);

const CustomSkipButton = ({ ...props }) => (
  <TouchableOpacity className='bg-green-200 px-4 py-2 rounded-full ' {...props}>
    <Text className='text-gray-700 font-bold'>Skip</Text>
  </TouchableOpacity>
);
const CustomDot = ({ selected }) => {
  let backgroundColor;
  backgroundColor = selected ? 'rgba(7, 231, 100, 0.8)' : 'rgba(128, 142, 134, 0.8)';

  return(
    <View
      style={{
        position: 'relative',
        top: -50,
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 3,
        backgroundColor,
        borderRadius: 5,
      }}
    />
  );
  
};
const CustomDoneButton = ({ ...props }) => (
  <TouchableOpacity className='bg-green-300 rounded-full p-2 mr-4' {...props}>
    <Text className='text-gray-600 font-bold'>Complete</Text>
  </TouchableOpacity>
);
function start() {
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView contentContainerStyle={{height:'100%'}}>
        <View className="flex items-center justify-center w-full h-full -top-10 ">
          <Onboarding 
          bottomBarColor="#fff"
          NextButtonComponent={CustomNextButton}
         SkipButtonComponent={CustomSkipButton}
          DoneButtonComponent={CustomDoneButton}
         DotComponent={CustomDot}
            pages={[
              {
                backgroundColor: '#fff',
                image: (<LottieView source={require('../assets/animations/start.json')} autoPlay
                loop
                style={
                 { height:300, width:300}
                }
                />),
                title: <CustomTitle title='Study Every Time And Everywhere' />,
                subtitle: <CustomSubtitle subtitle='Helps you avoid boredom in self-study and vocabulary memorization'/>,
              },
              {
                backgroundColor: '#fff',
                image: (<LottieView source={require('../assets/animations/start.json')} autoPlay
                loop
                style={
                 { height:300, width:300}
                }
                />),
                title: <CustomTitle title='Everyone Learns And Shares Together' />,
                subtitle: <CustomSubtitle subtitle='Learn together, progress together - Aplace for knowledge exchange'/>,
              },
              {
                backgroundColor: '#fff',
                image: (<LottieView source={require('../assets/animations/start.json')} autoPlay
                loop
                style={
                 { height:300, width:300}
                }
                />),
                title: <CustomTitle title='Start Your Jurney Today' />,
                subtitle: <CustomSubtitle subtitle='Learn together, progress together - Aplace for knowledge exchange'/>,
              },
             
            ]}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default start;
