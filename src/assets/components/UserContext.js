import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loadingUser, setLoadingUser] = useState(true); // NOVO

  useEffect(() => {
    const loadUserData = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        const email = await AsyncStorage.getItem('email');
        if (token && email) {
          setUser({ token, email });
        }
      } catch (e) {
        console.log('Erro ao carregar dados do usuário:', e);
      } finally {
        setLoadingUser(false); // MARCA COMO PRONTO
      }
    };

    loadUserData();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, loadingUser }}>
      {children}
    </UserContext.Provider>
  );
};
