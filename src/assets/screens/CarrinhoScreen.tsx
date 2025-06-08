import React, { useState, useContext, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, SafeAreaView, Alert } from 'react-native';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons'; 
import { UserContext } from '../../../UserContext';
import api from '../../../api';

const produtosCarrinho = [
  { id: '1', nome: 'Guitarra', preco: 200, imageUrl: require ('../img/cordas/guitarra1.jpg') },
  { id: '2', nome: 'Violão', preco: 300, imageUrl:require ('../img/cordas/violao1.png') },
];


const formatarPreco = (preco) => `R$${preco.toFixed(2).replace('.', ',')}`;

function CarrinhoScreen({ navigation }) {
  const [produtos, setProdutos] = useState(produtosCarrinho);

 
  const calcularTotal = () => {
    return produtos.reduce((total, item) => total + item.preco, 0);
  };

 
  const removerItem = (id) => {
    const novosProdutos = produtos.filter((item) => item.id !== id);
    setProdutos(novosProdutos);
  };

 
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.imageUrl} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.nome}>{item.nome}</Text>
        <Text style={styles.preco}>{formatarPreco(item.preco)}</Text>
      </View>
      <TouchableOpacity onPress={() => removerItem(item.id)}>
        <MaterialIcons name="delete" size={24} color="red" />
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Seu Carrinho</Text>

      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        style={styles.listaCarrinho}
      />

      <View style={styles.resumoContainer}>
        <Text style={styles.totalText}>Total: {formatarPreco(calcularTotal())}</Text>
        <TouchableOpacity style={styles.btnFinalizar} onPress={() => Alert.alert('Compra finalizada!')}>
          <Text style={styles.btnFinalizarText}>Finalizar Compra</Text>
        </TouchableOpacity>
      </View>
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
  listaCarrinho: {
    flexGrow: 0,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  image: {
    width: 60,
    height: 60,
    marginRight: 10,
  },
  infoContainer: {
    flex: 1,
  },
  nome: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  preco: {
    fontSize: 14,
    color: '#888',
  },
  resumoContainer: {
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    backgroundColor: '#f9f9f9',
  },
  totalText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3d572f', 
    marginBottom: 10,
    textAlign: 'center',
  },
  btnFinalizar: {
    backgroundColor: '#3d572f', 
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  btnFinalizarText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CarrinhoScreen;

