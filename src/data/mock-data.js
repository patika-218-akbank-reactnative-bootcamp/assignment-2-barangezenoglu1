import uuid from "react-native-uuid";

const { v4: uuidv4 } = require("uuid");

function createMockData(number) {
  // This function is a mock data generator.
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
          id: 1,
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt orci tincidunt, pretium justo ut.",
          dateTime: "11:40",
        },
        {
          id: 2,
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at justo volutpat, tristique ex id, imperdiet urna. Quisque eu commodo erat, id aliquam nisi. Sed semper neque ac sapien suscipit, non eleifend justo luctus. Praesent lectus metus, fringilla sit amet ante fringilla, euismod laoreet eros. Duis dignissim enim at accumsan.",
          dateTime: "11:40",
        },
        {
          id: 3,
          text: "Lorem ipsum dolor sit amet.",
          dateTime: "11:40",
        },
        {
          id: 4,
          text: "Lorem ipsum dolor sit amet.",
          dateTime: "11:40",
        },
        {
          id: 5,
          text: "Lorem ipsum dolor sit amet.",
          dateTime: "11:40",
        },
        {
          id: 6,
          text: "Lorem ipsum dolor sit amet.",
          dateTime: "11:40",
        },
        {
          id: 7,
          text: "Lorem ipsum dolor sit amet.",
          dateTime: "11:40",
        },
        {
          id: 8,
          text: "Lorem ipsum dolor sit amet.",
          dateTime: "11:40",
        },
        {
          id: 9,
          text: "Lorem ipsum dolor sit amet.",
          dateTime: "11:40",
        },
        {
          id: 10,
          text: "Lorem ipsum dolor sit amet.",
          dateTime: "11:40",
        },
        {
          id: 11,
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt orci tincidunt, pretium justo ut.",
          dateTime: "11:40",
        },
      ],
    };
    data.push(updatedData);
  }
  return data;
}

export const chats = createMockData(15);
