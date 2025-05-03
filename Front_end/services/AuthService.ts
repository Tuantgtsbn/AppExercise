import { supabase } from '../config/supabase';
import { DetailUser } from '@/Types/types';
export interface User {
  id: string;
  email: string;
  role?: string;
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
  async signUp(email: string, password: string, role: string): Promise<AuthResponse> {
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
              email: data.user.email || '',
              role: role
            }
          : null,
        error: null
      };
    } catch (error: any) {
      throw new Error(error.message);
    }
  },

  // Đăng nhập
  async signIn(email: string, password: string, role: string): Promise<AuthResponse> {
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
              email: data.user.email || '',
              role: role
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
    try {
      const { data, error } = await supabase.auth.getSession();

      if (error) {
        console.error('Lỗi khi lấy phiên:', error.message);
        return null;
      }

      if (data.session?.user) {
        // Có thể lấy thêm thông tin từ bảng profile tùy chỉnh
        return {
          id: data.session.user.id,
          email: data.session.user.email || ''
        };
      }

      return null;
    } catch (error) {
      console.error('Lỗi không mong đợi:', error);
      return null;
    }
  },
  async getCurrentUserDetail(userId: string): Promise<DetailUser | null> {
    try {
      const { data, error } = await supabase.from('User').select('*').eq('user_id', userId);
      if (error) {
        console.error('Lỗi khi lấy thông tin người dùng:', error.message);
        throw error;
      }
      return data[0];
    } catch (error) {
      console.error('Lỗi không mong đợi:', error);
      throw error;
    }
  },
  async updateUser(userId: string, updatedData: Partial<DetailUser>): Promise<DetailUser | null> {
    try {
      const { data, error } = await supabase
        .from('User')
        .update({ ...updatedData, updated_at: new Date().toISOString() })
        .eq('user_id', userId)
        .select('*');
      if (error) {
        console.error('Lỗi khi cập nhật thông tin người dùng:', error.message);
        throw error;
      }
      if (data) {
        console.log('Dữ liệu người dùng sau khi cập nhật:', data[0]);
        return data[0];
      } else {
        throw new Error('Không tìm thấy người dùng với ID đã cung cấp.');
      }
    } catch (error) {
      console.error('Lỗi không mong đợi:', error);
      throw error;
    }
  }
};
