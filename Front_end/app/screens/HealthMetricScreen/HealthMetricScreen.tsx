import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Platform,
  Image
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../HealthOverviewScreen/components/Header';
import useHealthConnect from '@/hooks/useHealthConnect';

const HealthMetricScreen = () => {
  const navigation = useNavigation() as any;
  const { healthData, loading, error, refreshData } = useHealthConnect();

  const renderHealthConnectData = () => {
    if (Platform.OS !== 'android') {
      return null;
    }

    return (
      <View style={styles.healthConnectContainer}>
        <View style={styles.headerRow}>
          <Text style={styles.sectionTitle}>Dữ liệu từ Health Connect</Text>
          <TouchableOpacity onPress={refreshData}>
            <Text style={styles.refreshText}>Làm mới</Text>
          </TouchableOpacity>
        </View>

        {loading ? (
          <ActivityIndicator size='small' color='#97B8FE' />
        ) : error ? (
          <Text style={styles.errorText}>{error}</Text>
        ) : healthData ? (
          <View style={styles.dataContainer}>
            {healthData.weight && healthData.weight.length > 0 && (
              <View style={styles.dataItem}>
                <Text style={styles.dataLabel}>Cân nặng gần nhất:</Text>
                <Text style={styles.dataValue}>{healthData.weight[0].weight.toFixed(1)} kg</Text>
              </View>
            )}

            {healthData.height && healthData.height.length > 0 && (
              <View style={styles.dataItem}>
                <Text style={styles.dataLabel}>Chiều cao gần nhất:</Text>
                <Text style={styles.dataValue}>{healthData.height[0].height.toFixed(1)} cm</Text>
              </View>
            )}

            {healthData.steps && healthData.steps.length > 0 && (
              <View style={styles.dataItem}>
                <Text style={styles.dataLabel}>Tổng số bước chân (30 ngày):</Text>
                <Text style={styles.dataValue}>
                  {healthData.steps.reduce((total, record) => total + record.count, 0)}
                </Text>
              </View>
            )}
          </View>
        ) : (
          <Text style={styles.noDataText}>Chưa có dữ liệu từ Health Connect</Text>
        )}
      </View>
    );
  };

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 30,
        paddingTop: 10
      }}
    >
      {/* Header */}
      <Header title={'Chỉ số sức khỏe'} />

      {/* Health Connect Data */}
      {renderHealthConnectData()}

      <View
        style={{
          width: '100%',
          height: 90,
          flexDirection: 'row',
          alignItems: 'center',
          gap: 10,
          padding: 10,
          marginTop: 10,
          borderRadius: 22,
          backgroundColor: 'rgba(255, 0, 0, 0.1)'
        }}
      >
        <Image style={{}} source={require('../../../assets/images/shedule.png')} />

        <View style={{}}>
          <Text
            style={{
              color: '#FF0000',
              fontSize: 12
            }}
          >
            Nhắc nhở
          </Text>
          <Text
            style={{
              color: '#1D1617',
              fontSize: 14,
              fontWeight: 'medium'
            }}
          >
            Cập nhật tiếp vào ngày 8 - 7
          </Text>
        </View>
      </View>
      <View
        style={{
          height: 137,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 10,
          padding: 20,
          marginTop: 20,
          borderRadius: 20,
          backgroundColor: 'rgba(152, 186, 234, 0.2)'
        }}
      >
        <View>
          <Text
            style={{
              width: 125,
              flexWrap: 'wrap',
              color: '#1D1617',
              fontSize: 12,
              fontWeight: 'medium'
            }}
          >
            Hãy cập nhật thông tin sức khỏe của bạn
          </Text>
          <View
            style={{
              width: 88,
              height: 28,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 10,
              borderRadius: 50,
              backgroundColor: '#97B8FE'
            }}
          >
            <TouchableOpacity onPress={() => navigation.navigate('HealthUpdateScreen')}>
              <Text
                style={{
                  color: '#FFFFFF',
                  fontSize: 12
                }}
              >
                Cập nhật
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <Image style={{}} source={require('../../../assets/images/schedule-man.png')} />
      </View>
      <View
        style={{
          height: 57,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 10,
          padding: 20,
          marginTop: 20,
          borderRadius: 20,
          backgroundColor: 'rgba(152, 186, 234, 0.2)'
        }}
      >
        <Text
          style={{
            color: '#1D1617',
            fontSize: 14,
            fontWeight: 'medium'
          }}
        >
          So sánh giữa các tháng
        </Text>
        <TouchableOpacity
          style={{
            width: 88,
            height: 28,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 50,
            backgroundColor: '#97B8FE'
          }}
          onPress={() => navigation.navigate('HealthCompareScreen')}
        >
          <Text
            style={{
              color: '#FFFFFF',
              fontSize: 12
            }}
          >
            So sánh
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          marginTop: 16
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <Text
            style={{
              color: '#1D1617',
              fontSize: 16,
              fontWeight: 'bold',
              lineHeight: 26
            }}
          >
            Chỉ số sức khỏe
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('HealthMetricScreen')}
          ></TouchableOpacity>
        </View>

        {/* <HealthMetricSection  /> */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  healthConnectContainer: {
    backgroundColor: 'rgba(152, 186, 234, 0.2)',
    borderRadius: 20,
    padding: 16,
    marginTop: 20
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1D1617'
  },
  refreshText: {
    fontSize: 12,
    color: '#97B8FE'
  },
  dataContainer: {
    gap: 8
  },
  dataItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  dataLabel: {
    fontSize: 14,
    color: '#7B6F72'
  },
  dataValue: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1D1617'
  },
  errorText: {
    color: '#FF0000',
    fontSize: 14
  },
  noDataText: {
    color: '#7B6F72',
    fontSize: 14,
    fontStyle: 'italic'
  }
});

export default HealthMetricScreen;
