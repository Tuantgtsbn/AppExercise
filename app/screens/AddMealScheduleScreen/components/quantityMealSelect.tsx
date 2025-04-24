import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, TextInput, Modal } from 'react-native';

const QuantityMealSelect: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [quantity, setQuantity] = useState('1');

  const handleChangeQuantity = (text: string) => {
    if (/^\d*$/.test(text)) {
      setQuantity(text);
    }
  };

  return (
    <View>
      <TouchableOpacity onPress={() => setIsOpen(true)}>
        <View style={styles.selectBox}>
          <Image source={require('../../../../assets/images/barbel-icon.png')} />
          <Text style={styles.label}>Số lượng</Text>
          <View style={styles.valueBox}>
            <Text style={styles.valueText}>{quantity}</Text>
            <Image source={require('../../../../assets/images/arrow-right-icon.png')} />
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
            <Text style={styles.dropdownLabel}>Số lượng</Text>
            <TextInput
              style={styles.input}
              value={quantity}
              onChangeText={handleChangeQuantity}
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

export default QuantityMealSelect;
