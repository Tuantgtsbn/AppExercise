import { useState } from 'react';
import { Image, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MONTHS } from '../utils/constant';

interface SelectMonth2ModalProps {
  month2: number;
  setMonth2: (month: number) => void;
}

const SelectMonth2Modal: React.FC<SelectMonth2ModalProps> = props => {
  const { month2, setMonth2 } = props;

  const [isOpen, setIsOpen] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState(month2);

  const handleChangeMonth1 = (month: number) => {
    setSelectedMonth(month);
  };

  const handleApply = () => {
    setMonth2(selectedMonth);
    setIsOpen(false);
  };

  return (
    <View>
      <TouchableOpacity onPress={() => setIsOpen(true)}>
        <View
          style={{
            height: 48,
            ...styles.row,
            padding: 10,
            borderRadius: 20,
            backgroundColor: '#F7F8F8'
          }}
        >
          <View
            style={{
              ...styles.row,
              gap: 10
            }}
          >
            <Image source={require('../../../../assets/images/calendar-icon.png')} />
            <Text style={styles.text}>Chọn tháng 2</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.text}>Tháng {`${month2}`}</Text>
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
            <Text style={styles.dropdownLabel}>Chọn tháng</Text>
            <ScrollView style={{ maxHeight: 300 }}>
              {MONTHS.map((month, index) => (
                <TouchableOpacity
                  key={index}
                  style={[styles.monthOption, selectedMonth === index + 1 && styles.selectedOption]}
                  onPress={() => handleChangeMonth1(index + 1)}
                >
                  <Text style={styles.optionText}>{month}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
            <View style={styles.buttonRow}>
              <TouchableOpacity style={styles.buttonCancel} onPress={() => setIsOpen(false)}>
                <Text style={styles.buttonText}>Huỷ</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonApply} onPress={() => handleApply()}>
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
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  text: { color: '#7B6F72', fontSize: 10 },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  dropdown: {
    backgroundColor: '#fff',
    width: 300,
    padding: 16,
    borderRadius: 12,
    elevation: 3
  },
  dropdownLabel: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10
  },
  monthOption: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee'
  },
  selectedOption: {
    backgroundColor: '#e0f0ff'
  },
  optionText: {
    fontSize: 14,
    color: '#333'
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 16,
    gap: 10
  },
  buttonCancel: {
    padding: 10,
    backgroundColor: '#ccc',
    borderRadius: 6
  },
  buttonApply: {
    padding: 10,
    backgroundColor: '#98BAFE',
    borderRadius: 6
  },
  buttonText: {
    color: '#fff'
  }
});

export default SelectMonth2Modal;
