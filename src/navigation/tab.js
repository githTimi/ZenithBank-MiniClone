import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {MyStack, TransferStack, AirtimeStack} from './stack'
import AntDesign from '../../node_modules/@expo/vector-icons/AntDesign'

const Tab = createBottomTabNavigator();

const Tabi = () => {
  return (
    <Tab.Navigator
    screenOptions={({ route }) =>({
        headerShown: false,
        tabBarLabelStyle:{
            fontSize:16,
            
        },
    
         tabBarActiveTintColor:'red',
        
         tabBarIcon: ({focused, color, size}) =>{
             let iconName;
             if (route.name === 'Overview'){
               iconName = focused ?'bars' : 'bars'
             }
             else if (route.name === 'Transfer') {
              iconName = focused ?'swap' : 'swap'
            }
            else if (route.name === 'Airtime') {
                iconName = focused ?'bank' : 'bank'
              }
            return <AntDesign name={iconName} size={focused? 35: 20} color={color} />
         }
     })}
      >
    <Tab.Screen name="Overview" component={MyStack} />
    <Tab.Screen name="Transfer" component={TransferStack} />
    <Tab.Screen name="Airtime" component={AirtimeStack} />
  </Tab.Navigator>
  )
}


export default Tabi