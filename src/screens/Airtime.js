import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, FlatList } from 'react-native'
import React from 'react'
import AntDesign from '../../node_modules/@expo/vector-icons/AntDesign'
import { RH } from '../styles/dimension'
import { RW } from '../styles/dimension'
import ni from '../../assets/9m.png'
import mi from '../../assets/airtel.jpg'
import li from '../../assets/mtn.png'
const Airtime = () => {
  const fh=RH(12)
  const fw=RW(25)

  const da=[{id:1,name:'9Mobile ',
image:{ni}},
    {id:2,name:'Airtel ',image:{mi}},{id:3,name:'MTN',image:{li}},
]
  return (
    <View className='p-6 pl-8  '>

    <Text className='mt-5'>Select an Account</Text>
    <View className='border p-3 flex flex-row justify-between ' >
        <Text className='text-red-500' style={{fontSize:19}} > Select an Account</Text>
        <AntDesign name='right' size={20}/>
    </View>

    <View  className=' mt-5'>
    <Text  style={{fontSize:19}}> Select Mobile Operator</Text>
    <FlatList
               data={da}
               keyExtractor={(item) => item.id}
               horizontal
               renderItem={({item})=>(
                        <TouchableOpacity className='border rounded border-red-700 p-4 pt-3 active:bg-red-300'
                >
                            <Image source={item.image}          style={{
          height:fh, width:fw
                        }} />
                            <Text className='pt-1'>{item.name}</Text>
                        </TouchableOpacity>
               )}
               contentContainerStyle={{ columnGap:14}}
             />
    </View>
     <Text className='mt-5'>Select Bundle</Text>
    <View  className='border mt-1 p-2 flex flex-row justify-between'>
    <Text className='text-red-700' style={{fontSize:19}}> Transfer</Text>
    <AntDesign name='down' size={20}/>
      </View>
      
      
      <Text className='mt-5'>Mobile Number</Text>
      <View  className='border mt-1 p-2'>
      <TextInput placeholder='Mobile Number' style={{fontSize:19}} /> 
      </View>

      <Text className='mt-5'>Amount</Text>
      <View  className='border mt-1 p-2'>
      <TextInput placeholder='0.00' style={{fontSize:19}} /> 
      </View>


         
      <TouchableOpacity className='items-center mt-6 p-5 bg-gray-400'>
         
               <Text>Continue</Text>
              
      </TouchableOpacity>
</View>
  )
}

export default Airtime