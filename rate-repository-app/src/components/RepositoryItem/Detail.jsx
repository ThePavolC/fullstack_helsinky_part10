import React from "react";
import { View, StyleSheet } from "react-native";
import DetailItem from "./Detailtem";

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
      <DetailItem
        count={stargazersCount}
        label={"Stars"}
        testID="starsDetail"
      />
      <DetailItem count={forksCount} label={"Forks"} testID="forksDetail" />
      <DetailItem
        count={reviewCount}
        label={"Reviews"}
        testID="reviewsDetail"
      />
      <DetailItem
        count={ratingAverage}
        label={"Rating"}
        testID="ratingDetail"
      />
    </View>
  );
};

export default Detail;
