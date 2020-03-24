import {StyleSheet} from "react-native";
import Colors from "../../constants/Colors";

export const headerStyles = StyleSheet.create({
    headerContainer: {
        backgroundColor: Colors.primary,
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        color: 'white',
        fontSize: 20,
        fontWeight: "bold",
    },
});
