import { View, Text,Image } from 'react-native'
import React from 'react'
import { Tabs, Redirect } from 'expo-router'
import { icons } from '../../constants';


const TabIcon = ({icon,color,name,focused})=>{
    return(
        <View>
            <Image
                source={icon}
                resizeMode="contain"
                tintColor={color}
                className="w-6 h-6"
            />
            <Text className={`text-xs ${focused ? 'font-psemibold' : 'font-pregular'}`}>{name}</Text>
        </View>
    )
}

const Tabslayout = () => {
  return (
    <View>
        <>
        <Tabs>
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

        </Tabs>
        </>
    </View>
  )
}

export default Tabslayout