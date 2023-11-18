import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import {
    DrawerContentScrollView,DrawerItem
} from '@react-navigation/drawer'

import { Drawer } from 'react-native-paper';
import { RH } from '../styles/dimension';
import { RW } from '../styles/dimension';
import logo from '../../assets/ze.png'
import AntDesign from '../../node_modules/@expo/vector-icons/AntDesign'

const CustomDrawer = (props) => {
   
    const tw=RW(50)
    
  return (
    <View className='flex-1'>
          <View style={styles.cont} >
            <View style={{width:tw}}>
              <Text className='text-xl mt-10 pl-4 text-white' >Oluwadurotimi Ademola
              Agboola</Text>
              </View>
              <Image source={logo} 
               resizeMode="cover"
               style={{
                width: 40,
                height: 45,
                marginTop:57,
                marginLeft: 15,
                
              }}
               />
           </View>
           
      <DrawerContentScrollView {...props}>
           
            <View className='mt-0'>
              <Drawer.Section>
            
                <DrawerItem labelStyle={{fontSize:20}}
                 icon={() =>
                    <AntDesign name='right' size={20}/>
                  } label="Overview" onPress={()=>{props.navigation.navigate('Overview')}} />
                <DrawerItem icon={() =>
                    <AntDesign name='right' size={20}/>
                  } labelStyle={{fontSize:20}} label="Transfer" onPress={()=>{props.navigation.navigate('Transfer')}} />
                <DrawerItem icon={() =>
                    <AntDesign name='right' size={20}/>
                  } labelStyle={{fontSize:20}} label="Airtime" onPress={()=>{props.navigation.navigate('Airtime')}} />
              </Drawer.Section>
            </View>

      </DrawerContentScrollView>
    </View>
  )
}
const uh=RH(15)
const styles=StyleSheet.create({
    cont :{
       backgroundColor:'red',
       flexDirection:'row',
       height:uh
    },
    dra:{
        fontSize:20
    }
})

export default CustomDrawer

