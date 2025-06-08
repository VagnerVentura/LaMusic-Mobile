import {StyleSheet} from 'react-native';

const HeroSectionstyles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: 430,
    height: 900,
  },
  wrapper: {
    height: 800,
  },
  slide: {
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  slideImg: {
    marginTop: 20,
  },
  saldao: {
    margin: 'auto',
    width: 300,
    height: 195,
  },
  imageInstrumentos: {
    width: 450,
    height: 480,
  },
  quarentaOff: {
    margin: 'auto',
    width: 300,
    height: 195,
  },
  imageGuitarra: {
    width: 450,
    height: 480,
  },
  hiddenPagination: {
    display: 'none', // Mover inline style para o StyleSheet
  },
});

export default HeroSectionstyles;
