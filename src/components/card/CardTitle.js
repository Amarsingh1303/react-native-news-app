import React from "react";
import { StyleSheet, Text, View } from "react-native";

const CardTitle = ({ children, numberOfLines = 2, size = 18 }) => {
  return (
    <Text
      numberOfLines={numberOfLines}
      style={{ fontWeight: "bold", fontSize: size }}
    >
      {children}
    </Text>
  );
};

export default CardTitle;

const styles = StyleSheet.create({});
