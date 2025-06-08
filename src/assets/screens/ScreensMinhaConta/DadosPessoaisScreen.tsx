import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';

const DadosPessoaisScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Dados Pessoais</Text>
      
      <View style={styles.field}>
        <Text style={styles.label}>Nome Completo</Text>
        <TextInput style={styles.input} placeholder="Digite seu nome completo" />
      </View>

      <View style={styles.field}>
        <Text style={styles.label}>CPF</Text>
        <TextInput style={styles.input} placeholder="Digite seu CPF" keyboardType="numeric" />
      </View>

      <View style={styles.field}>
        <Text style={styles.label}>Telefone</Text>
        <TextInput style={styles.input} placeholder="Digite seu telefone" keyboardType="phone-pad" />
      </View>

      <View style={styles.field}>
        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} placeholder="Digite seu email" keyboardType="email-address" />
      </View>

      <TouchableOpacity style={styles.button} onPress={() => alert('Dados salvos')}>
        <Text style={styles.buttonText}>Salvar Alterações</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#3d572f',
  },
  field: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    color: '#333',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginTop: 5,
  },
  button: {
    marginTop: 30,
    backgroundColor: '#3d572f',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default DadosPessoaisScreen;