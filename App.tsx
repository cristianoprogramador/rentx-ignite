import {
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold,
} from "@expo-google-fonts/archivo";
import {
  Inter_400Regular,
  Inter_500Medium,
  useFonts,
} from "@expo-google-fonts/inter";
import React from "react";
import { ThemeProvider } from "styled-components";
import { AppProvider } from "./src/hooks";
import { Routes } from "./src/routes";
import theme from "./src/styles/theme";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <AppProvider>
        <Routes />
      </AppProvider>
    </ThemeProvider>
  );
}
