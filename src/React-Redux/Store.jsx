
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Auth-Slice';


const persistedState = localStorage.getItem('reduxState')
  ? JSON.parse(localStorage.getItem('reduxState'))
  : {};

const store = configureStore({
    reducer: {
        auth: authReducer,
    },
    preloadedState: persistedState,  
});

store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});

export default store;