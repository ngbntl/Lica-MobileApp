import React, {useRef} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, Text, View, TouchableOpacity, StatusBar } from "react-native";
import Onboarding from 'react-native-onboarding-swiper';
import { LogBox } from 'react-native';
import LottieView from 'lottie-react-native';
import CustomButton from '../components/CustomButton';
import {router} from 'expo-router'
LogBox.ignoreLogs([
  'Warning: Page: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.',
  'Warning: TextButton: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.',
  'Warning: SymbolButton: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.'
]);



const CustomTitle = ({ title }) => (
  <View className="relative items-center justify-center px-4">
    <Text className="text-center text-4xl font-semibold ">
        {title}
    </Text>
</View>

);
const CustomSubtitle = ({ subtitle }) => (
  <View className="flex items-center justify-center p-4">
    <Text className="text-center text-md font-pregular  text-gray-500 ">
        {subtitle}
    </Text>
</View>
);
const CustomNextButton = ({ ...props }) => (
  <TouchableOpacity className='bg-green-500 px-4 py-2 rounded-full right-5 ' {...props}>
    <Text className='text-white font-bold'>Next</Text>
  </TouchableOpacity>
);

const CustomSkipButton = ({...props}) => (
  <TouchableOpacity 
    className='bg-green-200 px-4 py-2 rounded-full left-5' 
    {...props}
  >
    <Text className='text-gray-700 font-bold'>Skip</Text>
  </TouchableOpacity>
);
const CustomDot = ({ selected }) => {
  let backgroundColor;
  backgroundColor = selected ? 'rgba(7, 231, 100, 0.8)' : 'rgba(128, 142, 134, 0.8)';

  return(
    <View
      style={{
        width: 8,
        height: 8,
       
        marginHorizontal: 3,
        backgroundColor,
        borderRadius: 5,
      }}
    />
  );
  
};
const CustomDoneButton = ({ ...props }) => (
  <TouchableOpacity className='relative bg-green-300 rounded-full p-2 right-6' {...props}>
    <Text className='text-gray-600 font-bold'>Complete</Text>
  </TouchableOpacity>
);


const CustomPage = ({ title, subtitle, buttonRegister, buttonLogin, Register, Login }) => (
  <View>
    <CustomTitle title={title} />
    <CustomSubtitle subtitle={subtitle} />
    <CustomButton
    title="Register" 
    handlePress={()=>{}}
    containerStyles ="w-2/3 mt-7"/>
    

  </View>
);
function start() {
  const onboardingRef = useRef();
  const handleSkip = () => {router.push('/ls')

  };
  return (
    <SafeAreaView className="bg-white h-full">
    <ScrollView contentContainerStyle={{height:'100%'}}>
      <View className=" w-full h-full  ">
        <Onboarding  className='absolute -top-8'
        bottomBarColor="#fff"
        NextButtonComponent={CustomNextButton}
        SkipButtonComponent={CustomSkipButton}
        DoneButtonComponent={CustomDoneButton}
        onSkip={handleSkip}  
        onDone={handleSkip}
        DotComponent={CustomDot}
            pages={[
              {
                backgroundColor: '#fff',
                image: (<LottieView source={require('../assets/animations/Start.json')} autoPlay
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
                image: (<LottieView source={require('../assets/animations/Slide2.json')} autoPlay
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
                image: (<LottieView source={require('../assets/animations/End.json')} autoPlay
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
      <StatusBar backgroundColor='#88D8B0'
      style='light'/>
    </SafeAreaView>
  );
}

export default start;
