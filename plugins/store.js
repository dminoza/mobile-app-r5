import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../screens/Authentication/authSlice'
import deviceReducer from '../screens/LainNgaScreen/deviceSlice'

export default configureStore({
  reducer: {
    auth: authReducer,
    devices: deviceReducer
  },
})