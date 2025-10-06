import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './HomeScreen';
import AddMenuScreen from './AddMenuScreen';

const Stack = createNativeStackNavigator();
export default function App() {
  const [menuItems, setMenuItems] = useState([]);
   
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home">
          {(props) => (
            <HomeScreen
              {...props}
              menuItems={menuItems}
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

