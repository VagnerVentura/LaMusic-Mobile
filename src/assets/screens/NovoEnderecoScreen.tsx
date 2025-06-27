import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import api from '../../../api';

export default function NovoEnderecoScreen({ navigation }) {
  const [form, setForm] = useState({
    type: 'shipping',
    label: '',
    recipientName: '',
    street: '',
    number: '',
    complement: '',
    neighborhood: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'Brasil',
    isDefault: false,
  });

  const handleChange = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  const handleSubmit = async () => {
    try {
      const payload = {
        ...form,
        default: form.isDefault, // enviar como "default" (compatível com seu DTO)
      };

      const response = await api.post('/addresses', payload);
      Alert.alert('Sucesso', 'Endereço cadastrado com sucesso!');
      navigation.goBack();
    } catch (error) {
      console.error('Erro ao salvar endereço:', error?.response?.data || error);
      Alert.alert('Erro', 'Não foi possível cadastrar o endereço. Verifique os dados e tente novamente.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Novo Endereço</Text>

      <Text style={styles.label}>Tipo</Text>
      <View style={styles.pickerWrapper}>
        <Picker
          selectedValue={form.type}
          onValueChange={(value) => handleChange('type', value)}
          style={styles.picker}
        >
          <Picker.Item label="Entrega" value="shipping" />
          <Picker.Item label="Cobrança" value="billing" />
        </Picker>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Etiqueta (ex: Casa, Trabalho)"
        value={form.label}
        onChangeText={(text) => handleChange('label', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Nome do destinatário"
        value={form.recipientName}
        onChangeText={(text) => handleChange('recipientName', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Rua"
        value={form.street}
        onChangeText={(text) => handleChange('street', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Número"
        value={form.number}
        onChangeText={(text) => handleChange('number', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Complemento"
        value={form.complement}
        onChangeText={(text) => handleChange('complement', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Bairro"
        value={form.neighborhood}
        onChangeText={(text) => handleChange('neighborhood', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Cidade"
        value={form.city}
        onChangeText={(text) => handleChange('city', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Estado (ex: SP)"
        value={form.state}
        onChangeText={(text) => handleChange('state', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="CEP"
        keyboardType="numeric"
        value={form.zipCode}
        onChangeText={(text) => handleChange('zipCode', text)}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Salvar Endereço</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fefefe',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '#3d572f',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#444',
    marginTop: 12,
  },
  pickerWrapper: {
    backgroundColor: '#e0e0e0',
    borderRadius: 6,
    marginBottom: 12,
  },
  picker: {
    height: 50,
    width: '100%',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 10,
    marginVertical: 6,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#3d572f',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
