import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";

export default function FilterMenuScreen({ navigation, menuItems }) {
  const [filter, setFilter] = useState("All");

 
  const filteredMenu =
    filter === "All" ? menuItems : menuItems.filter((item) => item.course === filter);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filter Menu</Text>

      <Picker
        selectedValue={filter}
        onValueChange={(itemValue) => setFilter(itemValue)}
        style={styles.picker}
        itemStyle={{ color: '#000', fontSize: 16 }}
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

      <View style={styles.navContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.buttonText}>Back to Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1,padding: 16,backgroundColor: "#d8cfc4"},
  title: {fontSize: 22,fontWeight: "bold",marginBottom: 16,textAlign: "center",color: "black"},
  picker: {marginBottom: 16,backgroundColor: "white"},
  menuItem: {padding: 12,marginBottom: 6,backgroundColor: "#fff",borderRadius: 6},
  menuText: {fontSize: 16,color: "black"},
  navContainer: {marginTop: 20},
  button: {backgroundColor: 'brown',padding: 12,borderRadius: 8,alignItems: 'center'},
  buttonText: {color: '#fff',fontSize: 16,fontWeight: 'bold'},
});
