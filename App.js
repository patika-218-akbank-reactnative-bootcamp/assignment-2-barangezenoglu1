import React from "react";
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import { HomeScreen } from "./src/screens/HomeScreen";
import { ChatDetail } from "./src/screens/ChatDetail";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }}>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="ChatDetail" component={ChatDetail} />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}
