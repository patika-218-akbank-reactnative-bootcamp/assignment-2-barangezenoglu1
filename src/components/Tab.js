import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

export const Tab = ({ title, isActive, onPress }) => {
  return (
    <TouchableOpacity onPress={() => onPress(title)}>
      <Text
        style={[
          styles.touchableTabs,
          isActive
            ? {
                borderBottomWidth: 4,
                borderBottomColor: "#FFFF",
                fontWeight: "800",
              }
            : null,
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchableTabs: {
    paddingBottom: 5,
    fontSize: 17,
    fontWeight: "300",
    color: "#FFFF",
  },
});
