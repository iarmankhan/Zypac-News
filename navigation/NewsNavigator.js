import React from "react";
import {createStackNavigator, TransitionPresets} from "@react-navigation/stack";
import NewsScreen from "../screens/News/News.screen";
import NewsDetailScreen from "../screens/NewsDetail/NewsDetail.screen";
import Colors from "../constants/Colors";

const NewsStack = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                gestureEnabled: true,
                gestureDirection: 'horizontal',
                headerStyle: {
                    backgroundColor: Colors.primary,
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    // fontWeight: 'bold',
                },
                ...TransitionPresets.SlideFromRightIOS
            }}
            headerMode="float"

        >
            <Stack.Screen name="Home" options={{title: 'Zypac News'}} component={NewsScreen} />
            <Stack.Screen name="NewsDetails" options={{title: ''}} component={NewsDetailScreen} />
        </Stack.Navigator>
    )
};

export default NewsStack
