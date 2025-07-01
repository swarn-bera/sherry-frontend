import React, { useState, useEffect} from "react";
import * as Font from "expo-font";
import { View, Text, StyleSheet} from "react-native";
import AppNavigator from "./navigation/AppNavigator";
import * as SplashScreen from 'expo-splash-screen';

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await SplashScreen.preventAutoHideAsync();
      await Font.loadAsync({
        'ManufacturingConsent': require('./assets/fonts/ManufacturingConsent-Regular.ttf'),
      });
      
      setFontsLoaded(true);
      await SplashScreen.hideAsync();
    }

    loadFonts();
  }, []);

  if (!fontsLoaded) return null;


  return (
    <AppNavigator />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // fills the screen
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    color: "#888",
  }
})