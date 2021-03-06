import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {Provider} from "react-redux";
import {store} from "./store/store";
import {NavigationContainer} from "@react-navigation/native";
import checkIfFirstLaunch from "./utils/checkIfFirstLaunch";
import {registerFCMToken} from "./utils/registerFCMToken";
import NewsStack from "./navigation/NewsNavigator";
import NewsTabs from "./navigation/NewsTabNavigator";
import Header from "./components/Header/Header.component";

class App extends Component {
    state = {
        isFirstLaunch: false,
        hasCheckedAsyncStorage: false,
    };

    async componentDidMount() {
        const isFirstLaunch = await checkIfFirstLaunch();
        if(isFirstLaunch){
            await registerFCMToken();
        }
        this.setState({ isFirstLaunch, hasCheckedAsyncStorage: true });
    }

    render() {
        return (
            <Provider store={store}>
                <NavigationContainer>
                    <Header/>
                    <NewsTabs />
                </NavigationContainer>
            </Provider>
        )
    }
}

export default App
