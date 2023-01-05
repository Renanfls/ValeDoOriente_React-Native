import React from "react";
import { StyleSheet, View, Image } from "react-native";

import Texts from "../../../components/Texts"

export default function Item({ item: { name, image} }) {
    return <View style={styles.item}>
        <Image source={image} style={styles.imageItem} />
        <Texts style={styles.nameItem}>{ name }</Texts>
    </View> 
}

const styles = StyleSheet.create({
    item: {
        alignItems: "center",
        borderBottomColor: "#ECECEC",
        borderBottomWidth: 1,
        flexDirection: "row",
        paddingVertical: 16,
        marginHorizontal: 16,
    },
    imageItem: {
        borderRadius: 20,
        height: 100,
        width: 100,
    },
    nameItem: {
        color: "#1C0A05",
        fontSize: 16,
        fontWeight: "bold",
        lineHeight: 26,
        marginLeft: 16,
    }
}) 