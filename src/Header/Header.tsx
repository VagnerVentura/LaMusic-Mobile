import React from "react";
import {
  View,
  TouchableOpacity,
  Image,
  TextInput,
  StatusBar,
  Text,
} from "react-native";
import HeaderStyles from "./HeaderStyles";

const Header = ({ navigation, cartCount = 0 }) => {
  return (
    <View style={HeaderStyles.headerNavigation}>
      <StatusBar backgroundColor="#2d6b1e" barStyle="light-content" />
      <View style={HeaderStyles.navigation}>
        {/* Ícone do perfil que abre o menu lateral */}
        <TouchableOpacity
          style={HeaderStyles.profileCircle}
          onPress={() => navigation.navigate("Login")}
        >
          <Image
            source={require("../assets/icons/profile-circle.png")}
            style={HeaderStyles.icon}
          />
        </TouchableOpacity>

        {/* Barra de pesquisa */}
        <View style={HeaderStyles.headerSearch}>
          <TouchableOpacity style={HeaderStyles.magnifyingGlass}>
            <Image
              source={require("../assets/icons/magnifying-glass.png")}
              style={HeaderStyles.icon}
            />
          </TouchableOpacity>
          <TextInput
            style={HeaderStyles.searchInput}
            maxLength={800}
            placeholder="Buscar no LaMusic"
            placeholderTextColor="#888"
          />
        </View>

        {/* Ícone do carrinho de compras */}
        <TouchableOpacity
          style={HeaderStyles.shoppingCart}
          onPress={() => navigation.navigate("Carrinho")}
        >
          <Image
            source={require("../assets/icons/shopping-cart.png")}
            style={HeaderStyles.icon}
          />
          {/* Número de itens no carrinho */}
          {cartCount > 0 && (
            <View style={HeaderStyles.cartCountContainer}>
              <Text style={HeaderStyles.cartCountText}>{cartCount}</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
