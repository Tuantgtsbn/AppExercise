import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getDetailUser } from 'redux/AuthSlice';
import { RootState } from 'redux/store';
import { authService } from 'services/AuthService';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const { id } = useSelector((state: RootState) => state.auth.user);
  useEffect(() => {
    async function fetchDetailUser() {
      try {
        if (!id) {
          const response = await authService.getCurrentUser();
          if (response?.id) {
            await dispatch(getDetailUser(response.id)).unwrap();
          }
        } else {
          await dispatch(getDetailUser(id)).unwrap();
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchDetailUser();
  }, [dispatch]);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trang Chủ</Text>
      <Text>Chào mừng đến ứng dụng của chúng tôi!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  }
});

export default HomeScreen;
