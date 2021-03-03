import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import GeneralNews from "./GeneralNews";
import TechNews from "./TechNews";
import Ionicons from "@expo/vector-icons/Ionicons";
import { MaterialIcons } from "@expo/vector-icons";
const HomeScreen = () => {
  const Tab = createBottomTabNavigator();
  return (
    // <View>
    //   <Text>hello</Text>
    // </View>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "General") {
            iconName = focused
              ? "ios-information-circle"
              : "ios-information-circle-outline";
          } else if (route.name === "Tech") {
            iconName = focused ? "ios-list-circle" : "ios-list";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "blue",
        inactiveTintColor: "black",
      }}
    >
      <Tab.Screen name="General" component={GeneralNews} />
      <Tab.Screen name="Tech" component={TechNews} />
    </Tab.Navigator>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
