import React from "react";
import {SafeAreaView, Text} from "react-native";
import {headerStyles} from "./Header.styles";

const Header = () => {
    return (
        <SafeAreaView style={headerStyles.headerContainer}>
            <Text style={headerStyles.headerText}>Zypac News</Text>
        </SafeAreaView>
    )
};

export default Header;

