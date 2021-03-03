import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Card from "../components/card/Card";
import axios from "axios";
const TechNews = ({ navigation }) => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    const getNews = async () => {
      const result = await axios.get(
        "http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=df94152aaf0645c1920cc60c4e921f5c"
      );
      setNews(result.data.articles);
      console.log(result.data.articles);
    };
    getNews();
    // console.log(news);
  }, []);
  if (news) {
    return (
      <View>
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={news}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Details", {
                  url: item.urlToImage,
                  title: item.title,
                  description: item.description,
                })
              }
            >
              <Card
                key={index}
                url={item.urlToImage}
                title={item.title}
                description={item.description}
              />
            </TouchableOpacity>
          )}
        />
        <Card />
      </View>
    );
  } else {
    return (
      <View>
        <Text>loading.....</Text>
      </View>
    );
  }
};

export default TechNews;

const styles = StyleSheet.create({});
