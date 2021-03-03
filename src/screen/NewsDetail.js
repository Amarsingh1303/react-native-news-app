import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const NewsDetail = ({ route }) => {
  const { url, title, description } = route.params;
  return (
    <View>
      <Image source={{ uri: url }} style={{ height: "50%", width: "100%" }} />
      {/* <Image
        source={{
          uri:
            "https://static.foxnews.com/foxnews.com/content/uploads/2021/03/amazon.jpg",
        }}
        style={{ height: 50, width: 50 }}
      /> */}
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.link}>Click Here for full article</Text>
    </View>
  );
};

export default NewsDetail;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal: 12,
  },
  description: {
    fontSize: 18,
    paddingHorizontal: 12,
  },
  link: {
    fontSize: 15,
    color: "#0000ff",
    paddingHorizontal: 12,
  },
});
