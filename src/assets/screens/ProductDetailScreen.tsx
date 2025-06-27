// ProductDetailScreen.js
import React,  { useContext } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import api from '../../../api';
import { UserContext } from '../components/UserContext';

export default function ProductDetailScreen({ route, navigation }) {
  const { product } = route.params;
  const { user } = useContext(UserContext); // Garante que o token esteja lá

  const imageUrl = product?.imageUrl
    ? `http://192.168.1.105:8080${product.imageUrl}`
    : 'https://via.placeholder.com/300';

  const handleAddToCart = async () => {
    try {
      await api.post('/cart/items', {
        productId: product.id,
        quantity: 1,
      });

      Alert.alert('Sucesso', 'Produto adicionado ao carrinho!');
      navigation.goBack();
    } catch (error) {
      console.error('Erro ao adicionar ao carrinho:', error.response?.data || error.message);
      Alert.alert('Erro', 'Não foi possível adicionar ao carrinho');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>R$ {product.price.toFixed(2)}</Text>
        <Text style={styles.description}>{product.description}</Text>

        <TouchableOpacity style={styles.button} onPress={handleAddToCart}>
          <Text style={styles.buttonText}>Adicionar ao Carrinho</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 280,
    resizeMode: 'contain',
    borderRadius: 12,
    backgroundColor: '#f0f0f0',
  },
  infoContainer: {
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
    textAlign: 'center',
  },
  price: {
    fontSize: 20,
    color: '#3d572f',
    marginBottom: 12,
  },
  description: {
    fontSize: 15,
    color: '#666',
    textAlign: 'center',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#3d572f',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    elevation: 2,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
