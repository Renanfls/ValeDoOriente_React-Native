import React from "react";
import { Image, StyleSheet, Dimensions } from 'react-native';

import Texts from "../../../components/Texts";

const width = Dimensions.get('screen').width; // API Dimensions pega a dimensao do dispositivo tanto altura como largura

export default function Banner({image, title}) {
    return <>
        <Image source={image} style={styles.banner} />
        <Texts style={styles.title}>{title}</Texts>
    </>
}

const styles = StyleSheet.create({
    banner: {
        width: "100%",
        height: 578 / 768 * width,
        //     Altu  Largu
    },
    title: {
        color: "#FFF",
        fontSize: 16,
        fontWeight: "bold",
        lineHeight: 26,
        padding: 16,
        position: "absolute",
        textAlign: "center",
        width: "100%",
    },
});
