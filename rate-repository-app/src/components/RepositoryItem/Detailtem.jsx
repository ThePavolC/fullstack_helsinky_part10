import React from "react";
import { View, StyleSheet } from "react-native";
import Text from "../Text";

export const getCountCopy = (count) => {
  let countCopy = count;
  if (count >= 1000) {
    countCopy = `${Number(Math.round(count / 1000 + "e1") + "e-1")}k`;
  }
  return countCopy;
};

const DetailItem = ({ count, label, ...props }) => {
  const detailItemStyles = StyleSheet.create({
    label: { marginTop: 6 },
  });
  const countCopy = getCountCopy(count);

  return (
    <View {...props}>
      <Text fontWeight="bold">{countCopy}</Text>
      <Text style={detailItemStyles.label} color="textSecondary">
        {label}
      </Text>
    </View>
  );
};

export default DetailItem;
