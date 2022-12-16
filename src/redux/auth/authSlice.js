import { createSlice, isAnyOf } from '@reduxjs/toolkit';
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
         .addCase(logOut.fulfilled, state => {
            state.user = initialState.user;
            state.isLoggedIn = false;
         })
         .addCase(fetchCurrentUser.pending, state => {
            state.isRefreshing = true;
         })
         .addCase(fetchCurrentUser.fulfilled, (state, { payload }) => {
            state.user = payload;
         })
        
         .addMatcher(
            isAnyOf(
               register.fulfilled,
               logIn.fulfilled,
               logOut.fulfilled),
            (state, { payload }) => {
               state.user = payload.user;
               state.token = payload.token;
            }
         )
         .addMatcher(
            isAnyOf(
               register.fulfilled,
               logIn.fulfilled,
               fetchCurrentUser.fulfilled
            ),
            state => {
               state.isLoggedIn = true;
            }
         )
         .addMatcher(
            isAnyOf(
               fetchCurrentUser.fulfilled,
               fetchCurrentUser.rejected
            ),
            state => {
               state.isRefreshing = false;
            }
         )
   },
});

export const authReducer = authSlice.reducer;