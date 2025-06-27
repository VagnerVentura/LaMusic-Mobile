import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import api from '../../../../api';

const PedidosScreen = () => {
  const navigation = useNavigation();
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    api.get('/orders/me')
      .then(response => setPedidos(response.data))
      .catch(error => {
        console.error('Erro ao carregar pedidos:', error);
        Alert.alert('Erro', 'Não foi possível carregar seus pedidos');
      });
  }, []);

  const renderPedidoItem = ({ item }) => {
    const dataFormatada = item.orderDate
      ? new Date(item.orderDate).toLocaleDateString('pt-BR')
      : 'Data não disponível';

    const descricao = item.items.length === 1
      ? item.items[0].productName
      : `${item.items[0].productName} + ${item.items.length - 1} itens`;

    return (
      <View style={styles.card}>
        <View style={styles.cardContent}>
          <View style={styles.row}>
            <Text style={styles.numero}>Pedido #{item.orderId.slice(0, 8)}</Text>
            <Text style={[styles.status, { color: '#f9a825' }]}>Pendente</Text>
          </View>

          <Text style={styles.descricao}>{descricao}</Text>
          <Text style={styles.info}>
            Total: R$ {Number(item.totalAmount).toFixed(2).replace('.', ',')}
          </Text>
          <Text style={styles.info}>Data: {dataFormatada}</Text>

          <TouchableOpacity
            style={styles.detalhesButton}
            onPress={() => navigation.navigate('DetalhesPedidoScreen', { pedido: item })}
          >
            <Text style={styles.detalhesText}>Ver Detalhes</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Meus Pedidos</Text>
      <FlatList
        data={pedidos}
        keyExtractor={(item) => item.orderId}
        renderItem={renderPedidoItem}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginVertical: 20,
  },
  list: {
    paddingBottom: 20,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  cardContent: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  numero: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  status: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  descricao: {
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 6,
    color: '#444',
  },
  info: {
    fontSize: 13,
    color: '#555',
  },
  detalhesButton: {
    marginTop: 10,
    alignSelf: 'flex-start',
    backgroundColor: '#2E7D32',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 6,
  },
  detalhesText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '500',
  },
});

export default PedidosScreen;
