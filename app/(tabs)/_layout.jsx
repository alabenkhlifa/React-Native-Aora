import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs, Redirect } from 'expo-router'

import icons from '../../constants/icons'
import { StatusBar } from 'expo-status-bar'

const TabIcon = ({icon, color, name, focused}) => {
    return (
        <View className="items-center justify-center gap-2 mt-1">
            <Image source={icon} resizeMode='contain' tintColor={color} className="w-6 h-6"/>
            <Text className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs`} style={{color: color}}>{name}</Text>
        </View>
    )
}

const TabsLayout = () => {
  return (
    <>
        <Tabs screenOptions={{tabBarShowLabel: false, tabBarActiveTintColor: '#E8F288', tabBarInactiveTintColor: '#CDCDE0', tabBarStyle: {
            backgroundColor: '#161622', borderTopWidth: 1, borderTopColor: '#232533', height: 85 
        }}} detachInactiveScreens={false}> 
            <Tabs.Screen 
            name="home"
            options={{ 
                title: "Home", 
                headerShown: false, 
                href: "/home",
                tabBarIcon: ({color, focused}) => 
                    <TabIcon 
                        icon={icons.home} 
                        name="Home"
                        color={color}
                        focused={focused}/>
            }}/>
            <Tabs.Screen 
            name="bookmark"
            options={{ 
                title: "Bookmark", 
                headerShown: false, 
                tabBarIcon: ({color, focused}) => 
                    <TabIcon 
                        icon={icons.bookmark} 
                        name="Bookmark"
                        color={color}
                        focused={focused}/>
            }}/>
            <Tabs.Screen 
            name="create"
            options={{ 
                title: "Create", 
                headerShown: false, 
                tabBarIcon: ({color, focused}) => 
                    <TabIcon 
                        icon={icons.plus} 
                        name="Create"
                        color={color}
                        focused={focused}/>
            }}/>
            <Tabs.Screen
            name="account"
            options={{
                title: "Account",
                headerShown: false,
                tabBarIcon: ({color, focused}) => 
                    <TabIcon 
                        icon={icons.profile} 
                        name="Account"
                        color={color}
                        focused={focused}/>
            }}/>
        </Tabs>
        <StatusBar backgroundColor='#161622' style='light'/>
    </>
  )
}

export default TabsLayout