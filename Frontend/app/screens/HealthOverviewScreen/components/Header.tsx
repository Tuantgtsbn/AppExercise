import { Image, Text, TouchableOpacity, View } from 'react-native';
import DetailNav from './DetailNav';
import { useNavigation } from '@react-navigation/native';

const Header = ({ title }: { title: string }) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center'
      }}
    >
      <Text
        className='flex-1 text-center'
        style={{ fontSize: 16, fontWeight: 'bold', color: '#1D1617' }}
      >
        {title}
      </Text>

      <DetailNav />
    </View>
  );
};

export default Header;
