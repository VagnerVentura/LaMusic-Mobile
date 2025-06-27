import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';



const DetalhesPedidoScreen = ({ route }) => {
  const { pedido } = route.params;
  const navigation = useNavigation();

  const dataFormatada = pedido.orderDate
    ? new Date(pedido.orderDate).toLocaleDateString('pt-BR')
    : 'Data não disponível';

  const endereco = (end) =>
    `${end.street}, ${end.number}${end.complement ? ' - ' + end.complement : ''}, ${end.neighborhood} - ${end.city}/${end.state}, ${end.zipCode}`;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Detalhes do Pedido</Text>

      <View style={styles.section}>
        <Text style={styles.label}>Número do Pedido:</Text>
        <Text style={styles.value}>{pedido.orderId}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Data do Pedido:</Text>
        <Text style={styles.value}>{dataFormatada}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Produtos:</Text>
        {pedido.items.map((item, index) => (
          <View key={index} style={styles.produto}>
            <Text style={styles.value}>{item.productName}</Text>
            <Text style={styles.value}>Qtd: {item.quantity}</Text>
            <Text style={styles.value}>
              Valor: R$ {item.price.toFixed(2).replace('.', ',')}
            </Text>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Total do Pedido:</Text>
        <Text style={styles.value}>R$ {pedido.totalAmount.toFixed(2).replace('.', ',')}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Endereço de Entrega:</Text>
        <Text style={styles.value}>{endereco(pedido.shippingAddress)}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Endereço de Cobrança:</Text>
        <Text style={styles.value}>{endereco(pedido.billingAddress)}</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('AcompanharPedidoScreen', { pedido })}
      >
        <Text style={styles.buttonText}>Acompanhar Pedido</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginBottom: 20,
  },
  section: { marginBottom: 15 },
  label: { fontWeight: 'bold', color: '#555' },
  value: { color: '#333', marginTop: 4 },
  produto: {
    marginTop: 6,
    paddingLeft: 10,
    borderLeftWidth: 2,
    borderLeftColor: '#2E7D32',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#2E7D32',
    padding: 12,
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: { color: '#fff', fontWeight: 'bold' },
});

export default DetalhesPedidoScreen;
