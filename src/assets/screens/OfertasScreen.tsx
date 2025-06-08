import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; // Ícone para representar a promoção

// Produtos em promoção (exemplo)
const produtosPromocao = [
  { id: '1', nome: 'Bateria Eletrônica', precoOriginal: 3000, precoPromocional: 2500, imageUrl: require ('../img/percussao/bateria1.png') },
  { id: '2', nome: 'Teclado Musical', precoOriginal: 1500, precoPromocional: 1200, imageUrl: require ('../img/teclas/piano1.png') },
  { id: '3', nome: 'Bateria Eletrônica Yamaha', precoOriginal: 5000, precoPromocional: 4500, imageUrl: require ('../img/colecao/Bateria Eletrônica Yamaha DTX402K.png')},
  { id: '3', nome: 'Bateria Eletrônica Yamaha', precoOriginal: 5000, precoPromocional: 4500, imageUrl: require ('../img/colecao/Bateria Eletrônica Yamaha DTX402K.png')},
  { id: '3', nome: 'Bateria Eletrônica Yamaha', precoOriginal: 5000, precoPromocional: 4500, imageUrl: require ('../img/colecao/Bateria Eletrônica Yamaha DTX402K.png')},
  { id: '3', nome: 'Bateria Eletrônica Yamaha', precoOriginal: 5000, precoPromocional: 4500, imageUrl: require ('../img/colecao/Bateria Eletrônica Yamaha DTX402K.png')},
  { id: '4', nome: 'Microfone', precoOriginal: 800, precoPromocional: 600, imageUrl: 'link_da_imagem' },
];


const formatarPreco = (preco) => `R$${preco.toFixed(2).replace('.', ',')}`;

function PromocaoScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.imageUrl} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.nome}>{item.nome}</Text>
        <View style={styles.precoContainer}>
          <Text style={styles.precoOriginal}>{formatarPreco(item.precoOriginal)}</Text>
          <Text style={styles.precoPromocional}>{formatarPreco(item.precoPromocional)}</Text>
        </View>
        <TouchableOpacity style={styles.btnAdicionar} onPress={() => {/* Adicionar ao carrinho */}}>
          <Text style={styles.btnAdicionarText}>Adicionar ao Carrinho</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Ofertas Especiais</Text>
      
      <FlatList
        data={produtosPromocao}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        numColumns={2} 
        style={styles.listaPromocao}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 15,
    textAlign: 'center',
    color: '#333',
  },
  listaPromocao: {
    flexGrow: 0,
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    margin: 10,
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 8,
    elevation: 2,
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 10,
  },
  infoContainer: {
    alignItems: 'center',
  },
  nome: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  precoContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 10,
  },
  precoOriginal: {
    fontSize: 14,
    color: '#888',
    textDecorationLine: 'line-through',
  },
  precoPromocional: {
    fontSize: 16,
    color: '#3d572f', 
    fontWeight: 'bold',
  },
  btnAdicionar: {
    backgroundColor: '#3d572f', 
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
  },
  btnAdicionarText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});

export default PromocaoScreen;
