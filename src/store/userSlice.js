import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name:'user',
    initialState:{
        user:''
    },
    reducers: {
        userTest(state, action) {},
    }
})

export const {userTest} = userSlice.actions

export default userSlice.reducer