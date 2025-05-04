import { useNavigation } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';

interface AddScheduleButtonProps {
  handleSubmit: () => Promise<void>;
}

const AddScheduleButton: React.FC<AddScheduleButtonProps> = props => {
  const { handleSubmit } = props;

  const navigation = useNavigation() as any;

  return (
    <View
      style={{
        position: 'absolute',
        left: 22,
        bottom: 20,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <TouchableOpacity
        onPress={handleSubmit}
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
        <Text style={{ color: '#ffffff', fontSize: 16, fontWeight: 'bold' }}>Lưu</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddScheduleButton;
