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

  const removeDish = (id) => {
    setMenuItems(menuItems.filter((dish) => dish.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Manage Menu</Text>

  
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

<Text style={styles.title}> Current Menu</Text>

   
      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={{ flex: 1 }}>
              <Text style={styles.name}>{item.name}</Text>
              <Text>{item.description}</Text>
              <Text>Course: {item.course}</Text>
              <Text>Price: R{item.price}</Text>
            </View>
            <TouchableOpacity
              style={styles.removeButton}
              onPress={() => removeDish(item.id)}
            >
              <Text style={styles.removeText}>Remove</Text>
            </TouchableOpacity>
          </View>
        )}
      />

<View style={styles.navContainer}>
  <TouchableOpacity
    style={[styles.navButton, { backgroundColor: 'brown' }]}
    onPress={() => navigation.navigate('Home')}
  >
    <Text style={[styles.navButtonText, { color: '#fff' }]}>Go Back Home</Text>
  </TouchableOpacity>

  <TouchableOpacity
    style={[styles.navButton, { backgroundColor: '#D2B48C' }]}
    onPress={() => navigation.navigate('FilterMenu', { menuItems })}
  >
    <Text style={[styles.navButtonText, { color: '#fff' }]}>Go to Filter Menu</Text>
  </TouchableOpacity>
</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#d8cfc4' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 15, textAlign: 'center', color: '#000' },
  input: {borderWidth: 1,borderColor: '#ccc',borderRadius: 8,padding: 10,marginBottom: 12,
backgroundColor: '#fff',color: '#000',},
  picker: {marginBottom: 16,backgroundColor: "white", },
  button: { backgroundColor: '#77dd77', padding: 12, borderRadius: 8, alignItems: 'center', marginBottom: 20 },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  card: {flexDirection: 'row',alignItems: 'center',justifyContent: 'space-between',
backgroundColor: '#fff',borderRadius: 10,padding: 15,marginBottom: 10,
  },
  name: { fontSize: 18, fontWeight: 'bold', marginBottom: 4, color: '#000' },
  removeButton: {backgroundColor: 'brown',paddingVertical: 6,paddingHorizontal: 10,borderRadius: 6,
  },
removeText: { color: '#fff', fontWeight: 'bold', fontSize: 14 },
navContainer: { marginTop: 20, gap: 10 },
navButton: {backgroundColor: '#fff',borderWidth: 1,borderColor: '#ccc',padding: 12,borderRadius: 8,alignItems: 'center',},
navButtonText: { fontSize: 16, color: '#000', fontWeight: '600' },
});
