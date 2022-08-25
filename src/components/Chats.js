import react from "react";
import { ScrollView, View } from "react-native";
import { Chat } from "./Chat";

export const Chats = ({chats}) => {
  return (
    <ScrollView>
      {chats.map((chat) => {
        return (
          <Chat
            key={chat.id}
            recieverName={chat.receiver.name}
            lastUpdateDate={chat.messages[chat.messages.length -1].dateTime} // In home screen we should see last updated date in every chat.
            lastMessage={chat.messages[chat.messages.length -1].text} // As date we should see last message in every chat.
            profilePhoto={chat.receiver.profilePhoto}
          />
        );
      })}
    </ScrollView>
  );
};
