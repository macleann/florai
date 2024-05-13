import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loginUser, logoutUser } from './authAPI';
import { RootState } from '../../app/store';

interface AuthState {
 token: string | null;
 status: 'idle' | 'loading' | 'failed';
}

const initialState: AuthState = {
 token: null,
 status: 'idle',
};

export const login = createAsyncThunk('auth/login', async (credentials: { username: string; password: string }) => {
 const response = await loginUser(credentials.username, credentials.password);
 return response.token;
});

export const logout = createAsyncThunk('auth/logout', async (_, { getState }) => {
  const state = getState() as RootState;
  const token = state.auth.token;
  if (token) {
      await logoutUser(token);
  }
  return null; // Return null to clear the token in the reducer
});

export const authSlice = createSlice({
 name: 'auth',
 initialState,
 reducers: {},
 extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(login.fulfilled, (state, action: PayloadAction<string>) => {
        state.status = 'idle';
        state.token = action.payload;
      })
      .addCase(login.rejected, (state) => {
        state.status = 'failed';
        state.token = null;
      })
      .addCase(logout.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(logout.fulfilled, (state, action: PayloadAction<null>) => {
        state.status = 'idle';
        state.token = null;
      })
      .addCase(logout.rejected, (state) => {
        state.status = 'failed';
      })
 },
});

export default authSlice.reducer;
