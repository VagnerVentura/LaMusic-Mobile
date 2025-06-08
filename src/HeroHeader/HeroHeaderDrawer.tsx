import React,  { useState } from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import HeroHeaderStyles from './HeroHeaderStyles'; // Corrigi o nome do estilo para HeroHeaderStyles
import { useNavigation } from '@react-navigation/native'; // Importe o hook de navegação
import { DrawerActions } from '@react-navigation/native';
import ModalDrawer from '../ModalDrawer/ModalDrawer';



const HeroHeader = ({ navigation }) => {

  const [isDrawerVisible, setDrawerVisible] = useState(false); // Controle do modal

  const openDrawer = () => {
    setDrawerVisible(true); // Abre o modal
  };

  const closeDrawer = () => {
    setDrawerVisible(false); // Fecha o modal
  };



  return (
    <View style={HeroHeaderStyles.container}>
      <View style={HeroHeaderStyles.logo}>
        <TouchableOpacity style={HeroHeaderStyles.lamusic}>
          <Image source={require('../assets/icons/lamusic.png')} />
        </TouchableOpacity>
        <View style={HeroHeaderStyles.logo}>
          <TouchableOpacity style={HeroHeaderStyles.menu} onPress={openDrawer}>
            <Image source={require('../assets/icons/menu.png')} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Modal Drawer */}
      <ModalDrawer visible={isDrawerVisible} onClose={closeDrawer} />
    </View>
  );
};

export default HeroHeader;