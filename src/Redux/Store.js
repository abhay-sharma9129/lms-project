import { configStorage } from '@reduxjs/toolkit';
import authSliceReducer from './Slices/AuthSlice'

const store = configStorage({
    reducer: {
        auth: authSliceReducer,
    },
    devTools: true
})

export default store