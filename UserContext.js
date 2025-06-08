import React, { createContext, useState } from 'react';

// Criação do contexto
export const UserContext = createContext();

// Componente de provedor do contexto
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Estado para armazenar o usuário logado

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};