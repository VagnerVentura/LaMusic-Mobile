import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Swiper from 'react-native-swiper';
// import HeroSection from '../HeroSection/HeroSection';

const Main = () => {
  return (
    <View style={styles.container}>
      <Swiper
        style={styles.wrapper}
        showsButtons={true}
        autoplay={true}
        loop={true}>
        {/* Primeiro slide */}
        <View style={styles.slide}>
          <View style={styles.slideText}>
            <Text style={styles.title}>Saldão</Text>
            <Text style={styles.year}>2024</Text>
            <Text style={styles.description}>Instrumentos de qualidade</Text>
          </View>
          <View style={styles.slideImg}>
            <Image
              source={require('../assets/img/instrumentos-musicais.jpg')}
              style={styles.image}
            />
          </View>
        </View>

        {/* Segundo slide */}
        <View style={styles.slide}>
          <View style={styles.slideText}>
            <Text style={styles.title}>40 %</Text>
            <Text style={styles.year}>OFF</Text>
            <Text style={styles.description}>em toda a linha de Guitarras</Text>
          </View>
          <View style={styles.slideImg}>
            <Image
              source={require('../assets/img/guitarra.jpg')}
              style={styles.image}
            />
          </View>
        </View>
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  wrapper: {
    height: 400,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  slideText: {
    marginBottom: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  year: {
    fontSize: 20,
  },
  description: {
    fontSize: 16,
  },
  slideImg: {
    marginTop: 20,
  },
  image: {
    width: 300,
    height: 200,
    resizeMode: 'contain',
  },
});

export default Main;
