import React from "react";
import { HStack } from "native-base";
import { Day } from "./Day";

export const WeekBlock = () => {
  return (
    <HStack
      bg={"white"}
      rounded={"30px"}
      p={"5px"}
      space={"10px"}
      alignItems="center"
      justifyContent={"space-between"}
    >
      <Day>s</Day>
      <Day>m</Day>
      <Day>t</Day>
      <Day active={true}>w</Day>
      <Day>t</Day>
      <Day>f</Day>
      <Day>s</Day>
    </HStack>
  );
};
