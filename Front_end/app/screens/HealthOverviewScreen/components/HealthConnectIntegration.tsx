import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, Platform } from 'react-native';
import * as HealthConnect from 'expo-health-connect';

const HealthConnectIntegration = () => {
  const [status, setStatus] = useState<HealthConnect.HealthConnectStatus | null>(null);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    checkAvailability();
  }, []);

  const checkAvailability = async () => {
    if (Platform.OS !== 'android') return;

    try {
      const currentStatus = await HealthConnect.getHealthConnectStatus();
      setStatus(currentStatus);

      // Kiểm tra nếu đã có quyền truy cập
      if (currentStatus === HealthConnect.HealthConnectStatus.AVAILABLE) {
        try {
          const permissions = await HealthConnect.getGrantedPermissions();
          setIsConnected(permissions.length > 0);
        } catch (error) {
          console.log('Error checking permissions:', error);
        }
      }
    } catch (error) {
      console.error('Error checking Health Connect status:', error);
    }
  };

  const handleHealthConnect = async () => {
    if (Platform.OS !== 'android') {
      Alert.alert('Không hỗ trợ', 'Health Connect chỉ khả dụng trên Android');
      return;
    }

    try {
      if (status === HealthConnect.HealthConnectStatus.NOT_INSTALLED) {
        // Mở Google Play để cài đặt Health Connect
        await HealthConnect.openHealthConnectPlayStore();
        return;
      }

      if (status === HealthConnect.HealthConnectStatus.NOT_SUPPORTED) {
        Alert.alert('Không hỗ trợ', 'Thiết bị của bạn không hỗ trợ Health Connect');
        return;
      }

      if (status === HealthConnect.HealthConnectStatus.AVAILABLE) {
        // Yêu cầu quyền
        const permissions = await HealthConnect.requestPermission([
          {
            recordType: HealthConnect.RecordType.STEPS,
            access: [HealthConnect.Access.READ, HealthConnect.Access.WRITE]
          },
          {
            recordType: HealthConnect.RecordType.WEIGHT,
            access: [HealthConnect.Access.READ, HealthConnect.Access.WRITE]
          },
          {
            recordType: HealthConnect.RecordType.HEIGHT,
            access: [HealthConnect.Access.READ, HealthConnect.Access.WRITE]
          }
        ]);

        if (permissions.granted.length > 0) {
          setIsConnected(true);
          Alert.alert('Kết nối thành công', 'Đã kết nối với Health Connect');
        } else {
          Alert.alert('Kết nối thất bại', 'Bạn cần cấp quyền để sử dụng Health Connect');
        }
      }
    } catch (error) {
      console.error('Failed to connect to Health Connect:', error);
      Alert.alert('Lỗi kết nối', 'Không thể kết nối với Health Connect');
    }
  };

  if (Platform.OS !== 'android') {
    return null; // Không hiển thị trên iOS
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kết nối với Health Connect</Text>
      <Text style={styles.description}>
        Kết nối với Health Connect để đồng bộ dữ liệu sức khỏe của bạn
      </Text>
      <TouchableOpacity
        style={[
          styles.button,
          status !== HealthConnect.HealthConnectStatus.AVAILABLE &&
            !isConnected &&
            styles.installButton
        ]}
        onPress={handleHealthConnect}
      >
        <Text style={styles.buttonText}>
          {status === HealthConnect.HealthConnectStatus.NOT_INSTALLED
            ? 'Cài đặt Health Connect'
            : isConnected
              ? 'Đã kết nối'
              : 'Kết nối ngay'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: 'rgba(152, 186, 234, 0.2)',
    borderRadius: 16,
    marginVertical: 10
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1D1617',
    marginBottom: 8
  },
  description: {
    fontSize: 14,
    color: '#7B6F72',
    marginBottom: 16
  },
  button: {
    backgroundColor: '#97B8FE',
    padding: 12,
    borderRadius: 50,
    alignItems: 'center'
  },
  installButton: {
    backgroundColor: '#FF9500'
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold'
  }
});

export default HealthConnectIntegration;
