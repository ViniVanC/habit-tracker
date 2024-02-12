import React from "react";
import { Box, HStack, Pressable, Text, VStack } from "native-base";

export const Habit = () => {
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
  };

  return (
    <Pressable w={"full"}>
      <VStack
        space={"10px"}
        p={"10px"}
        pt={"5px"}
        borderColor={"white"}
        borderRadius={"10px"}
        borderWidth={"2px"}
      >
        <HStack justifyContent={"space-between"} alignItems={"center"}>
          <VStack>
            <Text fontSize={"18px"} fontWeight={"700"} color={"white"}>
              Title
            </Text>
            <Text fontSize={"14px"} color={"white"}>
              {truncateText(
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum rem porro doloribus fuga consectetur quas modi, molestias enim deserunt, ipsa animi, voluptates sit quisquam assumenda hic odit laudantium cumque quidem.",
                40 // Максимальна довжина тексту
              )}
            </Text>
          </VStack>
          <Pressable
            w={"35px"}
            h={"35px"}
            bg={"white"}
            opacity={0.5}
            borderRadius={"7px"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Text>c</Text>
          </Pressable>
        </HStack>
        <HStack justifyContent={"space-between"} space={"3px"}>
          {Array.from({ length: 26 }).map((i) => (
            <VStack key={i} space={"3px"}>
              {Array.from({ length: 7 }).map((i) => (
                <Box
                  key={i}
                  w={"9px"}
                  h={"9px"}
                  borderRadius={"3px"}
                  bg={"white"}
                  opacity={0.4}
                />
              ))}
            </VStack>
          ))}
        </HStack>
      </VStack>
    </Pressable>
  );
};
