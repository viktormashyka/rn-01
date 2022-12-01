import React, { useState } from "react";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { StyleSheet } from "react-native";

const loadFonts = async () => {
  await Font.loadAsync({
    // "Roboto-Regular": require("./assets/fonts/Roboto/Roboto-Regular.ttf"),
    // "Roboto-Bold": require("./assets/fonts/Roboto/Roboto-Bold.ttf"),
  });
};

export default () => {
  const [isReady, setIsReady] = useState(false);
  if (!isReady) {
    return (
      <AppLoading startAsync={loadFonts} onFinish={() => setIsReady(true)} />
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button onPress={this._onPressButton} title="Press Me" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: Platform.OS === "ios" ? 50 : 100,
    ...Platform.select({
      ios: { backgroundColor: "#000000" },
      android: { backgroundColor: "#ffffff" },
    }),
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 30,
  },
  text: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#61dafb",
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 10,
  },
});
