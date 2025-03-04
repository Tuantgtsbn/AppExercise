import { useState } from 'react';
import { Dimensions, Image, Text, TouchableOpacity, View } from 'react-native';

const DetailNav = () => {
  const [isOpen, setOpen] = useState(false);

    

  return (
    <View style={{ position: 'relative' }}>
      <TouchableOpacity
        style={{
          right: 0,
          width: 32,
          height: 32,
          justifyContent: 'center',
          alignItems: 'center'
        }}
        onPress={() => setOpen(pre => !pre)}
      >
        <Image source={require('../../../../assets/images/detail-navs.png')} />
      </TouchableOpacity>

      {isOpen && (
        <View
          style={{
            position: 'absolute',
            width: 201,
            height: 242,
            padding: 10,
            top: 40,
            right: 0,
            borderRadius: 10,
            backgroundColor: '#FFFFFF',
            zIndex: 999
          }}
        >
          <View style={{ gap: 7 }}>
            <View
              style={{
                height: 44,
                flexDirection: 'row',
                alignItems: 'center',
                gap: 10,
                paddingLeft: 16,
                borderRadius: 16,
                backgroundColor: '#F7F8F8'
              }}
            >
              <Image source={require('../../../../assets/images/chart-icon.png')} />
              <Text style={{ color: '#7B6F72' }}>Tổng quan sức khỏe</Text>
            </View>
            <View
              style={{
                height: 44,
                flexDirection: 'row',
                alignItems: 'center',
                gap: 10,
                paddingLeft: 16,
                borderRadius: 16,
                backgroundColor: '#F7F8F8'
              }}
            >
              <Image source={require('../../../../assets/images/weight-scale.png')} />
              <Text style={{ color: '#7B6F72' }}>Phân tích sức khỏe</Text>
            </View>
            <View
              style={{
                height: 44,
                flexDirection: 'row',
                alignItems: 'center',
                gap: 10,
                paddingLeft: 16,
                borderRadius: 16,
                backgroundColor: '#F7F8F8'
              }}
            >
              <Image source={require('../../../../assets/images/barbel-icon.png')} />
              <Text style={{ color: '#7B6F72' }}>Tiến độ tập luyện</Text>
            </View>
            <View
              style={{
                height: 44,
                flexDirection: 'row',
                alignItems: 'center',
                gap: 10,
                paddingLeft: 16,
                borderRadius: 16,
                backgroundColor: '#F7F8F8'
              }}
            >
              <Image source={require('../../../../assets/images/knife-plate.png')} />
              <Text style={{ color: '#7B6F72' }}>Chế độ ăn</Text>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

export default DetailNav;
