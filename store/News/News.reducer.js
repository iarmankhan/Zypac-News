import {SET_NEWS} from "./News.action";

const INITIAL_STATE = {
    news: []
};

const NewsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_NEWS:
            return {
                news: action.payload.news
            };
        default:
            return state;
    }
};

export default NewsReducer