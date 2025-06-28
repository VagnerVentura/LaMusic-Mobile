import React, { useEffect, useState, useRef, useContext } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  Animated,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from 'react-native';
import Header from './src/Header/Header';
import HeroHeader from './src/HeroHeader/HeroHeader';
import { UserContext } from './src/assets/components/UserContext';
import api from './api';

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
  const BASE_URL = 'http://192.168.1.105:8080'; // Altere conforme necessário

  const { user } = useContext(UserContext);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get(`/categories/${categoryId}/products`);
        console.log('Produtos carregados:', JSON.stringify(response.data, null, 2));
        setProducts(response.data);
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
        Alert.alert('Erro', 'Não foi possível carregar os produtos.');
      }
    };

    fetchProducts();
  }, [categoryId]);

  const adicionarAoCarrinho = async (productId, quantity) => {
    try {
      await api.post('/cart/items', {
        productId,
        quantity,
      });

      setCart((prevCart) => [...prevCart, { productId, quantity }]);
      Alert.alert('Sucesso', 'Produto adicionado ao carrinho!');
    } catch (error) {
      console.error('Erro ao adicionar ao carrinho:', error.response?.data || error.message);
      Alert.alert('Erro', 'Não foi possível adicionar ao carrinho.');
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
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => {
          const imageUrl = item?.imageUrl
            ? `${BASE_URL}${item.imageUrl}`
            : 'https://via.placeholder.com/150';

          return (
            <View style={styles.itemContainer}>
              <TouchableOpacity onPress={() => navigation.navigate('ProductDetail', { product: item })}>
                <Image source={{ uri: imageUrl }} style={styles.productImage} />
                <Text style={styles.nome}>{item.name}</Text>
                <Text style={styles.preco}>R$ {item.price.toFixed(2)}</Text>
              </TouchableOpacity>

              <CustomButton
                title="Adicionar ao Carrinho"
                onPress={() => adicionarAoCarrinho(item.id, 1)}
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
  itemContainer: {
    flex: 1,
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 12,
    elevation: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  productImage: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  nome: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 6,
  },
  preco: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
  },
  btn: {
    backgroundColor: '#3d572f',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
    marginTop: 8,
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
