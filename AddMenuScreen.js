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


      </View>
  );








}