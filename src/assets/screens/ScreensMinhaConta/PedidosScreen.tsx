import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, SafeAreaView } from 'react-native';

const pedidos = [
  {
    id: '1',
    data: '28 de Agosto',
    status: 'Entregue',
    entrega: 'Chegou no dia 29/08',
    descricao: 'Violão Clássico',
    imagem: 'https://example.com/violao.png', // Substitua por um link válido
  },
  {
    id: '2',
    data: '28 de Julho',
    status: 'Entregue',
    entrega: 'Chegou no dia 29/07',
    descricao: 'Teclado Arranjador X30',
    imagem: 'https://example.com/teclado.png', // Substitua por um link válido
  },
];

// Renderiza cada item do pedido
const renderPedidoItem = ({ item }) => (
  <View style={styles.card}>
    <Image source={{ uri: item.imagem }} style={styles.image} />
    <View style={styles.cardContent}>
      <Text style={styles.data}>{item.data}</Text>
      <Text style={styles.status}>{item.status}</Text>
      <Text style={styles.entrega}>{item.entrega}</Text>
      <Text style={styles.descricao}>{item.descricao}</Text>
    </View>
  </View>
);

const PedidosScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Pedidos</Text>
      <FlatList
        data={pedidos}
        keyExtractor={(item) => item.id}
        renderItem={renderPedidoItem}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 20,
  },
  list: {
    paddingBottom: 20,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 10,
  },
  cardContent: {
    flex: 1,
  },
  data: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  status: {
    fontSize: 14,
    color: '#28a745', // Verde para status entregue
    marginVertical: 2,
  },
  entrega: {
    fontSize: 12,
    color: '#777',
  },
  descricao: {
    fontSize: 14,
    fontWeight: '500',
    color: '#555',
  },
});

export default PedidosScreen;