import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './HomeScreen';
import AddMenuScreen from './AddMenuScreen';
import FilterMenuScreen from './FilterMenuScreen';

const Stack = createNativeStackNavigator();

const predefinedMenu = [
  { name: 'Tomato Soup', description: 'Classic starter', course: 'Starters', price: 45 },
  { name: 'Grilled Chicken', description: 'Served with veggies', course: 'Mains', price: 120 },
  { name: 'Chocolate Mousse', description: 'Rich and creamy', course: 'Dessert', price: 60 },
];

export default function App() {
  const [menuItems, setMenuItems] = useState(predefinedMenu);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home">
          {(props) => (
            <HomeScreen
              {...props}
              menuItems={menuItems}
              setMenuItems={setMenuItems}
            />
          )}
        </Stack.Screen>

        <Stack.Screen name="AddMenu">
          {(props) => (
            <AddMenuScreen
              {...props}
              menuItems={menuItems}
              setMenuItems={setMenuItems}
            />
          )}
        </Stack.Screen>

        <Stack.Screen name="FilterMenu">
          {(props) => (
            <FilterMenuScreen
              {...props}
              menuItems={menuItems}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
