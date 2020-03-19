import React from 'react';
import {Linking, StyleSheet} from 'react-native';
import HTMLView from 'react-native-htmlview';

const HtmlView = props => {
    const baseFontStyle = {
        fontSize: 16,
        lineHeight: 22,
    };
    const paragraphStyle = { ...baseFontStyle };
    const boldStyle = { ...baseFontStyle, fontWeight: "500" };
    const italicStyle = { ...baseFontStyle, fontStyle: "italic" };
    const codeStyle = { ...baseFontStyle, fontFamily: "Menlo" };
    const hrefStyle = { ...baseFontStyle, fontWeight: "500", color: "#007AFF" };

    const styles = {
        styles: StyleSheet.create({
            p: paragraphStyle,
            b: boldStyle,
            strong: boldStyle,
            i: italicStyle,
            em: italicStyle,
            pre: codeStyle,
            code: codeStyle,
            a: hrefStyle,
        }),
    };

    return (
        <HTMLView
            value={props.html.replace(/(\r\n|\n|\r)/gm, "<br>")}
            stylesheet={styles}
            addLineBreaks={false}
            onLinkPress={(url) => Linking.openURL(url)}
        />
    );
};

export default HtmlView;
