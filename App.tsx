import 'react-native-gesture-handler';
import React, { useRef } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MyDrawer from './DrawerNavigator';
import Main from './src/Main/Main';
import Header from './src/Header/Header';
import HeroHeader from './src/Header/Header';
import { UserProvider } from './UserContext';

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} />
      <HeroHeader navigation={navigation} />
      <Main />
    </SafeAreaView>
  );
}

const App = () => {
  const drawerNavigationRef = useRef(null);

  return (
    <UserProvider>
      <SafeAreaProvider>
        <NavigationContainer ref={drawerNavigationRef}>
          <MyDrawer />
        </NavigationContainer>
      </SafeAreaProvider>
    </UserProvider>
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
