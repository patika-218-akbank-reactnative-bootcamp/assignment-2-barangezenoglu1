import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Tab } from "./Tab";

export const Tabs = () => {
  const [tabs] = useState(["CHATS", "STATUS", "CALLS"]);
  const [selectedTab, setSelectedTab] = useState("CHATS");
  /* const [isActive, setIsActive] = useState(true); */

  const handlePressTab = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <View style={styles.container}>
      {tabs.map((tab, index) => {
        return <Tab key={index} title={tab} isActive={selectedTab === tab} onPress={handlePressTab}  />;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#00A884",
  },
});
