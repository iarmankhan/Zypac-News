import {combineReducers} from "redux";
import NewsReducer from "./News/News.reducer";

const rootReducer = combineReducers({
    news: NewsReducer
});

export default rootReducer;