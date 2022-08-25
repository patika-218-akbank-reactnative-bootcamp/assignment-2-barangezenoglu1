import React from "react";
import { View, TextInput, StyleSheet, Dimensions, Image, Text } from "react-native";
import { DetailHeader } from "../components/DetailHeader";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import BackgroundImage from "../assets/whatsapp-background.png";

const windowHeight = Dimensions.get("window").height;
export const ChatDetail = ({ route, navigation }) => {
  const { messageId, recieverName, messages, profilePhoto } = route.params;
  return (
    <View>
      <DetailHeader profilePhoto={profilePhoto} recieverName={recieverName} />
      <View style={styles.content}>
        <Text style={styles.textBox} >baran</Text>
        <Image source={BackgroundImage} />
        <View style={styles.inputContainer}>
          <TextInput style={styles.input}></TextInput>
          <View style={styles.inputIconContainer}>
            <FontAwesome name="microphone" style={styles.inputIcon} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    height: windowHeight,
  },
  textBox: {
    height: 20,
    
    color: 'red'
  },
  inputContainer: {
    backgroundColor: "white",
    position: "absolute",
    height: 50,
    width: 320,
    top: windowHeight - 180,
    left: 0,
    right: 0,
    bottom: 4,
    marginLeft: 20,
    borderRadius: 15,
  },
  input: {
    color: "white",
  },
  inputIcon: {
    fontSize: 30,
    marginTop: 15,
    color: "white",
  },
  inputIconContainer: {
    alignItems: "center",
    fontSize: 30,
    width: 60,
    height: 60,
    backgroundColor: "#00A884",
    left: 325,
    top: -6,
    borderRadius: 50,
    position: "absolute",
  },
});
