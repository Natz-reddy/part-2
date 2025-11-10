import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import AddMenuScreen from './AddMenuScreen';
import FilterMenuScreen from './FilterMenuScreen';

const Stack = createStackNavigator();

export default function App() {
  const [menuItems, setMenuItems] = useState([]);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home">
          {(props) => (
            <HomeScreen {...props} menuItems={menuItems} setMenuItems={setMenuItems} />
          )}
        </Stack.Screen>

        <Stack.Screen name="AddMenu">
          {(props) => (
            <AddMenuScreen {...props} menuItems={menuItems} setMenuItems={setMenuItems} />
          )}
        </Stack.Screen>

        <Stack.Screen name="FilterMenu">
          {(props) => (
            <FilterMenuScreen {...props} menuItems={menuItems} />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
