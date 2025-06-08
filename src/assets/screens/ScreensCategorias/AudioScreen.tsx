import React, { useRef, useEffect } from 'react';
import { TouchableOpacity, View, Text, FlatList, StyleSheet, Image, SafeAreaView, Animated } from 'react-native';
import Header from '../../../Header/Header'; // Importe o Header já criado
import HeroHeader from '../../../HeroHeader/HeroHeader'; // Importe o HeroHeader com o menu

const produtos = [
  { id: '1', nome: 'Microfone', preco: 'R$200', imageUrl: require ('../../img/audio/microfone1.png') },
  { id: '2', nome: 'Microfone', preco: 'R$300', imageUrl: require('../../img/audio/microfone2.png') },
  { id: '3', nome: 'Microfone', preco: 'R$1.289,00', imageUrl: require('../../img/audio/microfone2.png')},
  { id: '4', nome: 'Microfone', preco: 'R$4.147,00', imageUrl: require ('../../img/audio/microfone2.png')},
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
            <CustomButton title="Adicionar ao Carrinho" onPress={() => {/* Função para adicionar ao carrinho */}} />
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
    borderWidth: 0,
    elevation: 3, // Adiciona sombra ao botão
  },
  btnText: {
    color: '#ffffff', // var(--white-color)
    fontSize: 14,
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
    padding: 10,
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
