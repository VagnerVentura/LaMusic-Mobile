import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons'; 
import Header from '../../Header/Header'; 
import { useRoute, useNavigation } from '@react-navigation/native';

const menuItems = [
  { id: '1', icon: 'id-card', label: 'Dados pessoais', description: 'Informações dos seus documentos', screen: 'DadosPessoais' },
  { id: '2', icon: 'home', label: 'Endereços', description: 'Endereços salvos na sua conta', screen: 'Endereços' },
  { id: '3', icon: 'history', label: 'Pedidos', description: 'Histórico de Compras', screen: 'Pedidos' },
  { id: '4', icon: 'credit-card', label: 'Cartões', description: 'Cartões salvos na sua conta', screen: 'Cartoes' },
];

function MinhaContaScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  
  
  const [user, setUser] = useState({
    nome: '',
    email: '',
    
  });

  useEffect(() => {
    
    const loggedUser = route.params?.user; // `user` seria o parâmetro que você passou ao navegar para essa tela
    if (loggedUser) {
      setUser(loggedUser);  
    }
  }, [route.params]);

  const renderMenuItem = ({ item }) => (
    <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate(item.screen)}>
      <View style={styles.menuItemContent}>
        <FontAwesome5 name={item.icon} size={24} color="#555" />
        <View style={styles.menuText}>
          <Text style={styles.menuLabel}>{item.label}</Text>
          <Text style={styles.menuDescription}>{item.description}</Text>
        </View>
      </View>
      <MaterialIcons name="keyboard-arrow-right" size={24} color="#555" />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation}/> 
      <View style={styles.header}>
        {/* <Text style={styles.greeting}>Olá, {user.nome}</Text> */}
        <TouchableOpacity style={styles.signOutButton}>
          {/* <Text style={styles.signOutText}>Sair</Text> */}
        </TouchableOpacity>
      </View>

      {/* Seção "Minha Conta" */}
      <Text style={styles.sectionTitle}>Minha Conta</Text>

      {/* Lista de opções */}
      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id}
        renderItem={renderMenuItem}
        style={styles.menuList}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#3d572f', // Cor verde do cabeçalho
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  greeting: {
    color: '#fff',
    fontSize: 18,
  },
  signOutButton: {
    backgroundColor: '#fff',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  signOutText: {
    color: '#3d572f',
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 20,
    marginLeft: 15,
    color: '#333',
  },
  menuList: {
    marginHorizontal: 10,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  menuItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuText: {
    marginLeft: 15,
  },
  menuLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  menuDescription: {
    fontSize: 12,
    color: '#777',
  },
  userInfo: {
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
    marginHorizontal: 15,
    marginBottom: 20,
  },
  userInfoText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
});

export default MinhaContaScreen;
