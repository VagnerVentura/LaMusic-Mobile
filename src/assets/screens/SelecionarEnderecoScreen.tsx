import React, { useEffect, useState, useContext } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Alert,
} from 'react-native';
import { UserContext } from '../components/UserContext';
import { MaterialIcons } from '@expo/vector-icons';
import api from '../../../api';

export default function SelecionarEnderecoScreen({ navigation, route }) {
  const { user } = useContext(UserContext);
  const total = route.params?.total || 0;

  const [enderecos, setEnderecos] = useState([]);
  const [selectedShippingId, setSelectedShippingId] = useState(null);
  const [selectedBillingId, setSelectedBillingId] = useState(null);

  useEffect(() => {
    api.get('/addresses/me')
      .then(response => setEnderecos(response.data))
      .catch(error => {
        console.error('Erro ao carregar endereços:', error);
        Alert.alert('Erro', 'Não foi possível carregar os endereços.');
      });
  }, []);

  const confirmarEnderecos = () => {
    if (!selectedShippingId || !selectedBillingId) {
      Alert.alert('Atenção', 'Selecione os endereços de entrega e cobrança.');
      return;
    }

    navigation.navigate('PagamentoScreen', {
      total,
      shippingAddressId: selectedShippingId,
      billingAddressId: selectedBillingId,
    });
  };

  const renderEndereco = (item) => (
    <View style={styles.card}>
      <Text style={styles.label}>{item.label}</Text>
      <Text style={styles.enderecoText}>{item.recipientName}</Text>
      <Text style={styles.enderecoText}>{item.street}, {item.number}</Text>
      <Text style={styles.enderecoText}>{item.neighborhood} - {item.city} / {item.state}</Text>
      <Text style={styles.enderecoText}>CEP: {item.zipCode}</Text>

      <View style={styles.botoes}>
        <TouchableOpacity
          style={[
            styles.btn,
            selectedShippingId === item.id && styles.btnSelecionado
          ]}
          onPress={() => setSelectedShippingId(item.id)}
        >
          <MaterialIcons name="local-shipping" size={18} color="#fff" />
          <Text style={styles.btnText}>Entrega</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.btn,
            selectedBillingId === item.id && styles.btnSelecionado
          ]}
          onPress={() => setSelectedBillingId(item.id)}
        >
          <MaterialIcons name="receipt" size={18} color="#fff" />
          <Text style={styles.btnText}>Cobrança</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.tituloPrincipal}>Escolha os endereços para a entrega e cobrança</Text>

      <FlatList
        data={enderecos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => renderEndereco(item)}
        contentContainerStyle={{ paddingBottom: 20 }}
      />

      <TouchableOpacity style={styles.botao} onPress={confirmarEnderecos}>
        <Text style={styles.botaoTexto}>Continuar para Pagamento</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('NovoEndereco')}
        style={styles.link}
      >
        <Text style={styles.linkTexto}>+ Cadastrar novo endereço</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fefefe' },
  tituloPrincipal: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3d572f',
    marginBottom: 16,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 14,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 6,
  },
  enderecoText: {
    fontSize: 14,
    color: '#555',
  },
  botoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#bbb',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 6,
  },
  btnSelecionado: {
    backgroundColor: '#3d572f',
  },
  btnText: {
    color: '#fff',
    marginLeft: 6,
    fontWeight: 'bold',
  },
  botao: {
    backgroundColor: '#3d572f',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 12,
  },
  botaoTexto: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 10,
    alignItems: 'center',
  },
  linkTexto: {
    color: '#3d572f',
    fontWeight: 'bold',
    fontSize: 15,
  },
});
