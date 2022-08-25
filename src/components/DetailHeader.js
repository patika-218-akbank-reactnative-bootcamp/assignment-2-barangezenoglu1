import React from "react";
import { StyleSheet, View, Dimensions, Image, Text } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Foundation from "react-native-vector-icons/Foundation";
import Entypo from "react-native-vector-icons/Entypo";

const windowWidth = Dimensions.get("window").width;
export const DetailHeader = ({ profilePhoto, recieverName }) => {
  return (
    <View style={styles.container}>
      <View style={styles.profileWrapper}>
        <Image source={{ uri: profilePhoto }} style={styles.profilePhoto} />
        <Text style={styles.profileName}>{recieverName}</Text>
      </View>
      <View style={styles.iconContainer}>
        <FontAwesome name="video-camera" style={styles.icon} />
        <Foundation name="telephone" style={styles.icon} />
        <Entypo name="dots-three-vertical" style={styles.icon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: windowWidth,
    padding: 10,
    backgroundColor: "#00A884", // WhatsApp theme color
  },
  profileWrapper: {
    display: "flex",
    flexDirection: "row",
  },
  profilePhoto: {
    marginRight: 10,
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  profileName: {
    padding: 5,
    marginTop: 20,
    color: "#FFFF",
    fontSize: 20,
    fontWeight: "500",
  },
  iconContainer: {
    display: "flex",
    flexDirection: "row",
    padding: 5,
    marginTop: 24,
    left: 20,
  },
  icon: {
    fontSize: 23,
    color: "white",
    marginRight: 25,
  },
});
