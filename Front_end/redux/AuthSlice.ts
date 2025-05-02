import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { authService } from 'services/AuthService';
import { User } from 'services/AuthService';
export interface AuthState {
  loading: boolean;
  error: string | null;
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
}
const initialState = {
  loading: false,
  error: null,
  user: null,
  token: null,
  isAuthenticated: false
};

export const login = createAsyncThunk(
  'auth/login',
  async (credentials: { email: string; password: string }, { rejectWithValue }) => {
    try {
      const response = await authService.signIn(credentials.email, credentials.password);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const signUp = createAsyncThunk(
  'auth/signUp',
  async (credentials: { email: string; password: string }, { rejectWithValue }) => {
    try {
      const response = await authService.signUp(credentials.email, credentials.password);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const logout = createAsyncThunk('auth/logout', async (_, { rejectWithValue }) => {
  try {
    const response = await authService.signOut();
    return response;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
    }
  },
  extraReducers: builder => {
    builder
      .addCase(login.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(signUp.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = true;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(logout.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logout.fulfilled, state => {
        state.loading = false;
        state.user = null;
        state.token = null;
        state.isAuthenticated = false;
      })
      .addCase(logout.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});
export const { setToken } = authSlice.actions;
export default authSlice.reducer;
