import { ScrollView, VStack } from "native-base";
import React from "react";
import { Habit } from "./Habit";

export const HabitsList = () => {
  return (
    <ScrollView>
      <VStack space={"10px"} alignItems="center" py={"20px"}>
        <Habit />
      </VStack>
    </ScrollView>
  );
};
