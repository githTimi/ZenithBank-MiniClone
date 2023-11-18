import {  Text, View } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { transferBalance, airtimeBalance} from '../states/accountSlice'

const Home = () => {

   const balance=useSelector((state)=> state.account.balance)
   const accountName=useSelector((state)=> state.account.name)
   const accountNumber=useSelector((state)=> state.account.number)
   const dispatch= useDispatch()
  return (
    <View>
      
      <View>
             <View className='mx-5 p-4 pl-0 border-b-2 border-gray-300'>
                     <Text className='text-red-800 font-normal ' 
                        style={{fontSize:17}}
                     >
                        {accountNumber} - Active
                     </Text>
             </View>

             <View  className='ml-5 pt-1 pl-0'>
                     <Text className='text-gray-800 font-normal' style={{fontSize:20}}>
                        {accountName}
                     </Text>
                     <Text className='pt-3 font-medium text-gray-700' style={{fontSize:24}}>
                        #{balance}      
                     </Text>
             </View>
             <View  className='border mt-5 p-4 bg-gray-400 flex flex-row justify-between'>
                     <Text className='text-white'>
                          Ledger Balance: #{balance}
                     </Text>
                     <Text className='text-white'>
                          History
                     </Text>

             </View>
      </View>
    </View>
  )
}

export default Home

