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
   name: 'auth',
   initialState,

   extraReducers: builder =>
      builder
         .addCase(logOut.fulfilled, state => {
            state.isLoggedIn = false;
            state.user = { name: null, email: null };
            state.token = null;
         })
         .addCase(fetchCurrentUser.pending, state => {
            state.isLoading = true;
            state.isRefreshing = true;
         })
         .addCase(fetchCurrentUser.fulfilled, (state, { payload }) => {
            state.user = payload;
         })
         .addMatcher(
            isAnyOf(
               register.fulfilled,
               register.rejected,
               logOut.fulfilled,
               logOut.rejected,
               logIn.fulfilled,
               logIn.rejected,
               fetchCurrentUser.pending,
               fetchCurrentUser.fulfilled,
               fetchCurrentUser.rejected
            ),
            state => {
               state.isLoading = false;
            }
         )
         .addMatcher(
            isAnyOf(
               register.fulfilled,
               logIn.fulfilled
            ),

            (state, { payload: { user } }) => {
               state.user = user;
            })
         .addMatcher(
            isAnyOf(
               register.fulfilled,
               logIn.fulfilled
            ),
            (state, { payload: token }) => {
               state.token = token;
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
               register.pending,
               logOut.pending,
               logIn.pending,
               fetchCurrentUser.pending
            ),
            state => {
               state.isLoading = true;
            }
         )
         .addMatcher(
            isAnyOf(
               register.fulfilled,
               logOut.fulfilled,
               logIn.fulfilled,
               logIn.fulfilled,
               fetchCurrentUser.fulfilled
            ),
            state => {
               state.error = null;
            }
         )
         .addMatcher(
            isAnyOf(
               register.rejected,
               logOut.rejected,
               logIn.rejected,
               fetchCurrentUser.rejected,
            ),
            (state, { payload }) => {
               state.error = payload;
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

}
);

export const authReducer = authSlice.reducer;
