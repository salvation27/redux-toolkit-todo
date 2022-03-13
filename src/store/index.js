import {configureStore} from '@reduxjs/toolkit'
import todoReduser from './todoSlice'
import userReduser from './userSlice'

const store = configureStore({
    reducer:{
      todos:todoReduser,
      user: userReduser,
    }
})
export default store