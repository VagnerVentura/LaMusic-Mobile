import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Header from './src/Header/Header';
import HeroHeader from './src/HeroHeader/HeroHeader';
import Main from './src/Main/Main';

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} />
      <HeroHeader navigation={navigation} />
      <Main />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
});

export default HomeScreen;
