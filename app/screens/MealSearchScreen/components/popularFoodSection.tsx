import { Image, Text, View } from 'react-native';

const POPULAR_FOODS = [
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

const PopularFoodSection = () => {
  return (
    <View style={{ gap: 10, paddingBottom: 60 }}>
      <Text style={{ color: '#1D1617', fontSize: 16, fontWeight: 'bold' }}>Phổ biến</Text>

      <View style={{ gap: 15 }}>
        {POPULAR_FOODS.map((item, index) => (
          <View
            key={index}
            style={{
              flexDirection: 'row',
              gap: 10,
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingRight: 15,
              borderRadius: 16,
              backgroundColor: '#FFFFFF',
              elevation: 3
            }}
          >
            <Image
              source={{ uri: item.image }}
              style={{ width: 80, height: 80, borderRadius: 16 }}
            />

            <View style={{ flex: 1 }}>
              <Text style={{ color: '#1D1617', fontSize: 14 }}>{item.name}</Text>
              <Text
                style={{ color: '#7B6F72', fontSize: 12, fontWeight: 'semibold' }}
              >{`${item.level} | ${item.cookDuration} | ${item.calories} kcal`}</Text>
            </View>

            <Image source={require('../../../../assets/images/arrow-circle.png')} />
          </View>
        ))}
      </View>
    </View>
  );
};

export default PopularFoodSection;
