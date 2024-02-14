import React, { useEffect, useState } from "react";
import { Box, HStack, Pressable, Text, VStack, useToken } from "native-base";
import { CheckMark } from "./CheckMark";

export const Habit = () => {
  const [days, setDays] = useState([]);
  const [currentDay, setCurrentDay] = useState(null); // Поточний день
  const [buttonActive, setButtonActive] = useState(false);

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
  };

  useEffect(() => {
    const printCurrentMonth = () => {
      const currentDate = new Date();
      const year = currentDate.getFullYear();
      const month = currentDate.getMonth();

      const firstDayOfMonth = new Date(year, month, 1);
      const lastDayOfMonth = new Date(year, month + 1, 0);

      const daysInMonth = lastDayOfMonth.getDate();
      const firstDayOfWeek = firstDayOfMonth.getDay(); // Номер першого дня тижня (0 - неділя, 1 - понеділок, ..., 6 - субота)

      const monthArray = [];
      let week = [];

      // Додаємо дні з попереднього місяця та поточного місяця до першого рядка
      const prevMonthDays = firstDayOfWeek === 0 ? 6 : firstDayOfWeek - 1; // Кількість днів попереднього місяця
      let prevMonthLastDay = new Date(year, month, 0).getDate(); // Останній день попереднього місяця

      for (let i = prevMonthDays; i > 0; i--) {
        week.push({
          id: `${month}-${prevMonthLastDay--}`,
          done: false,
          current: false,
        });
      }
      week.reverse();

      // Додаємо дні поточного місяця
      for (let i = 1; i <= daysInMonth; i++) {
        const day = { id: `${month}-${i}`, done: false, current: true };
        week.push(day);
        if (week.length === 7) {
          monthArray.push(week);
          week = [];
        }
      }

      // Якщо в першому рядку більше 7 днів, обрізаємо лишні
      if (monthArray[0].length > 7) {
        const diff = monthArray[0].length - 7;
        const daysToMove = monthArray[0].splice(-diff, diff);
        monthArray[1] = daysToMove.concat(monthArray[1]);
      }

      // Додаємо дні з наступного місяця до останнього рядка, якщо потрібно
      if (monthArray.length < 6) {
        let nextMonthDay = 1;
        while (monthArray.length < 6) {
          const day = { id: `${month}-${nextMonthDay}`, done: false };
          week.push(day);
          nextMonthDay++;
          if (week.length === 7) {
            monthArray.push(week);
            week = [];
          }
        }
      }

      return monthArray;
    };

    setDays(printCurrentMonth());

    // Визначаємо поточний день
    const currentDate = new Date();
    setCurrentDay(`${currentDate.getMonth()}-${currentDate.getDate()}`);
  }, []);

  // Функція для зміни прозорості квадрата при натисканні на кнопку
  const handlePress = () => {
    // Зміна прозорості квадрата поточного дня
    setButtonActive(!buttonActive);
    setDays((prevDays) =>
      prevDays.map((week) =>
        week.map((day) =>
          day.id === currentDay ? { ...day, done: !day.done } : day
        )
      )
    );
  };

  return (
    <Pressable w={"300px"} >
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
                "Lorem ipsum dolor sit amet consectetur adipisicing",
                30 // Максимальна довжина тексту
              )}
            </Text>
          </VStack>
          <Pressable
            w={"35px"}
            h={"35px"}
            bg={"white"}
            opacity={buttonActive ? 1 : 0.5}
            borderRadius={"7px"}
            justifyContent={"center"}
            alignItems={"center"}
            onPress={handlePress}
          >
            <CheckMark color={useToken("colors", "black")} />
          </Pressable>
        </HStack>
        <VStack flexWrap="wrap" justifyContent={"center"} space={"3px"}>
          {days.map((week, weekIndex) => (
            <HStack key={weekIndex} space={"3px"}>
              {week &&
                week.map((day) => (
                  <Box
                    key={day.id}
                    flex={1}
                    h={"15px"}
                    borderRadius={"5px"}
                    bg={day.current ? "white" : "#555"}
                    opacity={day.done ? 1 : 0.4}
                    justifyContent={"center"}
                    alignItems={"center"}
                  />
                ))}
            </HStack>
          ))}
        </VStack>
      </VStack>
    </Pressable>
  );
};
