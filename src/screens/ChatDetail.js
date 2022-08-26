import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from "react-native";
import { DetailHeader } from "../components/DetailHeader";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import BackgroundImage from "../assets/whatsapp-background.png";
import { TextBox } from "../components/TextBox";

export const ChatDetail = ({ route, navigation }) => {
  const { recieverName, messages, profilePhoto } = route.params;
  return (
    <View style={{ flex: 1 }}>
      <DetailHeader profilePhoto={profilePhoto} recieverName={recieverName} />
      <ImageBackground
        // Whatsap chat detail original background.
        source={BackgroundImage}
        resizeMode="cover"
        style={styles.imageBackground}
      >
        <ScrollView>
          {messages.map((message) => {
            return <TextBox key={message.id} message={message.text} />;
          })}
        </ScrollView>
        <View style={styles.inputAndImage}>
          <View style={styles.textInputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Type a message"
              placeholderTextColor="#000"
            />
          </View>
          <View style={styles.imageWrapper}>
            <FontAwesome name="microphone" style={styles.image} />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    height: 560,
    flex: 1,
  },
  inputAndImage: {
    display: "flex",
    flexDirection: "row",
  },
  textInputContainer: {
    borderRadius: 30,
    backgroundColor: "white",
    height: 40,
    width: 340,
    marginBottom: 20,
    marginLeft: 10,
  },
  textInput: {
    padding: 10,
    marginLeft: 15,
  },
  imageWrapper: {
    backgroundColor: "#00A884",
    height: 50,
    width: 50,
    alignItems: "center",
    borderRadius: 50,
    paddingTop: 5,
  },
  image: {
    color: "white",
    fontSize: 30,
    padding: 5,
  },
});
