import 'react-native-gesture-handler';
import { useRef } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createStackNavigator } from '@react-navigation/stack';



// Importações das telas
// import Header from './src/Header/Header';
import Main from './src/Main/Main';
import CarrinhoScreen from './src/assets/screens/CarrinhoScreen';
import SearchScreen from './src/assets/screens/SearchScreen';
import HeroHeader from './src/HeroHeader/HeroHeader';
import MinhaContaScreen from './src/assets/screens/MinhaConta';
import OfertasScreen from './src/assets/screens/OfertasScreen';
import DadosPessoaisScreen from './src/assets/screens/ScreensMinhaConta/DadosPessoaisScreen';
import EnderecosScreen from './src/assets/screens/ScreensMinhaConta/EnderecoScreen';
import PedidosScreen from './src/assets/screens/ScreensMinhaConta/PedidosScreen';
import CartoesScreen from './src/assets/screens/ScreensMinhaConta/CartoesScreen';
import LoginScreen from './login';
import CategoryScreen from './CategoryScreen';
import CadastroScreen from './CadastroScreen';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const AuthStack = () => (
  <Stack.Navigator >
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="CadastroScreen" component={CadastroScreen} />
  </Stack.Navigator>
);

// Bottom Tab Navigator
function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: '#fff' },
        tabBarLabelStyle: { fontSize: 12 },
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen 
        name="Perfil" 
        component={MinhaContaScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} />
          ),
          tabBarLabel: 'Perfil',
        }}
      />
      <Tab.Screen 
        name="Ofertas" 
        component={OfertasScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="ticket" color={color} size={size} />
          ),
          tabBarLabel: 'Ofertas',
        }}
      />
      <Tab.Screen 
        name="Buscar" 
        component={SearchScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="search" color={color} size={size} />
          ),
          tabBarLabel: 'Buscar',
        }}
      />
      <Tab.Screen 
        name="Carrinho" 
        component={CarrinhoScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="shopping-cart" color={color} size={size} />
          ),
          tabBarLabel: 'Carrinho',
        }}
      />
    </Tab.Navigator>
  );
}

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
          ),drawerItemStyle: { display: 'none' }, 
        }}
      />

      <Drawer.Screen 
        name="Login" 
        component={AuthStack} 
        options={{
          drawerLabel: 'Cadastrar',
          drawerIcon: ({ color }) => (
            <Icon name="id-card" size={24} color={color} />
          ),drawerItemStyle: { display: 'none' }, 
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
          // Usando drawerItemStyle para ocultar o item do menu
          drawerItemStyle: { display: 'none' }, // Isso vai ocultar o item Cartões no menu do Drawer
        }}
      />

      <Drawer.Screen 
        name="Cartoes" 
        component={CartoesScreen}
        options={{
        drawerIcon: ({ color }) => (
      <Icon name="credit-card" size={24} color={color} />
          ),drawerItemStyle: { display: 'none' }, 
        }}
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
            initialParams={{ categoryId: 4, categoryName: 'Áudio' }}
            options={{
              drawerIcon: ({ color }) => (
                <Icon name="file-audio-o" size={24} color={color} />
              ),
            }}
      />

      <Drawer.Screen 
        name="Cordas" 
        component={CategoryScreen}
        initialParams={{ categoryId: 1, categoryName: 'Cordas' }}
        options={{
          drawerIcon: ({ color }) => (
            <Icon name="music" size={24} color={color} />
          ),
        }}
      />
      
      <Drawer.Screen 
        name="Percussao" 
        component={CategoryScreen}
        initialParams={{ categoryId: 5, categoryName: 'Percussão' }}
        options={{
          drawerIcon: ({ color }) => (
            <Icon name="headphones" size={24} color={color} />
          ),
        }}
      />

       <Drawer.Screen 
        name="Acessorios" 
        component={CategoryScreen}
        initialParams={{ categoryId: 2, categoryName: 'Acessórios' }}
        options={{
          drawerIcon: ({ color }) => (
            <Icon name="sliders" size={24} color={color} />
          ),
        }}
      />     
     
      <Drawer.Screen 
        name="Teclas" 
        component={CategoryScreen}
        initialParams={{ categoryId: 3, categoryName: 'Teclas e Sopro' }}
        options={{
          drawerIcon: ({ color }) => (
            <Icon name="mixcloud" size={24} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

// Tela inicial Home
function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Header navigation={navigation} /> */}
      {/* <HeroHeader navigation={navigation} /> */}
      <Main />
    </SafeAreaView>
  );
}


const App = () => {
  const drawerNavigationRef = useRef(null);

  return (
    <SafeAreaProvider>
      <NavigationContainer ref={drawerNavigationRef}>
        <MyDrawer />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
});

export default App;
