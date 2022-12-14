import React from "react";
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  Image,
  Pressable,
} from "react-native";

const windowWidth = Dimensions.get("window").width; // It's provides your component width equals to screen width.
export function Chat({
  navigation,
  recieverName,
  messages,
  lastUpdateDate,
  lastMessage,
  profilePhoto,
}) {
  return (
    <Pressable
      onPress={() =>
        navigation.navigate("ChatDetail", {
          recieverName,
          messages,
          profilePhoto,
        })
      }
    >
      <View style={styles.container}>
        <Image style={styles.profilePhoto} source={{ uri: profilePhoto }} />
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
            <Text
              style={styles.lastMessage}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {lastMessage}
            </Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
}

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
  profilePhoto: {
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
  lastMessage: {
    width: "48%",
  },
});
