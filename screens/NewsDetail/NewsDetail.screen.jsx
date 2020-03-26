import React from "react";
import {Image, ScrollView, Text, View} from "react-native";
import {selectSelectedNews} from "../../store/News/News.selectors";
import {connect} from "react-redux";
import HtmlView from "../../components/UI/HtmlView";
import {newsDetailStyles} from "./NewsDetail.styles";

const NewsDetailScreen = ({newsItem}) => {
    if(newsItem === undefined){
        return null
    }
    const {title, image, content} = newsItem;
    return (
        <ScrollView>
            <Image source={{uri: image}} style={newsDetailStyles.image}/>
            <Text style={newsDetailStyles.title}>{title}</Text>
            <View style={newsDetailStyles.description}>
                <HtmlView html={content}/>
            </View>
        </ScrollView>
    )
};

const mapStateToProps = (state, ownProps) => ({
    newsItem: selectSelectedNews(ownProps.route.params.newsId)(state)
});

export default connect(mapStateToProps)(NewsDetailScreen);
