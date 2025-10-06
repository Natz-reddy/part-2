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






}