import {StyleSheet} from 'react-native';

const HeroHeaderStyles = StyleSheet.create({
  container: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0,
    backgroundColor: '#fff',
  },
  logo: {
    flex: 1,
    flexDirection: 'row', // Alinha os itens lado a lado
    alignItems: 'center', // Centraliza verticalmente
  },
  lamusic: {
    marginLeft: 10,
    marginRight: 'auto',
  },
  menu: {
    marginLeft: 'auto',
    marginRight: 10,
  },
});

export default HeroHeaderStyles;
