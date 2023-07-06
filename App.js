import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Screen1 from './screens/Screen1';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer screenOptions={{ headerShown: true }}>
      <Stack.Navigator>
        <Stack.Screen name="Screen1" component={Screen1} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
