import React, { useState } from "react";
import { StyleSheet, ImageBackground, View,} from "react-native"; // Usamos chaves quando for um componente exportado

import Button from "../../components/Button";

import Banner from "./components/Banner";
import Details from "./components/Details";

import background from "../../../assets/bg-4.png";

export default function ShoppingCart({banner, details}) {
    const [loading, setIsLoading] = useState(false);
    function handleButtonPress() {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false)
        }, 2000);
    }
    return <>
        <Banner {...banner} />
        <ImageBackground source={background} style={styles.imageBackground}>
            <View style={styles.view_requests}>
                <Details {...details} />
                <Button 
                    // disabled // Desabilita botão
                    // iconName="" // Add Icon
                    isLoading={loading}
                    title="Finalizar" 
                    onPress={handleButtonPress} 
                />
            </View>
        </ImageBackground>
    </>
}

const styles = StyleSheet.create({
    imageBackground: {
        height: 300,
        resizeMode: "cover",
        width: "100%",
    },
    view_requests: {
        paddingVertical: 8, // Top e Bottom
        paddingHorizontal: 16, // Left e Right
    },
});
