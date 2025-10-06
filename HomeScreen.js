import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation, menuItems }) {
  const totalItems = menuItems.length;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Christoffel's Menu </Text>
      <Text style={styles.subtitle}>Total Dishes: {totalItems}</Text>
      )


}