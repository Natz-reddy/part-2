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
const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#d8cfc4' },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 },
  subtitle: { fontSize: 16, textAlign: 'center', marginBottom: 20 },
  empty: { textAlign: 'center', fontStyle: 'italic', marginTop: 40 },
  card: { backgroundColor: '#fff', borderRadius: 10, padding: 15, marginBottom: 10 },
  name: { fontSize: 18, fontWeight: 'bold', marginBottom: 4 },
  button: { backgroundColor: '#D2B48C', padding: 12, borderRadius: 8, alignItems: 'center', marginTop: 20 },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
});