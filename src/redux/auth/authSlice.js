import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, fetchCurrentUser } from './authOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isLoading: false,
  error: null,
  isRefreshing: false,
};

const authSlice = createSlice({
   name: 'contacts',
   initialState: initialState,
   reducers: {},
   extraReducers: builder => {
     builder
       .addCase(register.fulfilled, (state, { payload }) => {
         state.user = payload.user;
         state.token = payload.token;
         state.isLoggedIn = true;
       })
       .addCase(logIn.fulfilled, (state, { payload }) => {
         state.user = payload.user;
         state.token = payload.token;
         state.isLoggedIn = true;
       })
       .addCase(logOut.fulfilled, (state, { payload }) => {
         state.user = initialState.user;
         state.token = payload.token;
         state.isLoggedIn = false;
       })
       .addCase(fetchCurrentUser.pending, (state, { payload }) => {
         state.isRefreshing = true;
       })
       .addCase(fetchCurrentUser.fulfilled, (state, { payload }) => {
         state.user = payload;
         state.isLoggedIn = true;
         state.isRefreshing = false;
       })
       .addCase(fetchCurrentUser.rejected, (state, { payload }) => {
         state.isRefreshing = false;
       });
   },
 });

export const authReducer = authSlice.reducer;