import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { Details, Home } from './src/screens';
// import { useFonts } from 'expo-font'

const Stack = createNativeStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent'
  }
}
// https://github.com/adrianhajdin/react-native-nft-marketplace/blob/main/components/DetailsDesc.js
// https://www.youtube.com/watch?v=_ivIUCSOZ78
// TODO: Use constants instead of strings in screen names
// TODO: Move styles into separate files (use constants for values)
// TODO: Move screens and components into different folders
// TODO: Remove unused export keywords (e.g. People)
// TODO: Play with shadows (add/remove)
// TODO: Create a Spacer component to indent between Views (e.g. Cards)
// TODO: Integrate fonts into the project
// TODO: Add simple registration
// TODO: Use a name specified during the registration (Hello, user)
// TODO: Fix warnings and errors
// TODO: <></> or <View></View> is better? (inside DetailsDesc)
// TODO: Create a separate component for ListHeader of FlatList
// TODO: Remove unused elements from import
// TODO: Use global paddingHorizontal constant for main containers
// TODO: How to save a position of scroll?

const App = () => {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator 
        screenOptions={{ headerShown: false}} 
        initialRouteName='Home'
      >
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Details' component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
