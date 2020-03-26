import React from "react";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {ActivityIndicator, Text, View} from "react-native";
import Colors from "../constants/Colors";
import NewsStack from "./NewsNavigator";

const Tab = createMaterialTopTabNavigator();

const NewsTabs = () => {
    return (
        <Tab.Navigator
            lazy={true}
            lazyPlaceholder={() => (
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <ActivityIndicator size="large" color={Colors.primary} />
                </View>
            )}
            tabBarOptions={{
                labelStyle: { fontSize: 12 },
                scrollEnabled: true,
                activeTintColor: '#fff', inactiveTintColor: '#f1f1f1',
                style: { backgroundColor: Colors.primary,
                    elevation: 0,
                    shadowOpacity: 0,
                    borderBottomWidth: 0 },
            }}
        >
            <Tab.Screen name="Home">
                {(props) => <NewsStack {...props} id={1} />}
            </Tab.Screen>
            <Tab.Screen name="Science">
                {(props) => <NewsStack {...props} id={3} />}
            </Tab.Screen>
            <Tab.Screen name="Sports">
                {(props) => <NewsStack {...props} id={4} />}
            </Tab.Screen>
            <Tab.Screen name="Entertainment">
                {(props) => <NewsStack {...props} id={5} />}
            </Tab.Screen>
        </Tab.Navigator>
    );
};

export default NewsTabs
