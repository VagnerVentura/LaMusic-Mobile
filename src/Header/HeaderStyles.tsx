import {StyleSheet} from 'react-native';

const HeaderStyles = StyleSheet.create({
  headerNavigation: {
    flexDirection: 'column-reverse',
    maxHeight: 65,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#2d6b1e',
    margin: 0,
  },
  navigation: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profileCircle: {
    marginRight: 5,
  },
  headerSearch: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 20,
    height: 40,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },
  magnifyingGlass: {
    margin: 0,
    padding: 0,
  },
  searchInput: {
    minWidth: 100,
    fontSize: 16,
    backgroundColor: '#fff',
    color: '#000',
    margin: 0,
    padding: 5,
  },
  shoppingCart: {
    marginLeft: 5,
  },
  icon: {
    width: 24,
    height: 24,
    marginLeft: 5,
    marginRight: 5,
    padding: 5,
  },
  cartCountContainer: {
    position: "absolute",
    top: -5,
    right: -5,
    backgroundColor: "#FF6347", // Vermelho
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  cartCountText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
});

export default HeaderStyles;
