import React from "react";
import { StyleSheet, Dimensions, View, Text, Image } from "react-native";

const windowWidth = Dimensions.get("window").width; //It's provides your component width equals to screen width.
export const Chat = ({
  recieverName,
  lastUpdateDate,
  lastMessage,
  profilePhoto,
}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: profilePhoto }} />
      <View
        style={[
          styles.chatWrapper,
          recieverName
            ? { borderBottomWidth: 1, borderBottomColor: "#D5D0D0" }
            : "", // I should check recieverName because even if It's empty, borderBottom will appear and I want to avoid that behavior.
        ]}
      >
        <View>
          <View style={styles.recieverNameAndDateWrapper}>
            <Text style={styles.recieverName}>{recieverName}</Text>
            <Text style={styles.date}>{lastUpdateDate}</Text>
          </View>
          <Text>{lastMessage}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
    paddingBottom: 2,
    display: "flex",
    flexDirection: "row",
    height: 90,
    width: windowWidth,
  },
  chatWrapper: {
    display: "flex",
    flexDirection: "row",
    padding: 5,
    marginLeft: 4,
  },
  image: {
    marginRight: 10,
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  recieverNameAndDateWrapper: {
    display: "flex",
    flexDirection: "row",
    paddingBottom: 8,
  },
  recieverName: {
    marginRight: windowWidth / 2,
    color: "#000000",
    fontSize: 20,
    fontWeight: "500",
  },
  date: {
    color: "grey",
  },
});
