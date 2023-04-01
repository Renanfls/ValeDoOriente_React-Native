import React from "react";
import { StatusBar, SafeAreaView, View } from "react-native";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";

import ShoppingCart from "./src/screens/ShoppingCart/index.js";
import mock from './src/mocks/shoppingCart.js';

export default function App() {
  const [fontLoaded] = useFonts({
    MontserratRegular: Montserrat_400Regular,
    MontserratSemiBold: Montserrat_600SemiBold,
    MontserratBold: Montserrat_700Bold,
  });

  if (!fontLoaded) {
    // Se a font não carregar el retorna uma tela em branco
    return <View />;
  }

  // flex: 1 setado no SafeAreaView faz com que o tamanho do flex seja sempre o tamanho da tela inteira
  return (
    <SafeAreaView style={{ flex: 1 }}> 
      <StatusBar />
      <ShoppingCart {...mock} />
    </SafeAreaView>
  );
}
