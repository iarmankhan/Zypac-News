import News from "../../models/News";

export const SET_NEWS = 'SET_NEWS';

export const fetchNews = (id) => {
    console.log(`https://zypacinfotech.com/wptest/wp-json/wp/v2/posts?embed&categories=${id}`)
    if(id === undefined)    id = 1;

    return async dispatch => {
        try {
            const response = await fetch(`https://zypacinfotech.com/wptest/wp-json/wp/v2/posts?embed&categories=${id}`);

            if(!response.ok){
                throw new Error("Something went wrong!");
            }

            const resData = await response.json();

            const loadedNews = [];

            resData.forEach(news => {
                loadedNews.push(new News(news.id, news.title.rendered, news.excerpt.rendered, news.content.rendered, news.date, news.featured_image_src))
            });

            dispatch({
                type: SET_NEWS,
                payload: {
                    news: loadedNews
                }
            })

        } catch (e) {

        }
    };
};
