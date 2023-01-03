import React from "react";
import { StatusBar, SafeAreaView, View } from "react-native";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_600SemiBold,
} from "@expo-google-fonts/montserrat";

import ShoppingCart from "./src/screens/ShoppingCart/index.js";
import mock from './src/mocks/shoppingCart.js';

export default function App() {
  const [fontLoaded] = useFonts({
    MontserratRegular: Montserrat_400Regular,
    MontserratSemiBold: Montserrat_600SemiBold,
  });

  if (!fontLoaded) {
    // Se a font não carregar el retorna uma tela em branco
    return <View />;
  }

  return (
    <SafeAreaView>
      <StatusBar />
      <ShoppingCart {...mock} />
    </SafeAreaView>
  );
}
