import React from 'react';
import {Modal, View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const SelectionModal = ({visible, data, onSelect, onClose}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          {data.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.item}
              onPress={() => onSelect(item)}>
              <Text style={styles.textStyle}>{item}</Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity style={styles.button} onPress={onClose}>
            <Text style={styles.textStyle}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  item: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    textAlign: 'center',
  },
  button: {
    marginTop: 10,
    backgroundColor: '#F194FF',
  },
});

export default SelectionModal;
