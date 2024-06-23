import { View, Text,Image } from 'react-native'

import { Tabs, Redirect } from 'expo-router'
import { icons } from '../../constants';


const TabIcon = ({icon,color,name,focused})=>{
    return(
        <View
        className="items-center justify-center gap-2"
        >
            <Image
                source={icon}
                resizeMode="contain"
                tintColor={color}
                className="w-6 h-6"
            />
            <Text className={`text-xs ${focused ? 'font-psemibold' : 'font-pregular'} text-xs`} style={{color:color}}>{name}</Text>
        </View>
    )
}

const Tabslayout = () => {
  return (
   
        <>
        <Tabs
        screenOptions={{
            tabBarShowLabel:false,
            tabBarActiveTintColor: '#13CD64',
            tabBarInactiveTintColor: '#CECECE',
            tabBarStyle:{
                backgroundColor:'#fff',
                borderTopWidth:1,
                borderTopColor:'#CECECE',
                height:64,
                
                
            },
        }}
        >
        <Tabs.Screen
            name="home"
            options={{
               title:'Home',
               headerShown:false,
               tabBarIcon:({color, focused})=>(
                <TabIcon
                icon={icons.home}
                color={color}
                name="Home"
                focused={focused}
                />
               )
            }}
        />
        <Tabs.Screen
            name="collection"
            options={{
               title:'Collection',
               headerShown:false,
               tabBarIcon:({color, focused})=>(
                <TabIcon
                icon={icons.bookmark}
                color={color}
                name="Collection"
                focused={focused}
                />
               )
            }}
        />
        <Tabs.Screen
            name="profile"
            options={{
               title:'Profile',
               headerShown:false,
               tabBarIcon:({color, focused})=>(
                <TabIcon
                icon={icons.profile}
                color={color}
                name="Profile"
                focused={focused}
                />
               )
            }}
        />

        </Tabs>
        
        </>
    
  )
}

export default Tabslayout