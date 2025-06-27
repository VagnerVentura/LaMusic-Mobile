import 'react-native-gesture-handler';
import React, { useRef } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createStackNavigator } from '@react-navigation/stack';

import CarrinhoScreen from './src/assets/screens/CarrinhoScreen';
import SearchScreen from './src/assets/screens/SearchScreen';
import MinhaContaScreen from './src/assets/screens/MinhaConta';
import OfertasScreen from './src/assets/screens/OfertasScreen';
import DadosPessoaisScreen from './src/assets/screens/ScreensMinhaConta/DadosPessoaisScreen';
import EnderecosScreen from './src/assets/screens/ScreensMinhaConta/EnderecoScreen';
import PedidosScreen from './src/assets/screens/ScreensMinhaConta/PedidosScreen';
import CartoesScreen from './src/assets/screens/ScreensMinhaConta/CartoesScreen';
import CategoryScreen from './CategoryScreen';
import LoginScreen from './login';
import PagamentoScreen from './src/assets/screens/PagamentoScreen';
import CadastroScreen from './CadastroScreen';
import MyTabs from './TabNavigator';
import HomeScreen from './src/assets/screens/SearchScreen';
import LoginRedirect from './src/assets/components/LoginRedirect';
import ProductDetailScreen from './src/assets/screens/ProductDetailScreen';
import DetalhesPedidoScreen from './src/assets/screens/ScreensMinhaConta/DetalhesPedidoScreen';
import { RootDrawerParamList } from './src/assets/components/types'

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator<RootDrawerParamList>();

function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#8BC34A',
          width: 240,
        },
        drawerLabelStyle: { color: '#fff' },
        headerShown: false,
      }}
    >
      <Drawer.Screen
        name="Menu"
        component={MyTabs}
        options={{
          drawerLabel: 'Menu',
          drawerIcon: ({ color }) => (
            <Icon name="bars" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Minha Conta"
        component={MinhaContaScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Icon name="user" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="DadosPessoais"
        component={DadosPessoaisScreen}
        options={{
          drawerLabel: 'Dados Pessoais',
          drawerIcon: ({ color }) => (
            <Icon name="id-card" size={24} color={color} />
          ),
          drawerItemStyle: { display: 'none' },
        }}
      />
      <Drawer.Screen
        name="LoginRedirect"
        component={LoginRedirect}
        options={{
          drawerLabel: 'Login ou Minha Conta',
          drawerIcon: ({ color }) => (
            <Icon name="sign-in" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Login"
        component={LoginScreen}
        options={{
          drawerItemStyle: { display: 'none' }, // escondido
        }}
      />
      <Drawer.Screen
        name="CadastroScreen"
        component={CadastroScreen}
        options={{
          drawerItemStyle: { display: 'none' }, // escondido
        }}
      />
      <Drawer.Screen
        name="Pedidos"
        component={PedidosScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Icon name="shopping-bag" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Endereços"
        component={EnderecosScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Icon name="credit-card" size={24} color={color} />
          ),
          drawerItemStyle: { display: 'none' },
        }}
      />
      <Drawer.Screen
        name="Cartoes"
        component={CartoesScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Icon name="credit-card" size={24} color={color} />
          ),
          drawerItemStyle: { display: 'none' },
        }}
      />
      <Drawer.Screen
        name="DetalhesPedido"
        component={DetalhesPedidoScreen}
        options={{ drawerItemStyle: { display: 'none' } }}
      />
      <Drawer.Screen
        name="Início"
        component={HomeScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Icon name="home" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Buscar"
        component={SearchScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Icon name="search" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Ofertas"
        component={OfertasScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Icon name="ticket" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Carrinho"
        component={CarrinhoScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Icon name="shopping-cart" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Audio"
        component={CategoryScreen}
        initialParams={{ categoryId: '145a56b9-f26b-4676-8964-92896053f6f8', categoryName: 'Áudio' }}
        options={{
          drawerIcon: ({ color }) => (
            <Icon name="file-audio-o" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Cordas"
        component={CategoryScreen}
        initialParams={{ categoryId: 'eac106db-da6f-4ef5-8d75-8620eb9e08c8', categoryName: 'Cordas' }}
        options={{
          drawerIcon: ({ color }) => (
            <Icon name="music" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Percussao"
        component={CategoryScreen}
        initialParams={{ categoryId: '6dc7be78-2219-4041-8575-bb43897c4260', categoryName: 'Percussão' }}
        options={{
          drawerIcon: ({ color }) => (
            <Icon name="headphones" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Acessorios"
        component={CategoryScreen}
        initialParams={{ categoryId: '7ad0dd57-4bb7-4263-9019-1d5f05f8963d', categoryName: 'Acessórios' }}
        options={{
          drawerIcon: ({ color }) => (
            <Icon name="sliders" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Teclas"
        component={CategoryScreen}
        initialParams={{ categoryId: 'a760f146-ef74-4bbf-884c-d22eb5804cf0', categoryName: 'Teclas e Sopro' }}
        options={{
          drawerIcon: ({ color }) => (
            <Icon name="mixcloud" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Pagamento"
        component={PagamentoScreen}
        options={{
          drawerItemStyle: { display: 'none' },
        }}
      />

    </Drawer.Navigator>
  );
}

export default MyDrawer;
