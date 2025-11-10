import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation, route, menuItems, setMenuItems }) {

  const presetMenu = [
    { id: '1', name: 'Beef Fillet', description: 'Served with mushroom sauce', course: 'Main', price: 180 },
    { id: '2', name: 'Greek Salad', description: 'Fresh with feta and olives', course: 'Starter', price: 75 },
    { id: '3', name: 'Chocolate Mousse', description: 'Rich dark chocolate dessert', course: 'Dessert', price: 90 },
    { id: '4', name: 'Grilled Chicken', description: 'With roasted vegetables', course: 'Main', price: 150 },
  ];


  useEffect(() => {
    if (menuItems.length === 0) {
      setMenuItems(presetMenu);
    }
  }, []);


  useEffect(() => {
    if (route.params?.newItem) {
      setMenuItems((prevItems) => [...prevItems, route.params.newItem]);
    }
  }, [route.params?.newItem]);

  const totalItems = menuItems.length;

  const averagePrice =
    menuItems.length > 0
      ? (menuItems.reduce((sum, item) => sum + item.price, 0) / menuItems.length).toFixed(2): 0;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Christoffel's Menu</Text>
      <Text style={styles.subtitle}>Total Dishes: {totalItems}</Text>
      <Text style={styles.subtitle}>Average Price: R{averagePrice}</Text>

      {menuItems.length === 0 ? (
        <Text style={styles.empty}>No dishes yet</Text>
      ) : (
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
      )}

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('AddMenu', { menuItems, setMenuItems })}
      >
        <Text style={styles.buttonText}>Add Menu Item</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('FilterMenu', { menuItems })}
      >
        <Text style={styles.buttonText}>Filter Menu</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#d8cfc4' },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 10, color: '#000' },
  subtitle: { fontSize: 16, textAlign: 'center', marginBottom: 10, color: '#000' },
  empty: { textAlign: 'center', fontStyle: 'italic', marginTop: 40, color: '#000' },
  card: { backgroundColor: '#fff', borderRadius: 10, padding: 15, marginBottom: 10 },
  name: { fontSize: 18, fontWeight: 'bold', marginBottom: 4 },
  button: { backgroundColor: '#D2B48C', padding: 12, borderRadius: 8, alignItems: 'center', marginTop: 10 },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
});
