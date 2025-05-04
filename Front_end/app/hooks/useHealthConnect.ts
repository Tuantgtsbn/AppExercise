import { useState, useEffect } from 'react';
import { Platform } from 'react-native';
import * as HealthConnect from 'expo-health-connect';
import healthConnectService from '@/services/healthConnectService';

export const useHealthConnect = () => {
  const [healthData, setHealthData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchHealthData = async () => {
    if (Platform.OS !== 'android') {
      setError('Health Connect chỉ khả dụng trên Android');
      return;
    }
    
    setLoading(true);
    setError(null);
    
    try {
      const status = await HealthConnect.getHealthConnectStatus();
      
      if (status !== HealthConnect.HealthConnectStatus.AVAILABLE) {
        setError('Health Connect không khả dụng');
        setLoading(false);
        return;
      }
      
      // Lấy dữ liệu trong 30 ngày gần nhất
      const endTime = new Date().toISOString();
      const startTime = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString();
      
      const data = await healthConnectService.getHealthData(startTime, endTime);
      setHealthData(data);
    } catch (err: any) {
      setError(err.message || 'Không thể lấy dữ liệu từ Health Connect');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (Platform.OS === 'android') {
      fetchHealthData();
    }
  }, []);

  return { healthData, loading, error, refreshData: fetchHealthData };
};

export default useHealthConnect;