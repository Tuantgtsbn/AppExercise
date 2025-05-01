import { Image, ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const NEW_FOODS = [
  {
    id: 1,
    name: 'Honey Pancake',
    image:
      'https://firebasestorage.googleapis.com/v0/b/ttch-a46c0.appspot.com/o/image%2Fimages.jpg?alt=media&token=7eba2830-d343-4683-b769-adce17f1219c',
    level: 'Dễ',
    cookDuration: '15 phút',
    calories: 200
  },
  {
    id: 1,
    name: 'Honey Pancake',
    image:
      'https://firebasestorage.googleapis.com/v0/b/ttch-a46c0.appspot.com/o/image%2Fimages.jpg?alt=media&token=7eba2830-d343-4683-b769-adce17f1219c',
    level: 'Dễ',
    cookDuration: '15 phút',
    calories: 200
  },
  {
    id: 1,
    name: 'Honey Pancake',
    image:
      'https://firebasestorage.googleapis.com/v0/b/ttch-a46c0.appspot.com/o/image%2Fimages.jpg?alt=media&token=7eba2830-d343-4683-b769-adce17f1219c',
    level: 'Dễ',
    cookDuration: '15 phút',
    calories: 200
  }
];

const NewFoodSection = () => {
  return (
    <View style={{ gap: 10 }}>
      <Text style={{ color: '#1D1617', fontSize: 16, fontWeight: 'bold' }}>Mới</Text>

      <ScrollView horizontal>
        <View style={{ flexDirection: 'row', gap: 15 }}>
          {NEW_FOODS.map((item, index) => (
            <View key={index} style={{ width: 200, height: 240, position: 'relative' }}>
              <ImageBackground
                source={{
                  uri: item.image
                }}
                style={{
                  width: '100%',
                  height: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 16,
                  overflow: 'hidden'
                }}
                resizeMode='cover'
              >
                <View
                  style={{
                    position: 'absolute',
                    backgroundColor: 'rgba(0,0,0,0.5)'
                  }}
                />
                <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold', paddingTop: 90 }}>
                  {item.name}
                </Text>
                <Text
                  style={{ color: '#DDDADA', fontSize: 12, fontWeight: 'semibold' }}
                >{`${item.level} | ${item.cookDuration} | ${item.calories}`}</Text>

                <TouchableOpacity
                  style={{
                    width: 110,
                    height: 40,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 20,
                    borderRadius: 50,
                    backgroundColor: '#98B9FE'
                  }}
                >
                  <Text style={{ fontSize: 14, fontWeight: 'semibold', color: '#ffffff' }}>
                    Xem
                  </Text>
                </TouchableOpacity>
              </ImageBackground>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default NewFoodSection;
