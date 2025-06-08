import React from 'react';
import {View, Image} from 'react-native';
import Swiper from 'react-native-swiper';
import HeroSectionStyles from './HeroSectionStyles';

const HeroSection = () => {
  return (
    <View style={HeroSectionStyles.container}>
      <Swiper
        style={HeroSectionStyles.wrapper}
        showsButtons={false}
        paginationStyle={HeroSectionStyles.hiddenPagination}
        autoplay={true}
        loop={true}>
        {/* Primeiro slide */}
        <View style={HeroSectionStyles.slide}>
          <View style={HeroSectionStyles.slideImg}>
            <Image
              source={require('../assets/img/saldao.png')}
              style={HeroSectionStyles.saldao}
            />
            <Image
              source={require('../assets/img/instrumentos-musicais.jpg')}
              style={HeroSectionStyles.imageInstrumentos}
            />
          </View>
        </View>

        {/* Segundo slide */}
        <View style={HeroSectionStyles.slide}>
          <View style={HeroSectionStyles.slideImg}>
            <Image
              source={require('../assets/img/40off.png')}
              style={HeroSectionStyles.quarentaOff}
            />
            <Image
              source={require('../assets/img/guitarra.jpg')}
              style={HeroSectionStyles.imageGuitarra}
            />
          </View>
        </View>
      </Swiper>
    </View>
  );
};

export default HeroSection;
