import React from "react";
import { StyleSheet, Image } from "react-native";

const UserAvatar = ({ url }) => {
  const imageStyles = StyleSheet.create({
    image: {
      width: 50,
      height: 50,
      margin: 12,
      borderRadius: 10,
    },
  });

  return (
    <Image
      source={{ uri: url }}
      style={imageStyles.image}
      testID="userAvatar"
    />
  );
};

export default UserAvatar;
