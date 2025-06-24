import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';

const DetalhesPedidoScreen = ({ route }) => {
  const { pedido } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Detalhes do Pedido</Text>

      <View style={styles.section}>
        <Text style={styles.label}>Número do Pedido:</Text>
        <Text style={styles.value}>{pedido.numero}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Status:</Text>
        <Text style={[styles.value, { color: '#2E7D32' }]}>{pedido.status}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Data do Pedido:</Text>
        <Text style={styles.value}>{pedido.data}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Produto:</Text>
        {/* <Image source={{ uri: pedido.imagem }} style={styles.image} /> */}
        <Text style={styles.value}>{pedido.descricao}</Text>
        <Text style={styles.value}>Qtd: {pedido.quantidade}</Text>
        <Text style={styles.value}>Valor: {pedido.valor}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Forma de Pagamento:</Text>
        <Text style={styles.value}>{pedido.pagamento}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Endereço de Entrega:</Text>
        <Text style={styles.value}>
          Rua das Cordas, 123 - São Paulo/SP, CEP 01234-000
        </Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Acompanhar Pedido</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 22, fontWeight: 'bold', color: '#2E7D32', marginBottom: 20 },
  section: { marginBottom: 15 },
  label: { fontWeight: 'bold', color: '#555' },
  value: { color: '#333', marginTop: 4 },
  image: { width: 120, height: 120, borderRadius: 8, marginVertical: 10 },
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
