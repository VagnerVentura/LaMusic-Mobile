import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
// import api from './api'; 
import { UserContext } from './UserContext'; 
import { api } from './api';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const { setUser } = useContext(UserContext);

 const handleLogin = async () => {
  console.log("Dados enviados: ", { email, password: senha }); 

  try {
    const response = await api.post('http://192.168.1.104:8080/auth/login', {
      email,
      password: senha, 
    });

    console.log('Resposta recebida:', response.data);  

    const { token } = response.data;

    if (token) {
      Alert.alert('Sucesso', 'Login realizado com sucesso!');
       await AsyncStorage.setItem('token', token);
      setUser({ email, token });
      navigation.navigate('Minha Conta', { token });
    } else {
      Alert.alert('Erro', 'Token não recebido');
    }

  } catch (error) {
    console.error('Erro:', error.response?.data || error.message); 
    Alert.alert('Erro', 'Email ou senha inválidos');
  }
};


  return (
    <View style={styles.container}>

      {/* Logo da aplicação */}
      <View>
        <TouchableOpacity>
          <Image source={require('./src/assets/icons/lamusic.png')}/>
        </TouchableOpacity>
      </View>
      <Text style={styles.subtitle}>Acesse a sua conta</Text>

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        placeholderTextColor="#B5B5B5"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
        placeholderTextColor="#B5B5B5"
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {
        navigation.closeDrawer();
        navigation.navigate('CadastroScreen');
      }}>
        <Text style={styles.linkText}>Não tem uma conta? Cadastre-se</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F3F7F9', 
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2E7D32', 
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#5C5C5C', 
    marginBottom: 30,
  },
  input: {
    width: '100%',
    padding: 15,
    borderWidth: 1,
    borderColor: '#A5D6A7', 
    borderRadius: 8,
    marginBottom: 15,
    backgroundColor: '#FFFFFF', 
    color: '#333333',
  },
  button: {
    backgroundColor: '#43A047', 
    padding: 15,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, 
  },
  buttonText: {
    color: '#FFFFFF', 
    fontSize: 16,
    fontWeight: 'bold',
  },
  linkText: {
    color: '#2E7D32', 
    fontSize: 14,
    textDecorationLine: 'underline',
  },

});

export default LoginScreen;
