import {createSelector} from 'reselect';

const selectNews = state => state.news;

export const selectLatestNews = createSelector(
    [selectNews],
    (news) => news.news
);

export const selectSelectedNews = newsId => {
    return createSelector(
        [selectLatestNews],
        (news) => news.find(news => news.id === newsId)
    )
};
