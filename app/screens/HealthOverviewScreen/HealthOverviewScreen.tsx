import React from 'react';
import { View, Text, ScrollView, Image, Button, TouchableOpacity, StyleSheet } from 'react-native';

import HealthMetricSection from './components/HealthMetric';
import Header from './components/Header';
import HealthMetric from './components/HealthMetric';
const healthData = [
  { label: 'Chiều cao', value: '180cm' },
  { label: 'Cân nặng', value: '75kg' },
  { label: 'Tuổi', value: '22' },
  { label: 'LBM', value: '55kg' },
  { label: 'Abs', value: '8%' }
];
const HealthOverviewScreen = ({ navigation }: { navigation: any }) => {
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
      <Header title='Tổng quan sức khỏe' />

      {/* Health Metric */}
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
          <TouchableOpacity onPress={() => navigation.navigate('HealthMetric')}>
            <Text
              style={{
                color: '#ADA4A5',
                fontSize: 12,
                fontWeight: 'medium'
              }}
            >
              Xem thêm
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: 15,
            marginTop: 2
          }}
        >
          {healthData.map((item, index) => (
            <HealthMetric key={index} item={item} />
          ))}
        </View>
      </View>
      {/* Tracker */}
      <View
        style={{
          width: '100%',
          marginTop: 10
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
            Tập luyện hôm nay
          </Text>
          <Text
            style={{
              color: '#ADA4A5',
              fontSize: 12,
              fontWeight: 'medium'
            }}
          >
            Xem thêm
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 18,
            marginTop: 6
          }}
        >
          <View
            style={{
              width: 150,
              height: 150,
              padding: 20,
              borderRadius: 16,
              backgroundColor: '#ffffff',
              ...styles.shadow
            }}
          >
            <Text
              style={{
                color: '#1D1617',
                fontSize: 12,
                fontWeight: 'medium'
              }}
            >
              Calories
            </Text>
            <Text
              style={{
                color: '#98B9FE',
                fontSize: 14,
                fontWeight: 'semibold'
              }}
            >
              760 kCal
            </Text>

            <View
              style={{ flex: 1, justifyContent: 'center', alignContent: 'center', marginTop: 18 }}
            >
              <Image source={require('../../../assets/images/calories-pie-icon.png')} />
            </View>
          </View>

          <View
            style={{
              width: 150,
              height: 150,
              padding: 20,
              borderRadius: 16,
              backgroundColor: '#ffffff',
              ...styles.shadow
            }}
          >
            <Text
              style={{
                color: '#1D1617',
                fontSize: 12,
                fontWeight: 'medium'
              }}
            >
              Thời gian tập
            </Text>
            <Text
              style={{
                color: '#98B9FE',
                fontSize: 14,
                fontWeight: 'semibold'
              }}
            >
              30 phút
            </Text>

            <View
              style={{ flex: 1, justifyContent: 'center', alignContent: 'center', marginTop: 18 }}
            >
              <Image style={{}} source={require('../../../assets/images/sleep-graph.png')} />
            </View>
          </View>
        </View>
      </View>
      {/* Meal Plan */}
      <View
        style={{
          width: '100%',
          marginTop: 10
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
            Kế hoạch bữa ăn
          </Text>
          <Text
            style={{
              color: '#ADA4A5',
              fontSize: 12,
              fontWeight: 'medium'
            }}
          >
            Xem thêm
          </Text>
        </View>

        <View
          style={{
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 10,
            marginTop: 6
          }}
        >
          <View
            style={{
              width: '100%',
              height: 63,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: 'rgba(151, 184, 254, 0.2)',
              paddingLeft: 20,
              paddingRight: 20,
              borderTopLeftRadius: 40,
              borderTopRightRadius: 100,
              borderBottomLeftRadius: 40,
              borderBottomRightRadius: 22
            }}
          >
            <View>
              <Text
                style={{
                  color: '#1D1617',
                  fontSize: 14,
                  fontWeight: 'semibold'
                }}
              >
                Bữa sáng
              </Text>
              <Text
                style={{
                  color: '#7B6F72',
                  fontSize: 12
                }}
              >
                2 món | 320kcal
              </Text>
            </View>

            <Image style={{}} source={require('../../../assets/images/cake.png')} />
          </View>

          <View
            style={{
              width: '100%',
              height: 63,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: 'rgba(197, 139, 242, 0.2)',
              paddingLeft: 20,
              paddingRight: 20,
              borderTopLeftRadius: 40,
              borderTopRightRadius: 100,
              borderBottomLeftRadius: 40,
              borderBottomRightRadius: 22
            }}
          >
            <View>
              <Text
                style={{
                  color: '#1D1617',
                  fontSize: 14,
                  fontWeight: 'semibold'
                }}
              >
                Bữa trưa
              </Text>
              <Text
                style={{
                  color: '#7B6F72',
                  fontSize: 12
                }}
              >
                2 món | 320kcal
              </Text>
            </View>

            <Image style={{}} source={require('../../../assets/images/bread.png')} />
          </View>

          <View
            style={{
              width: '100%',
              height: 63,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: 'rgba(189, 164, 248, 0.2)',
              paddingLeft: 20,
              paddingRight: 20,
              borderTopLeftRadius: 40,
              borderTopRightRadius: 100,
              borderBottomLeftRadius: 40,
              borderBottomRightRadius: 22
            }}
          >
            <View>
              <Text
                style={{
                  color: '#1D1617',
                  fontSize: 14,
                  fontWeight: 'semibold'
                }}
              >
                Bữa tối
              </Text>
              <Text
                style={{
                  color: '#7B6F72',
                  fontSize: 12
                }}
              >
                2 món | 320kcal
              </Text>
            </View>

            <Image style={{}} source={require('../../../assets/images/oatmeal.png')} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5
  }
});

export default HealthOverviewScreen;
