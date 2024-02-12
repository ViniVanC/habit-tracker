import React from "react";
import { NativeBaseProvider, VStack, extendTheme } from "native-base";
import { Header } from "./components/Header";
import { WeekBlock } from "./components/WeekBlock/WeekBlock";
import { HabitsList } from "./components/HabitsList";

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
    green: "#BDCEBE",
  },
});

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <VStack bg={"black"} flex={1} pt={"70px"}>
        <Header />
        <VStack flex={1} flexDirection={"column"} alignItems={"center"}>
          <WeekBlock />
          <HabitsList />
        </VStack>
      </VStack>
    </NativeBaseProvider>
  );
}
