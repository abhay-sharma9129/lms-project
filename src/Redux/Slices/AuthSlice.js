import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoggedIn: localStorage.getItem('isLoggedIn') || false,
    role: localStorage.getItem('role') || "",
    data: localStorage.getItem('data') || {}
}

const authSlice = ({
    name: 'auth',
    initialState,
    reducer: {},
})

// export const {} = authSlice.actions;
export default authSlice.reducer 
