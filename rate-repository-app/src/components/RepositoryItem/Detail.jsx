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
      <DetailItem count={stargazersCount} label={"Stars"} />
      <DetailItem count={forksCount} label={"Forks"} />
      <DetailItem count={reviewCount} label={"Reviews"} />
      <DetailItem count={ratingAverage} label={"Rating"} />
    </View>
  );
};

export default Detail;
