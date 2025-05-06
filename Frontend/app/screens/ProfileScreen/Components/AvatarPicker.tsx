// AvatarPicker.js
import React, { useState } from 'react';
import { View, Image, Button, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from 'redux/AuthSlice';
import { supabase } from 'config/supabase';
import { useTranslation } from 'react-i18next';

export default function AvatarPicker({ avatarURL }: { avatarURL: string }) {
  const { t } = useTranslation();
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const dispatch = useDispatch();
  const { id } = useSelector((state: RootState) => state.auth.user);
  // Hàm chọn ảnh từ thư viện
  const pickImage = async () => {
    // Xin quyền truy cập thư viện ảnh
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== 'granted') {
      Alert.alert(t('permissionMedia', { ns: 'errors' }));
      return;
    }

    // Hiển thị bộ chọn ảnh
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: 'images',
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.7
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  // Hàm tải ảnh lên Firebase Storage
  const uploadImage = async () => {
    if (!image) {
      Alert.alert(t('notPictureUploaded', { ns: 'errors' }));
      return;
    }

    setUploading(true);

    try {
      // Đọc file thành blob
      const fileInfo = await FileSystem.getInfoAsync(image);
      const fileExt = image.split('.').pop();
      const fileName = `${Date.now()}.${fileExt}`;
      const filePath = `avatars/${id}/${fileName}`;

      // Sử dụng FileSystem để upload file
      const { body, status } = await FileSystem.uploadAsync(
        `${supabase.supabaseUrl}/storage/v1/object/avatar/${filePath}`,
        image,
        {
          headers: {
            Authorization: `Bearer ${supabase.supabaseKey}`,
            'Content-Type': `image/${fileExt}`
          },
          uploadType: FileSystem.FileSystemUploadType.MULTIPART
        }
      );

      if (status !== 200) {
        throw new Error('Upload failed');
      }

      // Lấy URL công khai của ảnh
      const { data: publicUrlData } = supabase.storage.from('avatar').getPublicUrl(filePath);

      const avatarUrl = publicUrlData.publicUrl;
      // Cập nhật URL avatar trong database
      await dispatch(
        updateUser({
          userId: id,
          updatedData: {
            profile_img_url: avatarUrl
          }
        })
      ).unwrap();
      Alert.alert(t('updateAvatarSuccess', { ns: 'errors' }));
    } catch (error) {
      console.error('Lỗi khi tải lên:', error);
      Alert.alert(t('updateAvatarFailed', { ns: 'errors' }));
      setImage(null);
    } finally {
      setUploading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        {image ? (
          <Image source={{ uri: image }} style={styles.avatar} />
        ) : avatarURL ? (
          <Image source={{ uri: avatarURL }} style={styles.avatar} />
        ) : (
          <Image style={styles.avatar} source={require('@assets/images/default_avatar.jpg')} />
        )}
      </View>

      <View style={styles.buttonContainer}>
        <Button title={t('chooseImage', { ns: 'errors' })} onPress={pickImage} />
        <Button
          title={t('updateAvatar', { ns: 'errors' })}
          onPress={uploadImage}
          disabled={!image || uploading}
        />
      </View>

      {uploading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size='large' color='#0000ff' />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  avatarContainer: {
    marginBottom: 20
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75
  },
  placeholderAvatar: {
    backgroundColor: '#E1E1E1'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20
  },
  loadingContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)'
  }
});
