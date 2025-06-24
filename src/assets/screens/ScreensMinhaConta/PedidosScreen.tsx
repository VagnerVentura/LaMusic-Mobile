import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { RootDrawerParamList } from './../../components/types'; // certifique-se que esse tipo inclui 'DetalhesPedido'

type NavigationProps = DrawerNavigationProp<RootDrawerParamList, 'Pedidos'>;

const pedidos = [
  {
    id: '1',
    numero: 'LMK20240828',
    data: '28 de Agosto',
    status: 'Entregue',
    entrega: 'Chegou no dia 29/08',
    descricao: 'Violão Clássico',
    quantidade: 1,
    valor: 'R$ 799,00',
    pagamento: 'Cartão de Crédito',
    imagem: require('../../img/cordas/violao1.png'),
  },
  {
    id: '2',
    numero: 'LMK20240728',
    data: '28 de Julho',
    status: 'Cancelado',
    entrega: '-',
    descricao: 'Teclado Arranjador X30',
    quantidade: 1,
    valor: 'R$ 1.299,00',
    pagamento: 'Pix',
    imagem: require('../../img/teclas/piano1.png'),
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Entregue':
      return '#2e7d32';
    case 'Cancelado':
      return '#d32f2f';
    case 'Em transporte':
      return '#f9a825';
    default:
      return '#757575';
  }
};

const PedidosScreen = () => {
  const navigation = useNavigation<NavigationProps>();

  const renderPedidoItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.imagem} style={styles.image} />
      <View style={styles.cardContent}>
        <View style={styles.row}>
          <Text style={styles.numero}>Pedido #{item.numero}</Text>
          <Text style={[styles.status, { color: getStatusColor(item.status) }]}>
            {item.status}
          </Text>
        </View>

        <Text style={styles.descricao}>{item.descricao}</Text>
        <Text style={styles.info}>Quantidade: {item.quantidade}</Text>
        <Text style={styles.info}>Valor: {item.valor}</Text>
        <Text style={styles.info}>Forma de Pagamento: {item.pagamento}</Text>
        <Text style={styles.info}>Enviado em: {item.data}</Text>
        {item.status === 'Entregue' && (
          <Text style={styles.entrega}>{item.entrega}</Text>
        )}

        <TouchableOpacity
          style={styles.detalhesButton}
          onPress={() => navigation.navigate('DetalhesPedido', { pedido: item })}
        >
          <Text style={styles.detalhesText}>Ver Detalhes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Meus Pedidos</Text>
      <FlatList
        data={pedidos}
        keyExtractor={(item) => item.id}
        renderItem={renderPedidoItem}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginVertical: 20,
  },
  list: {
    paddingBottom: 20,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 12,
  },
  cardContent: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  numero: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  status: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  descricao: {
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 6,
    color: '#444',
  },
  info: {
    fontSize: 13,
    color: '#555',
  },
  entrega: {
    fontSize: 13,
    color: '#555',
    marginTop: 4,
  },
  detalhesButton: {
    marginTop: 10,
    alignSelf: 'flex-start',
    backgroundColor: '#2E7D32',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 6,
  },
  detalhesText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '500',
  },
});

export default PedidosScreen;
