import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

// Produtos em promoção (corrigidos com IDs únicos)
const produtosPromocao = [
  {
    id: '1',
    nome: 'Bateria Eletrônica',
    precoOriginal: 3000,
    precoPromocional: 2500,
    imageUrl: require('../img/percussao/bateria1.png'),
  },
  {
    id: '2',
    nome: 'Teclado Musical',
    precoOriginal: 1500,
    precoPromocional: 1200,
    imageUrl: require('../img/teclas/piano1.png'),
  },
  {
    id: '3',
    nome: 'Bateria Eletrônica Yamaha',
    precoOriginal: 5000,
    precoPromocional: 4500,
    imageUrl: require('../img/colecao/Bateria Eletrônica Yamaha DTX402K.png'),
  },
  {
    id: '4',
    nome: 'Microfone',
    precoOriginal: 800,
    precoPromocional: 600,
    imageUrl: require('../img/audio/microfone1.png'), // certifique-se que a imagem existe
  },
];

const formatarPreco = (preco) => `R$${preco.toFixed(2).replace('.', ',')}`;

function PromocaoScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.tagPromo}>
        <FontAwesome5 name="tags" size={14} color="#fff" />
      </View>

      <Image source={item.imageUrl} style={styles.image} />

      <Text style={styles.nome}>{item.nome}</Text>

      <View style={styles.precoContainer}>
        <Text style={styles.precoOriginal}>{formatarPreco(item.precoOriginal)}</Text>
        <Text style={styles.precoPromocional}>{formatarPreco(item.precoPromocional)}</Text>
      </View>

      <TouchableOpacity style={styles.botaoComprar}>
        <Text style={styles.botaoTexto}>Adicionar ao Carrinho</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>🎯 Ofertas Especiais</Text>
      <FlatList
        data={produtosPromocao}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        numColumns={2}
        contentContainerStyle={styles.lista}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 10 },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 15,
    textAlign: 'center',
    color: '#333',
  },
  lista: {
    paddingBottom: 20,
  },
  card: {
    flex: 1,
    backgroundColor: '#fefefe',
    margin: 8,
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 1 },
  },
  tagPromo: {
    position: 'absolute',
    top: 8,
    left: 8,
    backgroundColor: '#3d572f',
    borderRadius: 8,
    padding: 5,
    zIndex: 1,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  nome: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
    marginBottom: 6,
  },
  precoContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  precoOriginal: {
    fontSize: 13,
    color: '#999',
    textDecorationLine: 'line-through',
  },
  precoPromocional: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3d572f',
  },
  botaoComprar: {
    backgroundColor: '#3d572f',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 6,
  },
  botaoTexto: {
    color: '#fff',
    fontSize: 13,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});

export default PromocaoScreen;