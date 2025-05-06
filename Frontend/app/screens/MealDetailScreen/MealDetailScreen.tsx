import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Header from '../HealthOverviewScreen/components/Header';
import { useNavigation } from 'expo-router';
import DetailNav from '../HealthOverviewScreen/components/DetailNav';
import { NUTRITIONS } from './utils/constant';

const MealDetailScreen = () => {
  const navigation = useNavigation() as any;

  return (
    <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <ScrollView style={styles.container}>
        <View
          style={{
            width: '100%',
            position: 'absolute',
            top: 30,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 30,
            zIndex: 9
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image style={{}} source={require('../../../assets/images/left-arrow.png')} />
          </TouchableOpacity>

          <DetailNav />
        </View>

        <Image
          style={{
            //   borderRadius: 16
            width: '100%',
            height: 390
          }}
          source={{
            uri: 'https://firebasestorage.googleapis.com/v0/b/ttch-a46c0.appspot.com/o/image%2Fimages.jpg?alt=media&token=7eba2830-d343-4683-b769-adce17f1219c'
          }}
          resizeMode='cover'
        ></Image>

        <View
          style={{
            position: 'relative',
            top: -60,
            gap: 30,
            paddingHorizontal: 30,
            paddingBottom: 60,
            borderRadius: 50,
            backgroundColor: '#FFFFFF'
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              gap: 10,
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingTop: 40
            }}
          >
            <View style={{ gap: 2 }}>
              <Text style={{ color: '#1D1617', fontSize: 16, fontWeight: 'bold' }}>
                Cà ri bò Nhật Bản
              </Text>
              <Text style={{ color: '#98BBFE', fontSize: 12 }}>Dễ | 30 phút</Text>
            </View>

            <Image source={require('../../../assets/images/heart-icon.png')} />
          </View>

          <View>
            <Text style={{ marginBottom: 15, color: '#1D1617', fontSize: 16, fontWeight: 'bold' }}>
              Dinh dưỡng
            </Text>

            <ScrollView horizontal>
              <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
                {NUTRITIONS.map((item, index) => (
                  <View
                    key={index}
                    style={{
                      flexDirection: 'row',
                      gap: 5,
                      alignItems: 'center',
                      justifyContent: 'center',
                      paddingVertical: 10,
                      paddingHorizontal: 10,
                      borderRadius: 12,
                      backgroundColor: 'rgba(152, 187, 254, 0.2)'
                    }}
                  >
                    <Image source={item.icon}></Image>
                    <Text style={{ color: '#1D1617' }}>{item.value}</Text>
                  </View>
                ))}
              </View>
            </ScrollView>
          </View>

          <View>
            <Text style={{ marginBottom: 15, color: '#1D1617', fontSize: 16, fontWeight: 'bold' }}>
              Mô tả
            </Text>

            <Text style={{ color: '#7B6F72', fontSize: 12 }}>
              Cà ri bò Nhật Bản là một món ăn truyền thống của Nhật Bản, được chế biến từ thịt bò,
              rau củ và nước sốt cà ri. Món ăn này thường được ăn kèm với cơm trắng và có hương vị
              đậm đà, thơm ngon. Cà ri bò Nhật Bản có thể được chế biến theo nhiều cách khác nhau,
              tùy thuộc vào sở thích và khẩu vị của từng người.
            </Text>
          </View>

          <View>
            <View
              style={{
                flexDirection: 'row',
                gap: 10,
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <Text style={{ color: '#1D1617', fontSize: 16, fontWeight: 'bold' }}>
                Nguyên liệu bạn sẽ cần
              </Text>

              <Text style={{ color: '#7B6F72', fontSize: 12 }}>6 nguyên liệu</Text>
            </View>
            <View style={{ gap: 2, marginTop: 15 }}>
              <Text style={{ color: '#7B6F72', fontSize: 12 }}>
                <Text style={{ color: '#1D1617', fontSize: 14, fontWeight: 'bold' }}>Thịt bò:</Text>{' '}
                400g, cắt thành miếng vừa ăn
              </Text>

              <Text style={{ color: '#7B6F72', fontSize: 12 }}>
                <Text style={{ color: '#1D1617', fontSize: 14, fontWeight: 'bold' }}>Thịt bò:</Text>{' '}
                400g, cắt thành miếng vừa ăn
              </Text>

              <Text style={{ color: '#7B6F72', fontSize: 12 }}>
                <Text style={{ color: '#1D1617', fontSize: 14, fontWeight: 'bold' }}>Thịt bò:</Text>{' '}
                400g, cắt thành miếng vừa ăn
              </Text>

              <Text style={{ color: '#7B6F72', fontSize: 12 }}>
                <Text style={{ color: '#1D1617', fontSize: 14, fontWeight: 'bold' }}>Thịt bò:</Text>{' '}
                400g, cắt thành miếng vừa ăn
              </Text>
            </View>
          </View>

          <View>
            <View
              style={{
                flexDirection: 'row',
                gap: 10,
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <Text style={{ color: '#1D1617', fontSize: 16, fontWeight: 'bold' }}>Cách làm</Text>

              <Text style={{ color: '#7B6F72', fontSize: 12 }}>8 bước</Text>
            </View>

            <View style={{ gap: 5, marginTop: 15 }}>
              <View
                style={{
                  flexDirection: 'row',
                  gap: 15,
                  alignItems: 'flex-start',
                  borderCurve: 'circular'
                }}
              >
                <Text style={{ color: '#C58BF2', fontSize: 14, fontWeight: 'semibold' }}>01</Text>
                <View
                  style={{
                    position: 'relative',
                    gap: 5,
                    paddingLeft: 20,
                    paddingBottom: 30,
                    borderLeftWidth: 2,
                    borderLeftColor: 'gray',
                    borderStyle: 'dashed',
                    borderColor: '#C58BF2'
                  }}
                >
                  <Image
                    source={require('../../../assets/images/circle-icon.png')}
                    style={{ position: 'absolute', left: -11 }}
                  />
                  <Text style={{ color: '#1D1617', fontSize: 14, fontWeight: 'bold' }}>Bước 1</Text>
                  <Text style={{ color: '#7B6F72', fontSize: 12, fontWeight: 'bold' }}>
                    Chuẩn bị tất cả các nguyên liệu cần thiết
                  </Text>
                </View>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  gap: 15,
                  alignItems: 'flex-start',
                  borderCurve: 'circular'
                }}
              >
                <Text style={{ color: '#C58BF2', fontSize: 14, fontWeight: 'semibold' }}>02</Text>
                <View
                  style={{
                    position: 'relative',
                    gap: 5,
                    paddingLeft: 20,
                    paddingBottom: 30,
                    borderLeftWidth: 2,
                    borderLeftColor: 'gray',
                    borderStyle: 'dashed',
                    borderColor: '#C58BF2'
                  }}
                >
                  <Image
                    source={require('../../../assets/images/circle-icon.png')}
                    style={{ position: 'absolute', left: -11 }}
                  />
                  <Text style={{ color: '#1D1617', fontSize: 14, fontWeight: 'bold' }}>Bước 1</Text>
                  <Text style={{ color: '#7B6F72', fontSize: 12, fontWeight: 'bold' }}>
                    Chuẩn bị tất cả các nguyên liệu cần thiết
                  </Text>
                </View>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  gap: 15,
                  alignItems: 'flex-start',
                  borderCurve: 'circular'
                }}
              >
                <Text style={{ color: '#C58BF2', fontSize: 14, fontWeight: 'semibold' }}>03</Text>
                <View
                  style={{
                    position: 'relative',
                    gap: 5,
                    paddingLeft: 20,
                    paddingBottom: 30,
                    borderLeftWidth: 2,
                    borderLeftColor: 'gray',
                    borderStyle: 'dashed',
                    borderColor: '#C58BF2'
                  }}
                >
                  <Image
                    source={require('../../../assets/images/circle-icon.png')}
                    style={{ position: 'absolute', left: -11 }}
                  />
                  <Text style={{ color: '#1D1617', fontSize: 14, fontWeight: 'bold' }}>Bước 1</Text>
                  <Text style={{ color: '#7B6F72', fontSize: 12, fontWeight: 'bold' }}>
                    Chuẩn bị tất cả các nguyên liệu cần thiết
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          position: 'absolute',
          left: 0,
          bottom: 20,
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <TouchableOpacity
          style={{
            width: 315,
            height: 60,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
            borderRadius: 50,
            backgroundColor: '#98B9FE'
          }}
        >
          <Text style={{ color: '#ffffff', fontSize: 16, fontWeight: 'bold' }}>Thêm vào lịch</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: 10
  },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  text_lg: { color: '#7B6F72', fontSize: 16, fontWeight: 'semibold' },
  text_sm: { color: '#7B6F72', fontSize: 12 },
  red_bar: {
    height: 10,
    backgroundColor: 'rgba(255, 0, 0, 0.3)',
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50
  },
  blue_bar: {
    height: 10,
    backgroundColor: 'rgba(152, 186, 254, 1)',
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 2
  }
});

export default MealDetailScreen;
