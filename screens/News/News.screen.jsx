import React, {Component} from "react";
import {ActivityIndicator, Button, FlatList, Text, View} from "react-native";
import {connect} from "react-redux";
import {fetchNews} from "../../store/News/News.action";
import Colors from "../../constants/Colors";
import {createStructuredSelector} from "reselect";
import {selectLatestNews} from "../../store/News/News.selectors";
import {newsStyles} from "./News.styles";
import NewsItem from "../../components/NewsItem/NewsItem.component";

import {useFocusEffect} from '@react-navigation/native';

/**
 * @return {null}
 */
function LoadNewsOnFocus({isLoading, isRefreshing, loadingNews, isVisible}) {
    useFocusEffect(
        React.useCallback(() => {
            // console.log({isRefreshing, isLoading})
            if (!isLoading && !isRefreshing) {
                loadingNews()
                console.log("Screen changed")
            }

            return () => {
            };
        }, [])
    );

    return null;
}

class NewsScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            isRefreshing: false,
            error: null,
            isFirstTime: true,
            isVisible: true
        };

        this.loadNews = this.loadNews.bind(this);
        this.loadingNews = this.loadingNews.bind(this);
        this.selectNewsHandler = this.selectNewsHandler.bind(this)
    }

    async loadNews() {
        this.setState({error: null, isRefreshing: true, isVisible: true});

        const {fetchNews} = this.props;

        try {
            await fetchNews();
        } catch (e) {
            this.setState({error: e.message});
        }
        this.setState({isRefreshing: false, isVisible: false})
    }

    componentDidMount() {
        this.loadingNews();
        this.setState({isFirstTime: false})
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
        const {error, isLoading, isRefreshing, isVisible, isFirstTime} = this.state;
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
            <View style={newsStyles.centered}>
                <LoadNewsOnFocus
                    isLoading={isLoading}
                    isRefreshing={isRefreshing}
                    loadingNews={this.loadNews}
                    isVisible={isVisible}
                />
                {
                    isFirstTime
                        ?
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
                        :
                        isVisible
                            ?
                            <ActivityIndicator size="large" color={Colors.primary} />
                            :
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
                }
            </View>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    news: selectLatestNews
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchNews: () => dispatch(fetchNews(ownProps.id))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsScreen)
