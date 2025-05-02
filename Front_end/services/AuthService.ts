import { supabase } from '../config/supabase';

export interface User {
  id: string;
  email: string;
}

export interface AuthError {
  message: string;
}

export interface AuthResponse {
  user: User | null;
  error: AuthError | null;
}

export const authService = {
  // Đăng ký người dùng mới
  async signUp(email: string, password: string): Promise<AuthResponse> {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password
      });
      console.log('Du lieu tra ve tu Supabase:', data);
      if (error) {
        return { user: null, error: { message: error.message } };
      }

      return {
        user: data.user
          ? {
              id: data.user.id,
              email: data.user.email || ''
            }
          : null,
        error: null
      };
    } catch (error: any) {
      throw new Error(error.message);
    }
  },

  // Đăng nhập
  async signIn(email: string, password: string): Promise<AuthResponse> {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      });

      if (error) {
        console.log('Error signing in 1:', error.message);
        throw new Error(error.message);
      }

      return {
        user: data.user
          ? {
              id: data.user.id,
              email: data.user.email || ''
            }
          : null,
        error: null
      };
    } catch (error: any) {
      console.log('Error signing in:', error);
      throw new Error(error.message);
    }
  },

  // Đăng xuất
  async signOut(): Promise<{ error: AuthError | null }> {
    try {
      const { error } = await supabase.auth.signOut();
      return { error: error ? { message: error.message } : null };
    } catch (error: any) {
      throw new Error(error.message);
    }
  },

  // Lấy thông tin người dùng hiện tại
  async getCurrentUser(): Promise<User | null> {
    const { data } = await supabase.auth.getSession();

    if (data.session?.user) {
      return {
        id: data.session.user.id,
        email: data.session.user.email || ''
      };
    }

    return null;
  }
};
