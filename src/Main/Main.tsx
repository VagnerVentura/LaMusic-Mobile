import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
// import HeroHeader from '../HeroHeader/HeroHeader';
import HeroSection from '../HeroSection/HeroSection';

const Main = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <HeroHeader /> */}
      <HeroSection />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
});

export default Main;
