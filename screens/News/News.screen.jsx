import React, {Component} from "react";
import {ActivityIndicator, Button, FlatList, Text, View} from "react-native";
import {connect} from "react-redux";
import {fetchNews} from "../../store/News/News.action";
import Colors from "../../constants/Colors";
import {createStructuredSelector} from "reselect";
import {selectLatestNews} from "../../store/News/News.selectors";
import {newsStyles} from "./News.styles";
import NewsItem from "../../components/NewsItem/NewsItem.component";

class NewsScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            isRefreshing: false,
            error: null,
        };

        this.loadNews = this.loadNews.bind(this);
        this.loadingNews = this.loadingNews.bind(this);
        this.selectNewsHandler = this.selectNewsHandler.bind(this)
    }

    async loadNews() {
        this.setState({error: null, isRefreshing: true});

        const {fetchNews} = this.props;

        try {
            await fetchNews();
        } catch (e) {
            this.setState({error: e.message});
        }
        this.setState({isRefreshing: false})
    }

    componentDidMount() {
        this.loadingNews();
    }

    loadingNews() {
        this.setState({isLoading: true});
        this.loadNews().then(() => {
            this.setState({isLoading: false})
        });
    }

    selectNewsHandler(id) {
        this.props.navigation.navigate('NewsDetails', {
            newsId: id
        })
    }

    render() {
        const {error, isLoading, isRefreshing} = this.state;
        const {news} = this.props;
        if (error) {
            return (
                <View style={newsStyles.centered}>
                    <Text>An error occurred!</Text>
                    <Button title="Try again!" onPress={this.loadNews} color={Colors.primary}/>
                </View>
            )
        }

        if (isLoading) {
            return (
                <View style={newsStyles.centered}>
                    <ActivityIndicator size="large" color={Colors.primary}/>
                </View>
            )
        }

        if (!isLoading && news.length === 0) {
            return (
                <View style={newsStyles.centered}>
                    <Text>No news found!</Text>
                    <Button title="Try again!" onPress={this.loadNews} color={Colors.primary}/>
                </View>
            )
        }

        return (
            <View>
                <FlatList
                    refreshing={isRefreshing}
                    onRefresh={this.loadNews}
                    data={news}
                    renderItem={itemData => (
                        <NewsItem
                            image={itemData.item.image}
                            title={itemData.item.title}
                            excerpt={itemData.item.excerpt}
                            onSelect={() => this.selectNewsHandler(itemData.item.id)}
                        />
                    )}
                    keyExtractor={item => item.id.toString()}
                />
            </View>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    news: selectLatestNews
});

const mapDispatchToProps = (dispatch) => ({
    fetchNews: news => dispatch(fetchNews(news))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsScreen)
