import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ModalDrawer = ({ visible, onClose }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalView}>
        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
          <Icon name="close" size={30} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.menuItem}>Minha Conta</Text>
        <Text style={styles.menuItem}>Buscar</Text>
        {/* Adicione mais itens de menu conforme necessário */}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    backgroundColor: '#8BC34A',
    padding: 20,
    alignItems: 'flex-start',
  },
  closeButton: {
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  menuItem: {
    fontSize: 20,
    color: '#fff',
    marginVertical: 10,
  },
});

export default ModalDrawer;