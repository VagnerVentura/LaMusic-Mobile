import React, { useEffect, useState, useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import api from '../../../api';
import { UserContext } from '../components/UserContext';

const BASE_URL = 'http://192.168.1.105:8080';

export default function CarrinhoScreen({ navigation }) {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(UserContext);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await api.get('/cart');
        const items = response.data.items || [];
        const produtosFormatados = items.map((item) => ({
          id: item.id,
          nome: item.product.name,
          preco: item.price,
          quantidade: item.quantity,
          imageUrl: `${BASE_URL}${item.product.images?.[0]?.imageUrl || '/placeholder.jpg'}`,
        }));
        setProdutos(produtosFormatados);
      } catch (error) {
        console.error('Erro ao buscar carrinho:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, []);

  const formatarPreco = (preco) => `R$${preco.toFixed(2).replace('.', ',')}`;

  const calcularTotal = () => {
    return produtos.reduce((total, item) => total + item.preco * item.quantidade, 0);
  };

  const removerItem = async (itemId) => {
    try {
      await api.delete(`/cart/items/${itemId}`);
      setProdutos((prev) => prev.filter((item) => item.id !== itemId));
    } catch (error) {
      console.error('Erro ao remover item:', error);
    }
  };

  const finalizarCompra = async () => {
    try {
      const response = await api.post('/cart/checkout');
      Alert.alert('Sucesso', 'Compra finalizada com sucesso!');
      setProdutos([]); // limpa o carrinho
      navigation.navigate('Menu');
    } catch (error) {
      console.error('Erro ao finalizar compra:', error);
      Alert.alert('Erro', 'Não foi possível finalizar a compra.');
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: item.imageUrl }} style={styles.image} />
        {item.quantidade > 1 && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>×{item.quantidade}</Text>
          </View>
        )}
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.nome}>{item.nome}</Text>
        <Text style={styles.preco}>{formatarPreco(item.preco)}</Text>
      </View>

      <TouchableOpacity onPress={() => removerItem(item.id)} style={styles.deleteButton}>
        <MaterialIcons name="delete" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator size="large" color="#3d572f" />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Seu Carrinho</Text>

      <FlatList
        data={produtos}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        renderItem={renderItem}
        contentContainerStyle={styles.listaCarrinho}
      />

      <View style={styles.resumoContainer}>
        <Text style={styles.totalText}>Total: {formatarPreco(calcularTotal())}</Text>

        <TouchableOpacity
          style={styles.btnFinalizar}
          onPress={() => {
            const total = calcularTotal();
            navigation.navigate('SelecionarEndereco', { total });
          }}
        >
          <Text style={styles.btnFinalizarText}>Finalizar Compra</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btnVoltar}
          onPress={() => navigation.navigate('Menu')}
        >
          <MaterialIcons name="arrow-back" size={20} color="#3d572f" />
          <Text style={styles.textoVoltar}>Continuar Comprando</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fefefe', padding: 16 },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 15,
    textAlign: 'center',
    color: '#333',
  },
  listaCarrinho: { paddingBottom: 20 },
  itemContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 12,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
    alignItems: 'center',
  },
  imageContainer: { position: 'relative' },
  image: {
    width: 70,
    height: 70,
    borderRadius: 6,
    marginRight: 12,
  },
  badge: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: '#3d572f',
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  badgeText: { color: '#fff', fontSize: 12, fontWeight: 'bold' },
  infoContainer: { flex: 1 },
  nome: { fontSize: 16, fontWeight: '600', color: '#333' },
  preco: { fontSize: 14, color: '#666', marginTop: 4 },
  deleteButton: { backgroundColor: '#ff4444', borderRadius: 6, padding: 6 },
  resumoContainer: {
    padding: 20,
    backgroundColor: '#f1f8e9',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    borderRadius: 8,
    marginTop: 10,
  },
  totalText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3d572f',
    marginBottom: 15,
    textAlign: 'center',
  },
  btnFinalizar: {
    backgroundColor: '#3d572f',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  btnFinalizarText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  btnVoltar: {
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  textoVoltar: {
    marginLeft: 8,
    color: '#3d572f',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
