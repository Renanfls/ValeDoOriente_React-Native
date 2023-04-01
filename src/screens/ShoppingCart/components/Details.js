import React from "react";
import { View, Image, StyleSheet } from "react-native";

import Texts from "../../../components/Texts";

export default function Details({title, logoStore, nameStore, description, price}) {
    return (
        <>
            <Texts style={styles.title}>{title}</Texts>
            <View style={styles.viewStore}>
                <Image source={logoStore} style={styles.logoStore} />
                <Texts style={styles.nameStore}>{nameStore}</Texts>
            </View>
            <Texts style={styles.description}>{description}</Texts>
            <Texts style={styles.price}>{price}</Texts>
        </>
    );
}

const styles = StyleSheet.create({
    title: {
        color: "#1C0A05",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
    },
    viewStore: {
        alignItems: "center",
        flexDirection: "row",
        paddingVertical: 12,
    },
    logoStore: {
        borderRadius: 10,
        height: 32,
        width: 32,
    },
    nameStore: {
        fontSize: 16,
        fontWeight: "bold",
        lineHeight: 26,
        marginLeft: 8,
    },
    description: {
        color: "#757575",
        fontSize: 16,
        lineHeight: 26,
    },
    price: {
        color: "#E5AF28",
        fontSize: 30,
        fontWeight: "bold",
        marginTop: 6,
    }
});
