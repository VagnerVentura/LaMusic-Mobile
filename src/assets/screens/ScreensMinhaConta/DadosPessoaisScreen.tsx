import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../../../api';

function DadosPessoaisScreen({ navigation }) {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUserData = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      const response = await api.get('/client/me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUserData(response.data);
    } catch (error) {
      console.error('Erro ao buscar dados do usuário:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#2E7D32" />
      </View>
    );
  }

  if (!userData) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Erro ao carregar os dados do usuário.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.container}>
      {/* Cabeçalho com botão de edição */}
      <View style={styles.header}>
        <Text style={styles.heading}>Meus Dados</Text>
        <TouchableOpacity onPress={() => navigation.navigate('EditarDados')}>
          <Icon name="edit" size={24} color="#2E7D32" />
        </TouchableOpacity>
      </View>

      <View style={styles.infoBlock}>
        <Text style={styles.label}><Icon name="person" /> Nome Completo</Text>
        <Text style={styles.value}>{userData.name}</Text>
      </View>

      <View style={styles.infoBlock}>
        <Text style={styles.label}><Icon name="badge" /> CPF</Text>
        <Text style={styles.value}>150.985.345-77</Text>
      </View>

      <View style={styles.infoBlock}>
        <Text style={styles.label}><Icon name="calendar-today" /> Data de Nascimento</Text>
        <Text style={styles.value}>20/04/1990</Text>
      </View>

      <View style={styles.infoBlock}>
        <Text style={styles.label}><Icon name="wc" /> Gênero</Text>
        <Text style={styles.value}>Masculino</Text>
      </View>

      <View style={styles.infoBlock}>
        <Text style={styles.label}><Icon name="phone" /> Telefone</Text>
        <Text style={styles.value}>{userData.phone}</Text>
      </View>

      <View style={styles.infoBlock}>
        <Text style={styles.label}><Icon name="email" /> E-mail</Text>
        <Text style={styles.value}>{userData.email}</Text>
      </View>

      <View style={styles.infoBlock}>
        <Text style={styles.label}><Icon name="home" /> Endereço Principal</Text>
        <Text style={styles.value}>Rua das Flores, 123 - São Paulo/SP</Text>
      </View>

      <View style={styles.infoBlock}>
        <Text style={styles.label}><Icon name="verified-user" /> Status da Conta</Text>
        <Text style={styles.value}>Ativa</Text>
      </View>

      <View style={styles.infoBlock}>
        <Text style={styles.label}><Icon name="event" /> Cadastrado em</Text>
        <Text style={styles.value}>12/06/2024</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    backgroundColor: '#F9F9F9',
  },
  container: {
    padding: 20,
    backgroundColor: '#F9F9F9',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2E7D32',
  },
  infoBlock: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    elevation: 2,
  },
  label: {
    fontSize: 14,
    color: '#757575',
    marginBottom: 5,
  },
  value: {
    fontSize: 16,
    fontWeight: '600',
    color: '#424242',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default DadosPessoaisScreen;
