import React, { useEffect, useState } from "react";
import { HStack } from "native-base";
import { Day } from "./Day";

export const WeekBlock = () => {
  const [daysOfWeek, setDaysOfWeek] = useState([
    { dayName: "Пн", currentDay: false },
    { dayName: "Вт", currentDay: false },
    { dayName: "Ср", currentDay: false },
    { dayName: "Чт", currentDay: false },
    { dayName: "Пт", currentDay: false },
    { dayName: "Сб", currentDay: false },
    { dayName: "Нд", currentDay: false },
  ]);

  useEffect(() => {
    const currentDate = new Date();
    const currentDayIndex = currentDate.getDay();

    setDaysOfWeek((prevDays) =>
      prevDays.map((day, index) =>
        index === currentDayIndex - 1
          ? { ...day, currentDay: true }
          : { ...day, currentDay: false }
      )
    );
  }, []);

  return (
    <HStack
      bg={"white"}
      rounded={"30px"}
      p={"5px"}
      space={"10px"}
      alignItems="center"
      justifyContent={"space-between"}
    >
      {daysOfWeek.map(({ dayName, currentDay }) => (
        <Day key={dayName} active={currentDay}>
          {dayName}
        </Day>
      ))}
    </HStack>
  );
};
