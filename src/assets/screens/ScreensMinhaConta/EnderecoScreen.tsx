import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
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

// Função para renderizar cada endereço
const renderEnderecoItem = ({ item }) => (
  <View style={styles.enderecoItem}>
    <View style={styles.enderecoText}>
      <Text style={styles.enderecoLabel}>{item.label}</Text>
      <Text style={styles.enderecoDescricao}>{item.endereco}</Text>
    </View>
    <TouchableOpacity>
      <MaterialIcons name="edit" size={24} color="#555" />
    </TouchableOpacity>
  </View>
);

function EnderecosScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      {/* Título da tela */}
      <Text style={styles.title}>Endereços</Text>

      {/* Lista de endereços */}
      <FlatList
        data={enderecos}
        keyExtractor={(item) => item.id}
        renderItem={renderEnderecoItem}
        style={styles.enderecoList}
      />

      {/* Botão para adicionar novo endereço */}
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>Adicionar Novo Endereço</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 20,
    color: '#333',
  },
  enderecoList: {
    marginBottom: 20,
  },
  enderecoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  enderecoText: {
    flex: 1,
    marginRight: 10,
  },
  enderecoLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  enderecoDescricao: {
    fontSize: 14,
    color: '#777',
  },
  addButton: {
    backgroundColor: '#3d572f',
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 5,
    margin:30
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default EnderecosScreen;