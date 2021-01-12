import React from "react";
import { View, StyleSheet, Button, Linking } from "react-native";
import Text from "../Text";
import Detail from "./Detail";
import LanguageTag from "./LanguageTag";
import UserAvatar from "./UserAvatar";

const styles = StyleSheet.create({
  item: {
    backgroundColor: "white",
    paddingBottom: 8,
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

  buttonWrapper: {
    paddingHorizontal: 12,
  },
});

const RepositoryItem = ({ data, showAction, actionUrl }) => {
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

  const handleAction = () => {
    if (showAction && actionUrl) {
      Linking.openURL(actionUrl);
    } else {
      throw "Missing actionUrl in RepositoryItem";
    }
  };

  return (
    <View style={styles.item} testID="repositoryItem">
      <View style={styles.author}>
        <UserAvatar url={ownerAvatarUrl} />
        <View style={styles.authorText}>
          <Text
            fontWeight="bold"
            fontSize="subheading"
            style={styles.text}
            testID="fullName"
          >
            {fullName}
          </Text>

          <Text style={styles.text} color="textSecondary" testID="description">
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
      {showAction && (
        <View style={styles.buttonWrapper}>
          <Button title="Open in GitHub" onPress={handleAction} />
        </View>
      )}
    </View>
  );
};

export default RepositoryItem;
