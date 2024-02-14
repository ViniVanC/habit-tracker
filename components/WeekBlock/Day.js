import React from "react";
import { Pressable, Text } from "native-base";

export const Day = ({ children, active }) => {
  return (
    <Pressable
      w={"35px"}
      h={"35px"}
      rounded={50}
      bg={active ? "green" : "black"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      _pressed={{
        transform: [{ scale: 0.95 }],
        opacity: 0.9,
      }}
    >
      <Text
        color={active ? "black" : "white"}
        fontSize={"16px"}
        fontWeight={"700"}
        textTransform={"capitalize"}
      >
        {children}
      </Text>
    </Pressable>
  );
};
