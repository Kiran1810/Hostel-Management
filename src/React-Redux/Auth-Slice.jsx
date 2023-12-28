
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    status: false,
    userData: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.userData = {
                id: action.payload.id,
                email: action.payload.email,
                user: action.payload.user,
            };
        },
        logout: (state,action) => {
            state.status = false;
            state.userData = null;
        },
    },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;