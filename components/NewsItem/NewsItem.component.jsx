import React from "react";
import Card from "../Card/Card.component";
import {Image, Platform, Text, TouchableNativeFeedback, TouchableOpacity, View} from "react-native";
import {newsItemStyles} from "./NewsItem.styles";
import HtmlView from "../UI/HtmlView";

const NewsItem = ({title, excerpt, image, onSelect}) => {
  let TouchableComponent = TouchableOpacity;

  if(Platform.OS === 'android' && Platform.OS.Version >= 21){
      TouchableComponent = TouchableNativeFeedback;
  }

  return (
      <Card style={newsItemStyles.newsItem}>
        <View style={newsItemStyles.touchable}>
          <TouchableComponent onPress={onSelect} useForeground>
            <View style={newsItemStyles.main}>
              <View style={newsItemStyles.imageContainer}>
                <Image source={{uri: image}} style={newsItemStyles.image} />
              </View>
              <View style={newsItemStyles.details}>
                  <Text style={newsItemStyles.title}>{title.substring(0, 50)}...</Text>
                  <View style={newsItemStyles.excerpt}>
                    <HtmlView html={excerpt.substring(0, 100)} />
                  </View>
              </View>
            </View>
          </TouchableComponent>
        </View>
      </Card>
  )
};

export default NewsItem;
