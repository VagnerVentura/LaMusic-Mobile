import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function AcompanharPedidoScreen({ route }) {
  const { pedido } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Acompanhamento do Pedido</Text>

      <View style={styles.section}>
        <Text style={styles.label}>Pedido:</Text>
        <Text style={styles.value}>{pedido.orderId}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Status atual:</Text>
        <Text style={styles.status}>📦 Em transporte</Text>
        {/* Você pode alternar para 'Entregue' ou outro conforme o backend */}
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Previsão de entrega:</Text>
        <Text style={styles.value}>Até 30/06/2025</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Transportadora:</Text>
        <Text style={styles.value}>LogMusic Express</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Endereço de entrega:</Text>
        <Text style={styles.value}>
          {pedido.shippingAddress.street}, {pedido.shippingAddress.number}
          {pedido.shippingAddress.complement && ` - ${pedido.shippingAddress.complement}`},{' '}
          {pedido.shippingAddress.neighborhood}, {pedido.shippingAddress.city} -{' '}
          {pedido.shippingAddress.state}, {pedido.shippingAddress.zipCode}
        </Text>
      </View>
    </ScrollView>
  );
}

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
  status: { fontSize: 16, color: '#f9a825', marginTop: 4 },
});
