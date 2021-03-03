import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import CardTitle from "./CardTitle";
import CardDesc from "./CardDesc";

const Card = ({ url, title, description }) => {
  return (
    <View>
      <View style={styles.container}>
        <Image
          source={{
            uri: url,
          }}
          style={styles.image}
        />
        <View style={styles.contentContainer}>
          <CardTitle>{title}</CardTitle>
          <CardDesc>{description}</CardDesc>
        </View>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 8,
    overflow: "hidden",
    marginBottom: 10,
    height: 80,
  },
  image: {
    flex: 0.35,
    height: "100%",
  },
  contentContainer: {
    flex: 0.65,
    paddingHorizontal: 5,
  },
});
