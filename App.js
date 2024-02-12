import React from "react";
import { NativeBaseProvider, VStack, extendTheme } from "native-base";
import { Header } from "./components/Header";

// Define the config
const theme = extendTheme({
  config: {
    useSystemColorMode: false,
    initialColorMode: "dark",
  },
  colors: {
    white: "#FFF0CB",
    black: "#222222",
    red: "#E5C1BD",
    blueGreen: "#BDCEBE",
  },
});

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <VStack bg={"dark.default"} flex={1} pt={"70px"}>
        <Header />
      </VStack>
    </NativeBaseProvider>
  );
}
