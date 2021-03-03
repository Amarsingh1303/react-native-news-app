import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
const CustomHeader = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Ionicons
        name="ios-menu"
        size={24}
        color="black"
        style={styles.menu}
        onPress={() => navigation.openDrawer()}
      />
      <Text style={styles.header}>Home</Text>
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
  },
  header: {
    paddingHorizontal: 10,
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  menu: {
    color: "#fff",
    fontSize: 28,
  },
});
