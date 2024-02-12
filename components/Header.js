import { HStack } from "native-base";
import React from "react";
import { Logo } from "./Logo";
import { Timer } from "./Timer";

export const Header = () => {
  return (
    <HStack
      px={"20px"}
      pb={"20px"}
      w={"full"}
      space={5}
      alignItems="center"
      justifyContent={"space-between"}
    >
      <Logo color={"#FFF0CB"} />
      <Timer />
    </HStack>
  );
};
