import React from "react";
import { View, StyleSheet } from "react-native";
import Text from "../Text";
import Detail from "./Detail";
import LanguageTag from "./LanguageTag";
import UserAvatar from "./UserAvatar";

const styles = StyleSheet.create({
  item: {
    backgroundColor: "white",
  },

  author: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 8,
  },

  authorText: {
    alignItems: "flex-start",
  },

  text: { marginTop: 6 },
});

const RepositoryItem = ({ data }) => {
  const {
    fullName,
    description,
    language,
    stargazersCount,
    forksCount,
    reviewCount,
    ratingAverage,
    ownerAvatarUrl,
  } = data;
  return (
    <View style={styles.item}>
      <View style={styles.author}>
        <UserAvatar url={ownerAvatarUrl} />
        <View style={styles.authorText}>
          <Text fontWeight="bold" fontSize="subheading" style={styles.text}>
            {fullName}
          </Text>

          <Text style={styles.text} color="textSecondary">
            {description}
          </Text>

          <LanguageTag language={language} />
        </View>
      </View>
      <Detail
        stargazersCount={stargazersCount}
        forksCount={forksCount}
        reviewCount={reviewCount}
        ratingAverage={ratingAverage}
      />
    </View>
  );
};

export default RepositoryItem;
