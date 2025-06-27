import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MyDrawer from './DrawerNavigator';
import ProductDetailScreen from './src/assets/screens/ProductDetailScreen';
import SelecionarEnderecoScreen from './src/assets/screens/SelecionarEnderecoScreen';
import NovoEnderecoScreen from './src/assets/screens/NovoEnderecoScreen';
import PagamentoScreen from './src/assets/screens/PagamentoScreen';
import PedidosScreen from './src/assets/screens/ScreensMinhaConta/PedidosScreen';
import DetalhesPedidoScreen from './src/assets/screens/ScreensMinhaConta/DetalhesPedidoScreen';
import AcompanharPedidoScreen from './src/assets/screens/AcompanharPedidoScreen';
import AgradecimentoScreen from './src/assets/screens/AgradecimentosScreen';
import HomeScreen from './HomeScreen';


const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainDrawer" component={MyDrawer} />
      <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
      <Stack.Screen name="SelecionarEndereco" component={SelecionarEnderecoScreen} />
      <Stack.Screen name="NovoEndereco" component={NovoEnderecoScreen} />
      <Stack.Screen name="PagamentoScreen" component={PagamentoScreen} />
      <Stack.Screen name="PedidosScreen" component={PedidosScreen} />
      <Stack.Screen name="DetalhesPedidoScreen" component={DetalhesPedidoScreen} />
      <Stack.Screen name="AcompanharPedidoScreen" component={AcompanharPedidoScreen} />
      <Stack.Screen name="AgradecimentoScreen" component={AgradecimentoScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
}
