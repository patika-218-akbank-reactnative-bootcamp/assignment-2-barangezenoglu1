import React from "react";
import { View, Text, StyleSheet } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";

export const Header = () => {
  // I don't use export default. Since I want to use the component with same name everywhere in app.
  return (
    <View style={styles.container}>
      <Text style={styles.title}>WhatsApp</Text>
      <View style={styles.icons}>
        <AntDesign name="search1" style={styles.icons} />
        <Entypo name="dots-three-vertical" style={styles.icons} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#00A884", // WhatsApp theme color
    height: 70,
  },
  title: {
    padding: 10,
    color: "#FFFF",
    fontSize: 25,
  },
  icons: {
    display: "flex",
    flexDirection: "row",
    padding: 10,
    fontSize: 20,
    color: "#FFFF",
  },
});
