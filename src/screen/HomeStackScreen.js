import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeTabScreen from "./HomeTabScreen";
import NewsDetail from "./NewsDetail";
import { Ionicons } from "@expo/vector-icons";
import CustomHeader from "./CustomHeader";
const HomeStackScreen = ({ navigation }) => {
  const HomeStack = createStackNavigator();
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "skyblue",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <HomeStack.Screen
        name="Home"
        component={HomeTabScreen}
        // options={(navigation) => {
        //   return {
        //     headerTitle: () => <CustomHeader navigation={navigation} />,
        //   };
        // }}
        options={{
          headerLeft: () => (
            <Ionicons
              name="ios-menu"
              size={28}
              color="#fff"
              style={{
                paddingHorizontal: 14,
                alignContent: "center",
                alignItems: "center",
              }}
              onPress={() => navigation.openDrawer()}
            />
          ),
        }}
      />
      <HomeStack.Screen name="Details" component={NewsDetail} />
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;

const styles = StyleSheet.create({});
