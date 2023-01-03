import React from "react";
import { StyleSheet, Text } from "react-native";

export default function Texts({ children, style }) { // `children` Pega os elementos filhos, `style` Pega a estilização passada para o componente
    let styleDefault = styles.textDefault;

    if (style?.fontWeight === 'bold') { // `style?` se houver style faz a verificação do fontWeight, se não tiver não faz a verificação
        styleDefault = styles.textSemiBold;
    }
    
    return <Text style={[style, styleDefault]}>{ children }</Text>
}

const styles = StyleSheet.create({
    textDefault: {
        fontFamily: "MontserratRegular",
        fontWeight: "normal", // Evita erros caso a entrada do fontWeight seja 600 que não existe no tipo Regular
    },
    textSemiBold: {
        fontFamily: "MontserratSemiBold",
        fontWeight: "normal", // Se o fontWeight não for normal ele não aplica o fontFamily
    },
});