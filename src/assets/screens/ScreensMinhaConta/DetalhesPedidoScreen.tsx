import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';

const BASE_URL = 'http://192.168.1.105:8080'; // ajuste conforme necessário

// Status mockado com destaque no status atual
const statusMock = [
  { label: 'Pedido confirmado', date: '2025-05-19T10:24:00', icon: 'check-circle', color: '#4CAF50' },
  { label: 'Pagamento pendente', date: '2025-05-19T10:24:00', icon: 'money-bill-wave', color: '#FFC107' },
  { label: 'Pagamento aprovado', date: '2025-05-19T10:25:00', icon: 'credit-card', color: '#4CAF50' },
  { label: 'Preparando pedido', date: '2025-05-19T10:25:00', icon: 'box-open', color: '#2196F3' },
  { label: 'Enviando pedido', date: '2025-05-19T10:47:00', icon: 'truck', color: '#03A9F4' },
  { label: 'Pedido entregue', date: '2025-05-19T11:08:00', icon: 'check-double', color: '#2E7D32' },
];

const currentStepIndex = 4; // passo atual (0 a 5)

const formatarData = (data) => {
  try {
    return new Date(data).toLocaleString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  } catch {
    return 'Data não disponível';
  }
};

const TimelineStatus = ({ statusList, currentStep }) => (
  <View style={styles.timelineContainer}>
    {statusList.map((item, index) => {
      const isActive = index === currentStep;
      const isDone = index < currentStep;

      return (
        <View key={index} style={styles.timelineItem}>
          <View style={styles.timelineLeft}>
            <FontAwesome5
              name={item.icon}
              size={18}
              color={isActive || isDone ? item.color : '#ccc'}
            />
            {index < statusList.length - 1 && (
              <View
                style={[
                  styles.line,
                  { backgroundColor: isDone ? item.color : '#ccc' },
                ]}
              />
            )}
          </View>
          <View style={styles.timelineContent}>
            <Text style={[styles.timelineLabel, isActive && styles.activeLabel]}>
              {item.label}
            </Text>
            <Text style={styles.timelineDate}>{formatarData(item.date)}</Text>
          </View>
        </View>
      );
    })}
  </View>
);

const DetalhesPedidoScreen = ({ route }) => {
  const { pedido } = route.params;
  const navigation = useNavigation();

  const dataFormatada = pedido.orderDate
    ? formatarData(pedido.orderDate)
    : 'Data não disponível';

  const endereco = (end) =>
    `${end.street}, ${end.number}${end.complement ? ' - ' + end.complement : ''}, ${end.neighborhood} - ${end.city}/${end.state}, ${end.zipCode}`;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Detalhes do Pedido</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Número do Pedido:</Text>
        <Text style={styles.value}>{pedido.orderId}</Text>

        <Text style={styles.label}>Data do Pedido:</Text>
        <Text style={styles.value}>{dataFormatada}</Text>

        <Text style={[styles.label, { marginTop: 12 }]}>Endereço de Entrega:</Text>
        <Text style={styles.value}>{endereco(pedido.shippingAddress)}</Text>

        <Text style={[styles.label, { marginTop: 12 }]}>Endereço de Cobrança:</Text>
        <Text style={styles.value}>{endereco(pedido.billingAddress)}</Text>
      </View>

      <Text style={[styles.title, { marginTop: 20 }]}>Produtos</Text>
      {pedido.items.map((item, index) => {
        const imageUrl = item.imageUrl
          ? `${BASE_URL}${item.imageUrl}`
          : 'https://via.placeholder.com/100';

        return (
          <View key={index} style={styles.produto}>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <View style={styles.produtoInfo}>
              <Text style={styles.productName}>{item.productName}</Text>
              <Text style={styles.value}>Qtd: {item.quantity}</Text>
              <Text style={styles.value}>Valor: R$ {item.price.toFixed(2).replace('.', ',')}</Text>
            </View>
          </View>
        );
      })}

      <View style={styles.totalContainer}>
        <Text style={styles.label}>Total do Pedido:</Text>
        <Text style={styles.total}>R$ {pedido.totalAmount.toFixed(2).replace('.', ',')}</Text>
      </View>

      <Text style={[styles.title, { marginTop: 30 }]}>Status do Pedido</Text>
      <TimelineStatus statusList={statusMock} currentStep={currentStepIndex} />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('AcompanharPedidoScreen', { pedido })}
      >
        <Text style={styles.buttonText}>Acompanhar Pedido</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

// ... demais imports
const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginBottom: 15,
  },
  card: {
    backgroundColor: '#f1f8f2',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#d0e3d4',
  },
  label: {
    fontWeight: '600',
    color: '#444',
    marginTop: 6,
    fontSize: 14,
  },
  value: {
    color: '#222',
    marginTop: 2,
    fontSize: 14,
  },
  productName: {
    fontWeight: 'bold',
    color: '#222',
    fontSize: 15,
    marginBottom: 4,
  },
  produto: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    padding: 14,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  produtoInfo: {
    marginLeft: 12,
    flex: 1,
  },
  image: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
    borderRadius: 8,
    backgroundColor: '#e0e0e0',
  },
  totalContainer: {
    marginTop: 15,
    alignItems: 'flex-end',
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginTop: 4,
  },
 
button: {
  backgroundColor: '#43A047',
  paddingVertical: 14,
  paddingHorizontal: 20,
  borderRadius: 30,
  marginTop: 30,
  marginBottom: 40, // dá espaçamento ao final
  alignItems: 'center',
  alignSelf: 'center', // evita que ultrapasse a largura do container
  width: '100%', // ocupa toda a largura do espaço disponível
  maxWidth: 500, // opcional: limita em telas muito grandes
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.2,
  shadowRadius: 4,
  elevation: 3,
},


  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },

  // Timeline refinada
  timelineContainer: {
    marginTop: 10,
    marginBottom: 30,
  },
  timelineItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 25,
  },
  timelineLeft: {
    alignItems: 'center',
    width: 30,
    position: 'relative',
  },
  line: {
    width: 2,
    height: 40,
    backgroundColor: '#ccc',
    position: 'absolute',
    top: 22,
    left: 8.5,
  },
  timelineContent: {
    marginLeft: 10,
    padding: 10,
    borderRadius: 8,
    flex: 1,
    backgroundColor: '#f0fdf4',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  timelineLabel: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#777',
  },
  activeLabel: {
    color: '#1B5E20',
    fontSize: 16,
  },
  timelineDate: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
});
export default DetalhesPedidoScreen;
