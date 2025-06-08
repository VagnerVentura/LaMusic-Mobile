import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import HeroHeaderStyles from './HeroHeaderStyles'; // Corrigi o nome do estilo para HeroHeaderStyles
import { useNavigation } from '@react-navigation/native'; // Importe o hook de navegação
import { DrawerActions } from '@react-navigation/native';



const HeroHeader = ({ navigation }) => {

return (
    <View style={HeroHeaderStyles.container}>
      <View style={HeroHeaderStyles.logo}>
        {/* Logo da aplicação */}
        <TouchableOpacity style={HeroHeaderStyles.lamusic}>
          <Image source={require('../assets/icons/lamusic.png')} />
        </TouchableOpacity>
        <View style={HeroHeaderStyles.logo}>
          <TouchableOpacity style={HeroHeaderStyles.menu} onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
            <Image source={require('../assets/icons/menu.png')} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default HeroHeader;
