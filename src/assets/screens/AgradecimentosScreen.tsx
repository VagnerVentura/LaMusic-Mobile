// src/assets/screens/AgradecimentoScreen.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

export default function AgradecimentoScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <MaterialIcons name="check-circle" size={80} color="#2E7D32" />
      <Text style={styles.title}>Obrigado pela sua compra!</Text>
      <Text style={styles.subtitle}>Seu pedido foi realizado com sucesso.</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('PedidosScreen')}
      >
        <Text style={styles.buttonText}>Ver Meus Pedidos</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.outlineButton]}
        onPress={() => navigation.navigate('HomeScreen')}
      >
        <Text style={[styles.buttonText, styles.outlineText]}>Voltar à Página Inicial</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginTop: 20,
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginTop: 10,
    textAlign: 'center',
  },
  button: {
    marginTop: 30,
    backgroundColor: '#2E7D32',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  outlineButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#2E7D32',
    marginTop: 15,
  },
  outlineText: {
    color: '#2E7D32',
  },
});
