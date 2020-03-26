import {StyleSheet} from "react-native";

export const newsItemStyles = StyleSheet.create({
    newsItem: {
        height: 140,
        marginHorizontal: 10,
        overflow: 'hidden',
        marginVertical: 8
    },
    main: {
        flexDirection: 'row'
    },
    touchable: {
        borderRadius: 10,
        overflow: 'hidden'
    },
    imageContainer: {
        width: '30%',
        height: '100%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 0,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: '100%'
    },
    details: {
        width: '70%',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginHorizontal: 20,
        marginVertical: 10
    },
    title: {
        fontSize: 18,
        marginVertical: 2,
        marginRight: 25,
        fontWeight: "bold"
    },
    excerpt: {
        marginRight: 30,
        marginTop: 10
    },
});
