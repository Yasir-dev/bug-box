import { createSlice } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const authenticationSlice = createSlice({
  name: 'authenticationToken',
  initialState: {
    token: null,
  },
  reducers: {
    saveToken: (state, action) => {
      state.token = action.payload.token;
      AsyncStorage.setItem('token', action.payload.token);
    },
    removeToken: (state) => {
      state.token = null;
      AsyncStorage.removeItem('token');
    },
  },
})

export const { saveToken, removeToken } = authenticationSlice.actions;

export default authenticationSlice.reducer