import React, { useRef, useEffect } from 'react';
import { TouchableOpacity, View, Text, FlatList, StyleSheet, Image, SafeAreaView, Animated } from 'react-native';
import Header from '../../../Header/Header'; // Importe o Header já criado
import HeroHeader from '../../../HeroHeader/HeroHeader'; // Importe o HeroHeader com o menu

const produtos = [
  { id: '1', nome: 'Guitarra', preco: 'R$200', imageUrl: require('../../img/cordas/violao1.png') },
  { id: '2', nome: 'Violão', preco: 'R$300', imageUrl: require('../../img/cordas/violao2.png') },
  { id: '3', nome: 'Violão', preco: 'R$1.289,00', imageUrl: require('../../img/cordas/violao2.png') },
  { id: '4', nome: 'Guitarra', preco: 'R$4.147,00', imageUrl: require('../../img/cordas/guitarra3.jpg') },
  { id: '5', nome: 'Violão', preco: 'R$300', imageUrl: require('../../img/cordas/violao1.png') },
  { id: '6', nome: 'Violão', preco: 'R$1.289,00', imageUrl: require('../../img/cordas/violao2.png') },
  { id: '7', nome: 'Violão', preco: 'R$300', imageUrl: require('../../img/cordas/violao1.png') },
  { id: '8', nome: 'Violão', preco: 'R$1.289,00', imageUrl: require('../../img/cordas/violao2.png') },
];

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

function CategoriaScreen({ navigation }) {
  // Função para adicionar produto ao carrinho
  const adicionarAoCarrinho = (produto) => {
    // Aqui você pode implementar a lógica de adicionar o produto ao carrinho
    console.log('Produto adicionado:', produto.nome);
    // Você pode adicionar o produto ao estado global ou ao contexto do carrinho
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <HeroHeader navigation={navigation} />

      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id}
        numColumns={2} // Para mostrar dois produtos por linha
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={item.imageUrl} style={styles.image} />
            <Text style={styles.nome}>{item.nome}</Text>
            <Text style={styles.preco}>{item.preco}</Text>
            <CustomButton
              title="Adicionar ao Carrinho"
              onPress={() => adicionarAoCarrinho(item)}
            />
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: '100%',
    height: 30,
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 10,
    borderWidth: 0,
    elevation: 3, // Adiciona sombra ao botão
  },
  btnText: {
    color: '#ffffff', // var(--white-color)
    fontSize: 10,
    fontWeight: '800', // var(--font-extrabold)
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  itemContainer: {
    flex: 1,
    alignItems: 'center',
    margin: 10,
    backgroundColor: '#f9f9f9',
    padding: 2,
    borderRadius: 8,
    elevation: 2, // Sombra para os itens
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  nome: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  preco: {
    fontSize: 14,
    color: '#888',
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default CategoriaScreen;
