import react from "react";
import { ScrollView, View } from "react-native";
import { Chat } from "./Chat";

export const Chats = ({chats, navigation}) => {
  return (
    <ScrollView>
      {chats.map((chat) => {
        return (
          <Chat
            key={chat.id}
            id={chat.id}
            navigation={navigation}
            recieverName={chat.receiver.name}
            lastUpdateDate={chat.messages[chat.messages.length -1].dateTime} // In home screen we should see last updated date in every chat.
            lastMessage={chat.messages[chat.messages.length -1].text} // As date we should see last message in every chat.
            profilePhoto={chat.receiver.profilePhoto}
            messages={chat.mesages}
          />
        );
      })}
    </ScrollView>
  );
};
