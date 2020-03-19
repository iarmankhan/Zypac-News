import React from "react";
import {View} from "react-native";
import {cardStyles} from "./Card.styles";

const Card = ({style, children}) => {
    return (
        <View style={{...cardStyles.card, ...style}}>
            {children}
        </View>
    )
};

export default Card
