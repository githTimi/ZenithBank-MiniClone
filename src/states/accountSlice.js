import { createSlice } from '@reduxjs/toolkit'



const initialState = {
    name:'Oluwadurotimi Ademola Agboola',
    balance: 10000,
    number:2200012345,
  }

  export const accountSlice = createSlice({
     name:'account',
     initialState,
     reducers: {
          transferBalance: (state, action) =>{
           state.balance -= action.payload
          },
          airtimeBalance: (state, action) =>{
            state.balance -= action.payload
          },
     }
  })


  export const { transferBalance, airtimeBalance} =accountSlice.actions


  export default accountSlice.reducer