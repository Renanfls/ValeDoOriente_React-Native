import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
  View,
} from "react-native";

import { FontAwesome } from "@expo/vector-icons";

export default function Button({
  title,
  onPress,
  isLoading = false,
  iconName,
  disabled,
}) {
  const backgroundColor = disabled ? "#7A683A" : "#E5AF28";

  return (
    <>
      <TouchableOpacity
        disabled={isLoading || disabled} // Só desabilita depois que o loading terminar || determinando como disabled
        onPress={onPress}
        style={[styles.container, { backgroundColor }]}
      >
        {isLoading ? ( // Se o `isLoading` for true ele mostra a animação de loading
          <ActivityIndicator color="#FFF" />
        ) : (
          // Se não, ele continua a msm coisa
          <View style={styles.content}>
            <FontAwesome
              style={{ marginRight: 5 }}
              size={20}
              color="#FFF"
              name={iconName}
            />
            <Text style={styles.title}>{title}</Text>
          </View>
        )}
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    justifyContent: "center",
    height: 50,
    marginHorizontal: "auto",
    marginVertical: 26,
    width: "auto",
  },
  content: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  title: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold",
  },
});
