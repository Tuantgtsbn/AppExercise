import { useNavigation } from 'expo-router';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import DetailNav from './DetailNav';

const Header = ({ title }: { title: string }) => {
  const navigation = useNavigation() as any;

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image style={{}} source={require('../../../../assets/images/left-arrow.png')} />
      </TouchableOpacity>

      <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#1D1617' }}>{title}</Text>

      <DetailNav />
    </View>
  );
};

export default Header;
