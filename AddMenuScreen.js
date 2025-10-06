import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function AddMenuScreen({ navigation, menuItems, setMenuItems }) {
const [dishName, setDishName] = useState('');
  const [dishDescription, setDishDescription] = useState('');
  const [dishPrice, setDishPrice] = useState('');
  const [course, setCourse] = useState('Starter'); 
  const addDish = () => {
    if (dishName.trim() && dishDescription.trim() && dishPrice.trim()) {
      const newDish = {
        id: Date.now().toString(),
        name: dishName,
        description: dishDescription,
        price: Number(dishPrice),
        course,
      };
      setMenuItems([...menuItems, newDish]);
      setDishName('');
      setDishDescription('');
      setDishPrice('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Menu Item</Text>

      <TextInput
        style={styles.input}
        placeholder="Dish Name"
        placeholderTextColor="#555"
        value={dishName}
        onChangeText={setDishName}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        placeholderTextColor="#555"
        value={dishDescription}
        onChangeText={setDishDescription}
      />
      <TextInput
        style={styles.input}
        placeholder="Price"
        placeholderTextColor="#555"
        keyboardType="numeric"
        value={dishPrice}
        onChangeText={setDishPrice}
      />

      <Picker
        selectedValue={course}
        onValueChange={(itemValue) => setCourse(itemValue)}
        style={styles.picker}
        itemStyle={{ color: '#000', fontSize: 16 }}
      >
        <Picker.Item label="Starter" value="Starter" />
        <Picker.Item label="Main" value="Main" />
        <Picker.Item label="Dessert" value="Dessert" />
      </Picker>

      <TouchableOpacity style={styles.button} onPress={addDish}>
        <Text style={styles.buttonText}>Add Dish</Text>
      </TouchableOpacity>

      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>{item.name}</Text>
            <Text>{item.description}</Text>
            <Text>Course: {item.course}</Text>
            <Text>Price: R{item.price}</Text>
          </View>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#d8cfc4' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 15, textAlign: 'center' },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 10, marginBottom: 12, backgroundColor: '#fff', color: '#000' },
  picker: { marginBottom: 16, backgroundColor: '#fff', height: 100 },
  button: { backgroundColor: '#77dd77', padding: 12, borderRadius: 8, alignItems: 'center', marginBottom: 20 },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  card: { backgroundColor: '#fff', borderRadius: 10, padding: 15, marginBottom: 10 },
  name: { fontSize: 18, fontWeight: 'bold', marginBottom: 4 },
});
