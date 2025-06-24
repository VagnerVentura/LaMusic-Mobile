import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const cartoes = [
  {
    id: '1',
    bandeira: 'VISA',
    numero: '**** 0883',
    vencimento: '07/2026',
    logo: 'https://example.com/visa.png',
  },
  {
    id: '2',
    bandeira: 'VISA',
    numero: '**** 0789',
    vencimento: '07/2020',
    logo: 'https://example.com/visa.png',
  },
  {
    id: '3',
    bandeira: 'MASTER',
    numero: '**** 0688',
    vencimento: '07/2027',
    logo: 'https://example.com/mastercard.png',
  },
];

const getBandeiraIcon = (bandeira) => {
  switch (bandeira.toUpperCase()) {
    case 'VISA':
      return <FontAwesome name="cc-visa" size={18} color="#1a1f71" style={styles.bandeiraIcon} />;
    case 'MASTER':
    case 'MASTERCARD':
      return <FontAwesome name="cc-mastercard" size={18} color="#eb001b" style={styles.bandeiraIcon} />;
    default:
      return <Icon name="credit-card" size={18} color="#555" style={styles.bandeiraIcon} />;
  }
};

const renderCartaoItem = ({ item }) => (
  <View style={styles.card}>
    <Image source={{ uri: item.logo }} style={styles.image} />
    <View style={styles.cardContent}>
      <Text style={styles.numero}>{item.numero}</Text>
      <View style={styles.bandeiraRow}>
        {getBandeiraIcon(item.bandeira)}
        <Text style={styles.bandeira}>{item.bandeira}</Text>
      </View>
      <Text style={styles.vencimento}>Vencimento {item.vencimento}</Text>
    </View>
    <TouchableOpacity style={styles.deleteButton}>
      <Icon name="delete" size={24} color="#ff4444" />
    </TouchableOpacity>
  </View>
);

const CartoesScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Cartões</Text>
      <FlatList
        data={cartoes}
        keyExtractor={(item) => item.id}
        renderItem={renderCartaoItem}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 20,
  },
  list: {
    paddingBottom: 20,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  cardContent: {
    flex: 1,
  },
  numero: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  bandeiraRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 2,
  },
  bandeiraIcon: {
    marginRight: 6,
  },
  bandeira: {
    fontSize: 14,
    color: '#777',
  },
  vencimento: {
    fontSize: 12,
    color: '#777',
  },
  deleteButton: {
    padding: 5,
  },
});

export default CartoesScreen;