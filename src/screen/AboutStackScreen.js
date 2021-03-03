import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import AboutScreen from "./AboutScreen";
const AboutStackScreen = () => {
  const AboutStack = createStackNavigator();
  return (
    <AboutStack.Navigator>
      <AboutStack.Screen name="About" component={AboutScreen} />
    </AboutStack.Navigator>
  );
};

export default AboutStackScreen;

const styles = StyleSheet.create({});
