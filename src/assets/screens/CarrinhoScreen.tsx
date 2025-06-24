import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const produtosCarrinho = [
  { id: '1', nome: 'Guitarra', preco: 200, imageUrl: require('../img/cordas/guitarra1.jpg') },
  { id: '2', nome: 'Violão', preco: 300, imageUrl: require('../img/cordas/violao1.png') },
  { id: '3', nome: 'Violão', preco: 300, imageUrl: require('../img/cordas/violao1.png') },
];

const formatarPreco = (preco) => `R$${preco.toFixed(2).replace('.', ',')}`;

export default function CarrinhoScreen({ navigation }) {
  const [produtos, setProdutos] = useState(produtosCarrinho);

  const calcularTotal = () => {
    return produtos.reduce((total, item) => total + item.preco, 0);
  };

  const removerItem = (id) => {
    const index = produtos.findIndex((item) => item.id === id);
    if (index !== -1) {
      const novaLista = [...produtos];
      novaLista.splice(index, 1);
      setProdutos(novaLista);
    }
  };

  const renderItem = ({ item }) => {
    const quantidade = produtos.filter((p) => p.id === item.id).length;

    const icone =
      item.nome.toLowerCase().includes('guitarra')
        ? 'guitar'
        : item.nome.toLowerCase().includes('violão')
          ? 'music-note'
          : 'headphones';

    return (
      <View style={styles.itemContainer}>
        <View style={styles.imageContainer}>
          <Image source={item.imageUrl} style={styles.image} />
          {quantidade > 1 && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>×{quantidade}</Text>
            </View>
          )}
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.nome}>{item.nome}</Text>
          <Text style={styles.preco}>{formatarPreco(item.preco)}</Text>
        </View>

        {/* <MaterialIcons name={icone} size={22} color="#3d572f" style={{ marginRight: 8 }} /> */}

        <TouchableOpacity onPress={() => removerItem(item.id)} style={styles.deleteButton}>
          <MaterialIcons name="delete" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    );
  };

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
          onPress={() => navigation.navigate('Pagamento', { total: calcularTotal() })}
        >
          <Text style={styles.btnFinalizarText}>Finalizar Compra</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btnVoltar}
          onPress={() => navigation.navigate('Menu')} // Altere para a rota que representa seu catálogo/tab principal
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
  listaCarrinho: {
    paddingBottom: 20,
  },
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
  imageContainer: {
    position: 'relative',
  },
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
  badgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  infoContainer: {
    flex: 1,
  },
  nome: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  preco: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  deleteButton: {
    backgroundColor: '#ff4444',
    borderRadius: 6,
    padding: 6,
  },
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
  btnFinalizarText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
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
