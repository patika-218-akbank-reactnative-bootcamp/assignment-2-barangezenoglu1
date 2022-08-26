import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Tab } from "./Tab";
import Entypo from "react-native-vector-icons/Entypo";
import { Chats } from "./Chats";
import { chats } from "../data/mock-data";

export const Tabs = ({ navigation }) => {
  const [tabs] = useState(["CHATS", "STATUS", "CALLS"]);
  const [selectedTab, setSelectedTab] = useState("CHATS");

  const handlePressTab = (tab) => {
    setSelectedTab(tab);
  };
  const displayTabContent = (tab) => {
    // With this function we display content depends to selected tab.
    switch (tab) {
      case "CHATS":
        return <Chats chats={chats} navigation={navigation} />;
      case "STATUS" || "CALLS":
        return <Text>This feature will add.</Text>;
      case "CALLS":
        return <Text>This feature will add.</Text>;
    }
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Entypo name="camera" style={styles.icons} />
        {tabs.map((tab, index) => {
          return (
            <View key={index} style={styles.tabs}>
              <Tab
                title={tab}
                isActive={selectedTab === tab}
                onPress={handlePressTab}
              />
            </View>
          );
        })}
      </View>
      {displayTabContent(selectedTab)}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    backgroundColor: "#00A884",
  },
  tabs: {
    display: "flex",
    flexDirection: "row",
    paddingRight: 70,
    padding: 10,
  },
  icons: {
    display: "flex",
    flexDirection: "row",
    padding: 10,
    marginRight: 5,
    fontSize: 26,
    color: "#FFFF",
  },
});
