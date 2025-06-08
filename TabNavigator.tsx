import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import CarrinhoScreen from './src/assets/screens/CarrinhoScreen';
import SearchScreen from './src/assets/screens/SearchScreen';
import MinhaContaScreen from './src/assets/screens/MinhaConta';
import OfertasScreen from './src/assets/screens/OfertasScreen';
import HomeScreen from './HomeScreen';


const Tab = createBottomTabNavigator();

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

export default MyTabs;
