import { useState } from 'react';
import { Image, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

interface UpdateWeightModalProps {
  weight: number;
  setWeight: (weight: number) => void;
}

const UpdateWeightModal: React.FC<UpdateWeightModalProps> = props => {
  const { weight, setWeight } = props;

  const [isOpen, setIsOpen] = useState(false);

  const handleChangeWeight = (text: string) => {
    if (/^\d*$/.test(text)) {
      setWeight(Number(text));
    }
  };

  return (
    <View>
      <TouchableOpacity onPress={() => setIsOpen(true)}>
        <View
          style={{
            width: '100%',
            height: 50,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 16,
            borderRadius: 16,
            backgroundColor: '#F7F8F8'
          }}
        >
          <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center' }}>
            <Image source={require('../../../../assets/images/weight-scale.png')} />
            <Text style={{ color: '#7B6F72', fontSize: 12 }}>Cân nặng</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ color: '#ADA4A5', fontSize: 10 }}>{weight}kg</Text>
            <Image source={require('../../../../assets/images/right-arrow.png')} />
          </View>
        </View>
      </TouchableOpacity>

      <Modal
        animationType='fade'
        transparent
        visible={isOpen}
        onRequestClose={() => setIsOpen(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.dropdown}>
            <Text style={styles.dropdownLabel}>Chiều cao</Text>
            <TextInput
              style={styles.input}
              value={weight.toString()}
              onChangeText={handleChangeWeight}
              keyboardType='numeric'
              maxLength={3}
              placeholder='Nhập số lượng'
            />
            <View style={styles.buttonRow}>
              <TouchableOpacity style={styles.buttonCancel} onPress={() => setIsOpen(false)}>
                <Text style={styles.buttonText}>Huỷ</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonApply} onPress={() => setIsOpen(false)}>
                <Text style={styles.buttonText}>Áp dụng</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  selectBox: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    borderRadius: 15,
    backgroundColor: '#F7F8F8'
  },
  label: {
    flex: 1,
    color: '#7B6F72',
    fontSize: 14
  },
  valueBox: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center'
  },
  valueText: {
    color: '#7B6F72',
    fontSize: 14
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  dropdown: {
    width: 300,
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10
  },
  dropdownLabel: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10
  },
  input: {
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
    marginBottom: 20
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'flex-end'
  },
  buttonCancel: {
    backgroundColor: '#DDD',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10
  },
  buttonApply: {
    backgroundColor: '#98BAFE',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold'
  }
});

export default UpdateWeightModal;
