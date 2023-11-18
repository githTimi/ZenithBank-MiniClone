import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, Modal } from 'react-native'
import React, { useState } from 'react'
import AntDesign from '../../node_modules/@expo/vector-icons/AntDesign'
import Entypo from '../../node_modules/@expo/vector-icons/Entypo'
import { RH } from '../styles/dimension'
import { RW } from '../styles/dimension'
import { transferBalance, airtimeBalance} from '../states/accountSlice'
import {  useDispatch } from 'react-redux'
import { Formik } from 'formik';

const fh=RH(12)
const fw=RW(25)
const mw=RW(100)
const mh=RH(60)

const Transfer = () => {
    const da=[{id:1,name:'Own Account '},
    {id:2,name:'Zenith Bank '},{id:3,name:'Other Banks '},
]
const [shown, setShown]= useState(false)

const dispatch = useDispatch()
     
  return (
    <View className='p-6 pl-8  '>
         
          <View className='border p-3 flex flex-row justify-between ' >
              <Text className='text-red-500' style={{fontSize:19}} > Transfer History</Text>
              <AntDesign name='right' size={20}/>
          </View>

          <View  className=' mt-5'>
          <Text  style={{fontSize:19}}> Select Transfer Mode</Text>
             <FlatList
               data={da}
               keyExtractor={(item) => item.id}
               horizontal
               renderItem={({item})=>(
                        <TouchableOpacity className='border rounded border-red-700 p-4 pt-3 active:bg-red-300' style={{
                            height:fh, width:fw
                        }}>
                            <Entypo name='user' size={20} />
                            <Text className='pt-3'>{item.name}</Text>
                        </TouchableOpacity>
               )}
               contentContainerStyle={{ columnGap:14}}
             />
          </View>
           <Text className='mt-5'>Select Source Account</Text>
          <View  className='border mt-1 p-2 flex flex-row justify-between'>
          <Text className='text-red-700' style={{fontSize:19}}> Transfer</Text>
          <AntDesign name='down' size={20}/>
            </View>
            
            <Formik
              initialValues={{account:'',amount:'',description:''}}
               onSubmit={(values)=>{
                        dispatch(transferBalance(values.amount))   
                        setShown(true)
                      
               }}
            >
                     {({
         values,
         handleChange,
         handleSubmit,
         resetForm
        
       })=>(
      <View>
                 <Text className='mt-5'>Enter Destination Account</Text>
            <View  className='border mt-1 p-2'>
            <TextInput placeholder='Account number'
             onChangeText={handleChange('account')} style={{fontSize:19}}
            value={values.account} /> 
            </View>

            <Text className='mt-5'>Amount</Text>
            <View  className='border mt-1 p-2'>
            <TextInput placeholder='0.00' style={{fontSize:19}} 
             onChangeText={handleChange('amount')}  value={values.amount}/> 
            </View>

            <Text className='mt-5'>Transaction Description</Text>
            <View  className='border mt-1 p-2'>
            <TextInput placeholder='Transaction Description' style={{fontSize:19}} 
             onChangeText={handleChange('description')} value={values.description} /> 
            </View>
               
            <TouchableOpacity className='items-center mt-6 p-5 bg-gray-400' onPress={handleSubmit}>
               
                     <Text>Continue</Text>
                    
            </TouchableOpacity>

            <Modal className='mb-3' visible={shown} onRequestClose={()=> setShown(false)}
               animationType='slide'  transparent={true}
            >

              <View className='absolute bottom-0'>
               <View className='bg-slate-300 p-3 flex justify-center items-center rounded-t-xl' style={{
            width: mw,
            height: mh}} >
                <Text className='text-lg'>transfer of  {values.amount} is successful </Text>

                <TouchableOpacity className='items-center mt-6 p-5 bg-gray-400' onPress={()=> { 
                  resetForm()
                  setShown(false)}
                } >
                   <Text>Close</Text>
                   </TouchableOpacity>
               </View>
               </View>
         </Modal>
      </View>
                     )}
                
            </Formik>
           
    </View>
  )
}

export default Transfer

