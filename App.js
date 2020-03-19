import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {Provider} from "react-redux";
import {store} from "./store/store";
import {NavigationContainer} from "@react-navigation/native";
import NewsStack from "./navigation/NewsNavigator";

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <NavigationContainer>
                    <NewsStack/>
                </NavigationContainer>
            </Provider>
        )
    }
}

export default App
