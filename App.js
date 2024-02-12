import React from "react";
import {
  Text,
  HStack,
  Center,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
} from "native-base";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });

export default function App() {
  return (
    <NativeBaseProvider config={theme}>
      <Center
        _dark={{ bg: "#222222" }}
        _light={{ bg: "#fff0cb" }}
        px={4}
        flex={1}
      >
        <VStack space={5} alignItems="center"></VStack>
      </Center>
    </NativeBaseProvider>
  );
}
