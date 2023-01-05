import React, { useState } from "react";
import { StyleSheet, ImageBackground, FlatList, View} from "react-native"; // Usamos chaves quando for um componente exportado

import Item from "./components/Item";
import Banner from "./components/Banner";
import Details from "./components/Details";
import Button from "../../components/Button";
import Texts from "../../components/Texts";

import background from "../../../assets/bg-4.png";

export default function ShoppingCart({banner, details, items}) {
    const [loading, setIsLoading] = useState(false);
    function handleButtonPress() {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false)
        }, 2000);
    }
    return <>
        <ImageBackground source={background}>
            <FlatList
                data={items.list}
                renderItem={Item}
                keyExtractor={({ name }) => name}
                ListHeaderComponent={() => {
                    return <>
                        <Banner {...banner} />
                        <View style={styles.spacingView}>
                            <Details {...details} />
                            <Button 
                                // disabled // Desabilita botão
                                // iconName="" // Add Icon
                                isLoading={loading}
                                title="Finalizar" 
                                onPress={handleButtonPress} 
                            />
                            <Texts style={styles.title}>{ items.title }</Texts>
                        </View>
                    </>
                }}
                ListFooterComponent={() => {
                    return <>
                        <View style={styles.spacingView}>
                            <Button 
                                // disabled // Desabilita botão
                                // iconName="" // Add Icon
                                isLoading={loading}
                                title="Finalizar" 
                                onPress={handleButtonPress} 
                            />
                        </View>
                    </>
                }}
            />
        </ImageBackground>
    </>
}

const styles = StyleSheet.create({
    title: {
        color: "#1C0A05",
        fontSize: 20,
        fontWeight: "bold",
        lineHeight: 32,
    },
    spacingView: {
        paddingHorizontal: 16, // Left e Right
        paddingVertical: 8, // Top e Bottom
    },
});
