import React from "react";
import { StyleSheet, Text, View } from "react-native";

const CardDesc = ({ children, numberOfLines = 2, size = 15 }) => {
  return (
    <Text numberOfLines={numberOfLines} style={{ fontSize: size }}>
      {children}
    </Text>
  );
};

export default CardDesc;

const styles = StyleSheet.create({});
