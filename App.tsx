// App.js
import 'react-native-gesture-handler';
import React, { useRef } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { UserProvider } from './src/assets/components/UserContext';
import AppNavigator from './Navigation'; // 👈 Novo import

const App = () => {
  const drawerNavigationRef = useRef(null);

  return (
    <UserProvider>
      <SafeAreaProvider>
        <NavigationContainer ref={drawerNavigationRef}>
          <AppNavigator /> {/* 👈 Agora navega com Stack + Drawer */}
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
