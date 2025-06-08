import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet } from 'react-native';
import api from '../../../api';



  
const CriarUsuarioScreen = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [telefone, setTelefone] = useState('');

  const handleCriarUsuario = async () => {
    try {
      const usuario = { nome, email, senha, telefone };
      const resultado = await criarUsuario(usuario);
      Alert.alert('Sucesso', `Usuário criado com ID: ${resultado}`);
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível criar o usuário. Tente novamente.');
    }
  };

  const criarUsuario = async (usuario) => {
    try {
      const response = await api.post('/usuarios', usuario);
      console.log('Usuário criado:', response.data);
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Telefone"
        value={telefone}
        onChangeText={setTelefone}
        keyboardType="phone-pad"
      />
      <Button title="Criar Usuário" onPress={handleCriarUsuario} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 8,
    marginBottom: 12,
  },
});

export default CriarUsuarioScreen;