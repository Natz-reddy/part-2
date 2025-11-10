import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";

export default function FilterMenuScreen({ navigation }) {
  const [filter, setFilter] = useState("All");

  const [menu] = useState([
    { id: "1", name: 'Tomato Soup', description: 'Classic starter', course: 'Starter', price: 45 },
    { id: "2", name: 'Grilled Chicken', description: 'Served with veggies', course: 'Main', price: 120 },
    { id: "3", name: 'Chocolate Mousse', description: 'Rich and creamy', course: 'Dessert', price: 60 }
  ]);

  const filteredMenu =
    filter === "All" ? menu : menu.filter((item) => item.course === filter);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filter Menu</Text>
