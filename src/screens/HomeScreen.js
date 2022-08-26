import React from "react";
import { StatusBar, View } from "react-native";
import { Header } from "../components/Header";
import { Tabs } from "../components/Tabs";

export const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor={"#00A884"} barStyle={"light-content"} />
      <Header />
      <Tabs navigation={navigation} />
    </View>
  );
};
