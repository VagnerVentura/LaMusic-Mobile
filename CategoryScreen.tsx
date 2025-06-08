import React, { useEffect, useState, useRef } from 'react';
import { View, Text, FlatList, StyleSheet, Image, Animated, TouchableOpacity, SafeAreaView, Alert } from 'react-native';
import axios from 'axios';
import Header from './src/Header/Header';
import HeroHeader from './src/HeroHeader/HeroHeader';

const CustomButton = ({ title, onPress }) => {
  const colorValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(colorValue, {
          toValue: 1,
          duration: 3000,
          useNativeDriver: false,
        }),
        Animated.timing(colorValue, {
          toValue: 0,
          duration: 3000,
          useNativeDriver: false,
        }),
      ])
    ).start();
  }, [colorValue]);

  const backgroundColor = colorValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['#3d572f', '#96d674'],
  });

  return (
    <TouchableOpacity onPress={onPress}>
      <Animated.View style={[styles.btn, { backgroundColor }]}>
        <Text style={styles.btnText}>{title}</Text>
      </Animated.View>
    </TouchableOpacity>
  );
};

const CategoryScreen = ({ route, navigation }) => {
  const { categoryId, categoryName } = route.params;
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const BASE_URL = 'http://192.168.1.105:8080'; // Ajuste se necessário

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/categories/${categoryId}/products`);
        console.log('Produtos carregados:', JSON.stringify(response.data, null, 2));

        // Se a API retorna diretamente a lista:
        setProducts(response.data);
        // Se a API retorna { products: [...] }, use:
        // setProducts(response.data.products || []);
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
      }
    };

    fetchProducts();
  }, [categoryId]);

  const adicionarAoCarrinho = async (userId, productId, quantity) => {
    try {
      const response = await axios.post(`${BASE_URL}/cart/add`, {
        userId,
        productId,
        quantity,
      });
      console.log('Produto adicionado ao carrinho:', response.data);
    } catch (error) {
      console.error('Erro ao adicionar ao carrinho:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} cartCount={cart.length} />
      <HeroHeader navigation={navigation} />
      <Text style={styles.nome}>Produtos da Categoria: {categoryName}</Text>

      <FlatList
        data={products}
        keyExtractor={(item, index) => item?.id?.toString() || index.toString()}
        numColumns={2}
        renderItem={({ item }) => {
          const imageUrl =
            item?.images?.length > 0
              ? `${BASE_URL}${item.images[0].url}`
              : 'https://via.placeholder.com/150';

          return (
            <View style={styles.itemContainer}>
              <Image source={{ uri: imageUrl }} style={styles.productImage} />
              <Text style={styles.nome}>{item.name}</Text>
              <Text style={styles.preco}>R$ {item.price.toFixed(2)}</Text>
              <CustomButton
                title="Adicionar ao Carrinho"
                onPress={() => {
                  const userId = 'ID_DO_USUARIO'; // troque aqui se necessário
                  adicionarAoCarrinho(userId, item.id, 1);
                  setCart([...cart, { ...item, quantity: 1 }]);
                  Alert.alert("Sucesso", "Produto adicionado ao carrinho!");
                }}
              />
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center',
  },
  preco: {
    fontSize: 16,
    color: '#333',
    marginVertical: 5,
  },
  itemContainer: {
    flex: 1,
    margin: 10,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    elevation: 2,
  },
  productImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  btn: {
    backgroundColor: '#3d572f',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
  },
  btnText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default CategoryScreen;
