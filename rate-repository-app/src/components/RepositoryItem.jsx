import React from "react";
import { Text, View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  item: {},
  text: {},
});

const RepositoryItem = ({ data }) => {
  const {
    fullName,
    description,
    language,
    startgazersCount,
    forksCount,
    reviewCount,
    ratingAverage,
  } = data;
  return (
    <View style={styles.item}>
      <Text style={styles.text}>Full name: {fullName}</Text>
      <Text style={styles.text}>Description: {description}</Text>
      <Text style={styles.text}>Language: {language}</Text>
      <Text style={styles.text}>Starts: {startgazersCount}</Text>
      <Text style={styles.text}>Forks: {forksCount}</Text>
      <Text style={styles.text}>Reviews: {reviewCount}</Text>
      <Text style={styles.text}>Full Rating: {ratingAverage}</Text>
    </View>
  );
};

export default RepositoryItem;
