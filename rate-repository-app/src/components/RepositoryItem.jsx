import React from "react";
import { View, StyleSheet, Image } from "react-native";
import theme from "../theme";
import Text from "./Text";

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

const UserAvatar = ({ url }) => {
  const imageStyles = StyleSheet.create({
    image: {
      width: 50,
      height: 50,
      margin: 12,
      borderRadius: 10,
    },
  });

  return <Image source={{ uri: url }} style={imageStyles.image} />;
};

const DetailItem = ({ count, label }) => {
  const detailItemStyles = StyleSheet.create({
    label: { marginTop: 6 },
  });

  let countCopy = count;
  if (count >= 1000) {
    countCopy = `${Number(Math.round(count / 1000 + "e1") + "e-1")}k`;
  }

  return (
    <View>
      <Text fontWeight="bold">{countCopy}</Text>
      <Text style={detailItemStyles.label} color="textSecondary">
        {label}
      </Text>
    </View>
  );
};

const Detail = ({
  stargazersCount,
  forksCount,
  reviewCount,
  ratingAverage,
}) => {
  const detailStyles = StyleSheet.create({
    detail: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-evenly",
      margin: 10,
    },
  });

  return (
    <View style={detailStyles.detail}>
      <DetailItem count={stargazersCount} label={"Stars"} />
      <DetailItem count={forksCount} label={"Forks"} />
      <DetailItem count={reviewCount} label={"Reviews"} />
      <DetailItem count={ratingAverage} label={"Rating"} />
    </View>
  );
};

const LanguageTag = ({ language }) => {
  const languageTagStyles = StyleSheet.create({
    languageTag: {
      backgroundColor: theme.colors.primary,
      padding: 6,
      borderRadius: 8,
      color: "white",
      marginTop: 8,
    },
  });
  return <Text style={languageTagStyles.languageTag}>{language}</Text>;
};

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
