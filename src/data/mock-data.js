import uuid from "react-native-uuid";

const { v4: uuidv4 } = require("uuid");

function createMockData(number) { // This function is a mock data generator. 
  let data = [];
  for (let i = 1; i < number; i++) {
    let updatedData = {
      id: uuidv4(),
      receiver: {
        id: uuidv4(),
        name: `User${i}`,
        profilePhoto: `https://xsgames.co/randomusers/assets/avatars/male/${i}.jpg`,
      },
      messages: [
        {
          text: "Message 1",
          dateTime: "11:40",
        },
        {
          text: "Message 2",
          dateTime: "11:40",
        },
        {
          text: "Message 3",
          dateTime: "11:40",
        },
      ],
    };
    data.push(updatedData);
  }
  return data;
}

export const chats = createMockData(15);
