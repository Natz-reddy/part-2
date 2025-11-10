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

      <Picker
        selectedValue={filter}
        onValueChange={(itemValue) => setFilter(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="All Courses" value="All" />
        <Picker.Item label="Starter" value="Starter" />
        <Picker.Item label="Main" value="Main" />
        <Picker.Item label="Dessert" value="Dessert" />
      </Picker>

      <FlatList
        data={filteredMenu}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.menuItem}>
            <Text style={styles.menuText}>
              {item.name} - R{item.price} ({item.course})
            </Text>
          </View>
        )}
      />
