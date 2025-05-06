import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { authService } from 'services/AuthService';
import { User } from 'services/AuthService';
import { DetailUser } from '@/Types/types';
export interface AuthState {
  loading: boolean;
  error: string | null;
  user: User | null;
  isAuthenticated: boolean;
  detailUser: DetailUser | null;
}

const initialState = {
  loading: false,
  error: null,
  user: null,
  isAuthenticated: false,
  detailUser: {
    first_name: '',
    last_name: '',
    date_of_birth: '',
    email: '',
    gender: '',
    height: 0,
    weight: 0,
    profile_img_url: '',
    created_at: '',
    updated_at: '',
    fitness_level: '',
    phone: '',
    account_status: false,
    google_fit_connected: false,
    user_id: ''
  }
};

export const login = createAsyncThunk(
  'auth/login',
  async (credentials: { email: string; password: string; role: string }, { rejectWithValue }) => {
    try {
      const response = await authService.signIn(
        credentials.email,
        credentials.password,
        credentials.role
      );
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const signUp = createAsyncThunk(
  'auth/signUp',
  async (credentials: { email: string; password: string; role: string }, { rejectWithValue }) => {
    try {
      const response = await authService.signUp(
        credentials.email,
        credentials.password,
        credentials.role
      );
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
export const getDetailUser = createAsyncThunk(
  'auth/getDetailUser',
  async (userId: string, { rejectWithValue }) => {
    try {
      const response = await authService.getCurrentUserDetail(userId);
      return response;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
export const updateUser = createAsyncThunk(
  'auth/updateUser',
  async (
    { userId, updatedData }: { userId: string; updatedData: Partial<DetailUser> },
    { rejectWithValue }
  ) => {
    try {
      const response = await authService.updateUser(userId, updatedData);
      return response;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(login.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
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
        state.isAuthenticated = false;
      })
      .addCase(logout.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getDetailUser.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getDetailUser.fulfilled, (state, action) => {
        state.loading = false;
        state.detailUser = action.payload;
      })
      .addCase(getDetailUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateUser.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.loading = false;
        state.detailUser = action.payload;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});
export default authSlice.reducer;
