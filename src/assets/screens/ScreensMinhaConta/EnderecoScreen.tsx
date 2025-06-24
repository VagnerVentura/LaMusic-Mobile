import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const enderecos = [
  {
    id: '1',
    label: 'Casa',
    endereco: 'Rua das Flores, 123, Bairro Jardim, Cidade ABC',
  },
  {
    id: '2',
    label: 'Trabalho',
    endereco: 'Avenida Central, 456, Centro, Cidade XYZ',
  },
  {
    id: '3',
    label: 'Casa de Praia',
    endereco: 'Rua do Sol, 789, Praia Azul, Cidade Litoral',
  },
];

function EnderecosScreen({ navigation }) {
  const renderEnderecoItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.leftIcon}>
        <MaterialIcons name="location-on" size={24} color="#3d572f" />
      </View>

      <View style={styles.enderecoText}>
        <Text style={styles.enderecoLabel}>{item.label}</Text>
        <Text style={styles.enderecoDescricao}>{item.endereco}</Text>
      </View>

      <TouchableOpacity style={styles.editIcon}>
        <MaterialIcons name="edit" size={22} color="#3d572f" />
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Meus Endereços</Text>

      <FlatList
        data={enderecos}
        keyExtractor={(item) => item.id}
        renderItem={renderEnderecoItem}
        contentContainerStyle={styles.enderecoList}
      />

      <TouchableOpacity style={styles.addButton}>
        <MaterialIcons name="add-location-alt" size={20} color="#fff" />
        <Text style={styles.addButtonText}>Adicionar Novo Endereço</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingHorizontal: 16 },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
    color: '#333',
    textAlign: 'center',
  },
  enderecoList: {
    paddingBottom: 20,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 1 },
    elevation: 1,
    alignItems: 'center',
  },
  leftIcon: {
    marginRight: 10,
  },
  enderecoText: {
    flex: 1,
  },
  enderecoLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 2,
  },
  enderecoDescricao: {
    fontSize: 14,
    color: '#666',
  },
  editIcon: {
    padding: 4,
  },
  addButton: {
    backgroundColor: '#3d572f',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    borderRadius: 8,
    marginVertical: 20,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 8,
    textTransform: 'uppercase',
  },
});

export default EnderecosScreen;