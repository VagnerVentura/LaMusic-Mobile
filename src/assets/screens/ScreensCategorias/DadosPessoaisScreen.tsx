import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function DadosPessoaisScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nome Completo</Text>
      <Text>Renato Silva</Text>

      <Text style={styles.title}>CPF</Text>
      <Text>282.828.282-22</Text>

      <Text style={styles.title}>Telefone</Text>
      <Text>+55 11 98888-8888</Text>

      <Text style={styles.title}>E-mail</Text>
      <Text>renato@hotmail.com</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 16, fontWeight: 'bold', marginTop: 20 },
});

export default DadosPessoaisScreen;