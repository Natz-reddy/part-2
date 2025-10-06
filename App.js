import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './HomeScreen';
import AddMenuScreen from './AddMenuScreen';

const Stack = createNativeStackNavigator();
export default function App() {
  const [menuItems, setMenuItems] = useState([]); }
