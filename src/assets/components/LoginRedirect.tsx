// LoginRedirect.js
import React, { useContext, useEffect } from 'react';
import { UserContext } from './UserContext';
import { ActivityIndicator, View } from 'react-native';

const LoginRedirect = ({ navigation }) => {
  const { user, loadingUser } = useContext(UserContext);

  useEffect(() => {
    if (loadingUser) return;

    if (user && user.token) {
      navigation.replace('Minha Conta');
    } else {
      navigation.replace('Login');
    }
  }, [user, loadingUser]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" color="#43A047" />
    </View>
  );
};

export default LoginRedirect;
