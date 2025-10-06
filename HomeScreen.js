import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation, menuItems }) {
  const totalItems = menuItems.length;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Christoffel's Menu </Text>
      <Text style={styles.subtitle}>Total Dishes: {totalItems}</Text>

      {menuItems.length === 0 ? (
        <Text style={styles.empty}> Menu Items</Text>
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
        onPress={() => navigation.navigate('AddMenu')}
      >
        <Text style={styles.buttonText}>Add Menu Item</Text>
      </TouchableOpacity>
    </View>
  );
}