import React, { useEffect, useState, useRef } from 'react';
import { SafeAreaView, FlatList, View, Image, Text, StyleSheet, Animated, TouchableOpacity } from 'react-native';
import Header from '../../../Header/Header'; // Importe o Header já criado
import HeroHeader from '../../../HeroHeader/HeroHeader'; // Importe o HeroHeader com o menu
import axios from 'axios';

// Componente do botão com animação de transição de cores
const CustomButton = ({ title, onPress }) => {
  const colorValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Animação de loop para alternar entre duas cores
    Animated.loop(
      Animated.sequence([
        Animated.timing(colorValue, {
          toValue: 1,
          duration: 3000, // Tempo para alternar para a cor alternativa
          useNativeDriver: false,
        }),
        Animated.timing(colorValue, {
          toValue: 0,
          duration: 3000, // Tempo para voltar para a cor original
          useNativeDriver: false,
        }),
      ])
    ).start();
  }, [colorValue]);

  const backgroundColor = colorValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['#3d572f', '#96d674'], // As cores da transição
  });

  return (
    <TouchableOpacity onPress={onPress}>
      <Animated.View style={[styles.btn, { backgroundColor }]}>
        <Text style={styles.btnText}>{title}</Text>
      </Animated.View>
    </TouchableOpacity>
  );
};

const CordasScreen = ({ route }) => {
  const { categoryId } = route.params; // Recebe o ID da categoria como parâmetro de navegação
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCategoryProducts = async () => {
    try {
      // Endpoint ajustado para buscar os produtos da categoria pelo ID
      const response = await axios.get(`http://192.168.1.106:8080/categories/${categoryId}`);
      setProducts(response.data); // Atualiza o estado com os produtos
    } catch (error) {
      console.error('Erro ao buscar produtos da categoria:', error);
    } finally {
      setLoading(false); // Indica que a busca foi concluída
    }
  };

  useEffect(() => {
    fetchCategoryProducts();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Carregando produtos...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <HeroHeader /> {/* Exemplo de utilização do HeroHeader */}
      <Text style={styles.title}>Produtos da Categoria</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.productItem}>
            <Image source={{ uri: item.imageUrl }} style={styles.productImage} />
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productDescription}>{item.description}</Text>
            <Text style={styles.productPrice}>R$ {item.price.toFixed(2)}</Text>
            <Text style={styles.productStock}>Estoque: {item.stock}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 18,
    color: '#888',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  productItem: {
    marginBottom: 15,
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  productDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3d572f',
  },
  productStock: {
    fontSize: 14,
    color: '#888',
  },
  productImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    marginBottom: 10,
    borderRadius: 8,
  },
  btn: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default CordasScreen;
