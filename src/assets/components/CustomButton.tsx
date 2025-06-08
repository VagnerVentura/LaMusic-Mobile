import React, { useRef, useEffect } from 'react';
import { TouchableOpacity, View, Text, FlatList, StyleSheet, Image, SafeAreaView, Animated } from 'react-native';


const CustomButton = ({ title, onPress }) => {
    const colorValue = useRef(new Animated.Value(0)).current;
  
    useEffect(() => {
        Animated.loop(
        Animated.sequence([
          Animated.timing(colorValue, {
            toValue: 1,
            duration: 3000, 
            useNativeDriver: false,
          }),
          Animated.timing(colorValue, {
            toValue: 0,
            duration: 3000, 
            useNativeDriver: false,
          }),
        ])
      ).start();
    }, [colorValue]);
  
    const backgroundColor = colorValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['#3d572f', '#96d674'], 
    });
  
    return (
      <TouchableOpacity onPress={onPress}>
        <Animated.View style={[styles.btn, { backgroundColor }]}>
          <Text style={styles.btnText}>{title}</Text>
        </Animated.View>
      </TouchableOpacity>
    );
  };

  const styles = StyleSheet.create({
    btn: {
      width: '100%',
      height: 50,
      justifyContent: 'center',
      paddingVertical: 8,
      paddingHorizontal: 16,
      borderRadius: 4,
      borderWidth: 0,
      elevation: 3, 
    },
    btnText: {
      color: '#ffffff',
      fontSize: 14,
      fontWeight: '800', 
      textTransform: 'uppercase',
      textAlign: 'center',
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    itemContainer: {
      flex: 1,
      alignItems: 'center',
      margin: 10,
      backgroundColor: '#f9f9f9',
      padding: 10,
      borderRadius: 8,
      elevation: 2, 
    },
    image: {
      width: 100,
      height: 100,
      marginBottom: 10,
    },
    nome: {
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    preco: {
      fontSize: 14,
      color: '#888',
      marginBottom: 10,
      textAlign: 'center',
    },
  });
  
  export default CustomButton;