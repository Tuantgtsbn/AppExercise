import { useState } from 'react';
import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const RepeatSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<'none' | 'weekly'>('weekly');
  const [tempOption, setTempOption] = useState<'none' | 'weekly'>('weekly');

  const handleApply = () => {
    setSelectedOption(tempOption);
    setIsOpen(false);
  };

  const handleCancel = () => {
    setTempOption(selectedOption);
    setIsOpen(false);
  };

  return (
    <View>
      <TouchableOpacity onPress={() => setIsOpen(true)} style={styles.selectBox}>
        <Image source={require('../../../../assets/images/repeat-icon.png')} />
        <Text style={styles.label}>Lặp lại</Text>
        <View style={styles.valueBox}>
          <Text style={styles.valueText}>
            {selectedOption === 'weekly' ? 'Hàng tuần' : 'Không'}
          </Text>
          <Image source={require('../../../../assets/images/arrow-right-icon.png')} />
        </View>
      </TouchableOpacity>

      <Modal animationType='fade' transparent visible={isOpen} onRequestClose={handleCancel}>
        <View style={styles.modalOverlay}>
          <View style={styles.dropdown}>
            <Text style={styles.dropdownLabel}>Chọn kiểu lặp lại</Text>

            <TouchableOpacity
              style={{
                padding: 12,
                backgroundColor: tempOption === 'none' ? '#EEE' : 'transparent',
                borderRadius: 10,
                marginBottom: 10
              }}
              onPress={() => setTempOption('none')}
            >
              <Text>Không</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                padding: 12,
                backgroundColor: tempOption === 'weekly' ? '#EEE' : 'transparent',
                borderRadius: 10
              }}
              onPress={() => setTempOption('weekly')}
            >
              <Text>Hàng tuần</Text>
            </TouchableOpacity>

            <View style={styles.buttonRow}>
              <TouchableOpacity style={styles.buttonCancel} onPress={handleCancel}>
                <Text>Huỷ</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonApply} onPress={handleApply}>
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
  buttonRow: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'flex-end',
    marginTop: 20
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

export default RepeatSelector;
