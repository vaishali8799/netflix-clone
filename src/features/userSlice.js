import { createSlice } from '@reduxjs/toolkit'
const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        isAuth:false
    },
    reducers:{
    login(state,action) {
            state.user = action.payload;
            state.isAuth = true;
        },
    logout(state) {
        state.user = null;
        state.isAuth = false
        }
    },
   
    
})
export const { login, logout } = userSlice.actions;
export const userSelect = (state) => state.user.isAuth;
export const userDetail = (state) => state.user.user;
export default userSlice.reducer;