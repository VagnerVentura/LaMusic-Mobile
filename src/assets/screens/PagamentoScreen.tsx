import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Image,
  Alert,
} from 'react-native';
import { MaterialIcons, FontAwesome5, FontAwesome } from '@expo/vector-icons';
import api from '../../../api';
import PedidosScreen from './ScreensMinhaConta/PedidosScreen';

const PagamentoScreen = ({ navigation, route }) => {
  const total = route.params?.total || 0;
  const [metodoSelecionado, setMetodoSelecionado] = useState('Cartão');

  const confirmarPagamento = async () => {
    try {
      const { shippingAddressId, billingAddressId } = route.params;

      await api.post('/orders/checkout', {
        shippingAddressId,
        billingAddressId
      });

      Alert.alert('Sucesso', 'Pedido realizado com sucesso!');
      navigation.navigate('AgradecimentoScreen'); // ou navegação para tela de pedidos
    } catch (error) {
      console.error('Erro ao finalizar pedido:', error);
      Alert.alert('Erro', 'Não foi possível concluir o pedido. Tente novamente.');
    }
  };

  const renderCamposPagamento = () => {
    switch (metodoSelecionado) {
      case 'Cartão':
        return (
          <View>
            <TextInput placeholder="Número do cartão" style={styles.input} keyboardType="numeric" />
            <TextInput placeholder="Validade (MM/AA)" style={styles.input} keyboardType="numeric" />
            <TextInput placeholder="CVV" style={styles.input} keyboardType="numeric" secureTextEntry />
          </View>
        );
      case 'PIX':
        return (
          <View style={styles.qrContainer}>
            <Text style={styles.qrLabel}>Escaneie o QR Code com seu app de banco:</Text>
            <Image
              source={{ uri: 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=PIX1234567890' }}
              style={styles.qrCode}
            />
          </View>
        );
      case 'Boleto':
        return (
          <TouchableOpacity
            style={styles.gerarBoletoButton}
            onPress={() => Alert.alert('Boleto gerado!', 'Enviado para seu e-mail.')}
          >
            <FontAwesome name="barcode" size={20} color="#fff" />
            <Text style={styles.textoBotaoBoleto}>Gerar Boleto</Text>
          </TouchableOpacity>
        );
      default:
        return null;
    }
  };

  const MetodoItem = ({ label, icon, name }) => (
    <TouchableOpacity
      style={[
        styles.opcaoMetodo,
        metodoSelecionado === name && styles.opcaoAtiva,
      ]}
      onPress={() => setMetodoSelecionado(name)}
    >
      {icon}
      <Text style={styles.textoMetodo}>{label}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Pagamento</Text>

      <View style={styles.resumoBox}>
        <Text style={styles.resumoText}>Total:</Text>
        <Text style={styles.valor}>R${total.toFixed(2).replace('.', ',')}</Text>
      </View>

      <Text style={styles.subtitulo}>Escolha o método de pagamento:</Text>

      <View style={styles.metodosContainer}>
        <MetodoItem
          label="Cartão de Crédito"
          name="Cartão"
          icon={<MaterialIcons name="credit-card" size={22} color="#555" />}
        />
        <MetodoItem
          label="PIX"
          name="PIX"
          icon={<FontAwesome5 name="qrcode" size={20} color="#555" />}
        />
        <MetodoItem
          label="Boleto"
          name="Boleto"
          icon={<FontAwesome name="barcode" size={20} color="#555" />}
        />
      </View>

      {renderCamposPagamento()}

      <TouchableOpacity style={styles.botaoPagar} onPress={confirmarPagamento}>
        <MaterialIcons name="payment" size={24} color="#fff" />
        <Text style={styles.textoBotao}>Confirmar Pagamento</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, textAlign: 'center', color: '#333' },
  resumoBox: {
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    padding: 20,
    marginBottom: 30,
  },
  resumoText: { fontSize: 16, color: '#555', marginBottom: 10 },
  valor: { fontSize: 20, fontWeight: 'bold', color: '#3d572f' },
  subtitulo: { fontSize: 16, fontWeight: 'bold', color: '#444', marginBottom: 10 },
  metodosContainer: { marginBottom: 20 },
  opcaoMetodo: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    marginVertical: 6,
    borderRadius: 6,
    backgroundColor: '#f0f0f0',
  },
  opcaoAtiva: { backgroundColor: '#dcedc8' },
  textoMetodo: { marginLeft: 12, fontSize: 16, color: '#333' },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginVertical: 6,
  },
  botaoPagar: {
    flexDirection: 'row',
    backgroundColor: '#3d572f',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  textoBotao: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  qrContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  qrLabel: {
    fontSize: 14,
    color: '#555',
    marginBottom: 10,
  },
  qrCode: {
    width: 200,
    height: 200,
  },
  gerarBoletoButton: {
    flexDirection: 'row',
    backgroundColor: '#3d572f',
    padding: 12,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoBotaoBoleto: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 10,
    fontWeight: 'bold',
  },
});

export default PagamentoScreen;