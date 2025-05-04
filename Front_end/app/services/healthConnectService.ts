import * as HealthConnect from 'expo-health-connect';
import { Platform } from 'react-native';

class HealthConnectService {
  async isAvailable() {
    if (Platform.OS !== 'android') return false;

    try {
      const availability = await HealthConnect.getHealthConnectStatusAsync();
      return availability === HealthConnect.HealthConnectStatus.AVAILABLE;
    } catch (error) {
      console.error('Health Connect availability check failed:', error);
      return false;
    }
  }

  async requestPermissions() {
    if (Platform.OS !== 'android') return { granted: [] };

    try {
      // Yêu cầu quyền đọc/ghi các dữ liệu sức khỏe
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
      return permissions;
    } catch (error) {
      console.error('Health Connect permission request failed:', error);
      throw error;
    }
  }

  async getSteps(startTime, endTime) {
    if (Platform.OS !== 'android') return [];

    try {
      const steps = await HealthConnect.readRecords(HealthConnect.RecordType.STEPS, {
        timeRangeFilter: {
          startTime,
          endTime
        }
      });
      return steps;
    } catch (error) {
      console.error('Failed to read steps data:', error);
      throw error;
    }
  }

  async getWeight(startTime, endTime) {
    if (Platform.OS !== 'android') return [];

    try {
      const weight = await HealthConnect.readRecords(HealthConnect.RecordType.WEIGHT, {
        timeRangeFilter: {
          startTime,
          endTime
        }
      });
      return weight;
    } catch (error) {
      console.error('Failed to read weight data:', error);
      throw error;
    }
  }

  async getHeight(startTime, endTime) {
    if (Platform.OS !== 'android') return [];

    try {
      const height = await HealthConnect.readRecords(HealthConnect.RecordType.HEIGHT, {
        timeRangeFilter: {
          startTime,
          endTime
        }
      });
      return height;
    } catch (error) {
      console.error('Failed to read height data:', error);
      throw error;
    }
  }

  async getHealthData(startTime, endTime) {
    try {
      const [steps, weight, height] = await Promise.all([
        this.getSteps(startTime, endTime),
        this.getWeight(startTime, endTime),
        this.getHeight(startTime, endTime)
      ]);

      return { steps, weight, height };
    } catch (error) {
      console.error('Failed to read health data:', error);
      throw error;
    }
  }
}

export default new HealthConnectService();
