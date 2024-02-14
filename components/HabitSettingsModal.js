import React, { useState } from "react";
import {
  Box,
  HStack,
  Input,
  Modal,
  Pressable,
  Text,
  TextArea,
  VStack,
  useToken,
} from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { CheckMark } from "./CheckMark";

export const HabitSettingsModal = ({ showModal, closeSettingsModal }) => {
  const [colors, setColors] = useState([
    [
      { color: "#F77170", current: false },
      { color: "#F5963F", current: false },
      { color: "#FBBE25", current: false },
      { color: "#FACC16", current: false },
      { color: "#A3E636", current: false },
      { color: "#4ADE80", current: false },
      { color: "#34D399", current: false },
    ],
    [
      { color: "#2FD3C0", current: false },
      { color: "#21D3ED", current: false },
      { color: "#38BDF8", current: false },
      { color: "#61A5FA", current: false },
      { color: "#808CF7", current: false },
      { color: "#A78BFA", current: false },
      { color: "#C085FD", current: false },
    ],
    [
      { color: "#E879F9", current: false },
      { color: "#F473B6", current: false },
      { color: "#FC7085", current: false },
      { color: "#94A3B8", current: false },
      { color: "#9BA4AD", current: false },
      { color: "#A0A0A0", current: false },
      { color: "#FFF0CB", current: true },
    ],
  ]);

  return (
    <Modal
      isOpen={showModal}
      onClose={closeSettingsModal}
      _backdrop={{
        bg: "black",
        opacity: 0.9,
      }}
    >
      <Modal.Content
        maxWidth="350"
        borderWidth={"3px"}
        borderColor={"white"}
        borderRadius={"10px"}
      >
        <Modal.Header
          bg={"black"}
          px={"10px"}
          pt={"15px"}
          pb={"25px"}
          borderBottomWidth={0}
        >
          <HStack flexDirection={"row"} alignItems={"center"} space={"15px"}>
            <Pressable onPress={closeSettingsModal}>
              <AntDesign
                name="closecircle"
                size={20}
                color={useToken("colors", "white")}
              />
            </Pressable>
            <Text color={"white"} fontSize={"16px"} fontWeight={700} flex={1}>
              Add habit
            </Text>
            <Pressable
              w={"20px"}
              h={"20px"}
              borderRadius={50}
              bg={"green"}
              justifyContent={"center"}
              alignItems={"center"}
              onPress={closeSettingsModal}
            >
              <CheckMark color={useToken("colors", "black")} />
            </Pressable>
          </HStack>
        </Modal.Header>
        <Modal.Body bg={"black"}>
          <VStack space={"20px"}>
            <VStack borderBottomColor={"white"} borderBottomWidth={"2px"}>
              <Input
                variant="unstyled"
                fontSize={"16px"}
                fontWeight={700}
                color={"white"}
                borderWidth={0}
                py={"5px"}
                placeholder="Title..."
              />
              <TextArea
                variant="unstyled"
                fontSize={"16px"}
                color={"white"}
                borderWidth={0}
                py={"5px"}
                placeholder="Description..."
              />
            </VStack>
            <HStack space={"10px"}>
              <VStack flex={1}>
                <Text color={"white"} fontWeight={700} flex={1}>
                  Goal
                </Text>
                <Pressable
                  borderRadius={5}
                  bg={"#2E2E2E"}
                  px={"10px"}
                  py={"7.5px"}
                  flexDirection={"row"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Text color={"white"} flex={1}>
                    3 / Week
                  </Text>
                  <AntDesign
                    name="right"
                    size={15}
                    color={useToken("colors", "white")}
                  />
                </Pressable>
              </VStack>
              <VStack flex={1}>
                <Text color={"white"} fontWeight={700} flex={1}>
                  Remainder
                </Text>
                <Pressable
                  borderRadius={5}
                  bg={"#2E2E2E"}
                  px={"10px"}
                  py={"7.5px"}
                  flexDirection={"row"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Text color={"white"} flex={1}>
                    Daily{" "}
                    <Text color={"white"} fontWeight={700}>
                      07:00
                    </Text>
                  </Text>
                  <AntDesign
                    name="right"
                    size={15}
                    color={useToken("colors", "white")}
                  />
                </Pressable>
              </VStack>
            </HStack>
            <VStack space={"12px"}>
              {colors.map((row) => (
                <HStack space={"12px"}>
                  {row.map(({ color, current }) => (
                    <Pressable
                      w={"21px"}
                      h={"21px"}
                      borderRadius={50}
                      bg={color}
                      justifyContent={"center"}
                      alignItems={"center"}
                    >
                      {current && (
                        <Box
                          bg={"black"}
                          w={"10px"}
                          h={"10px"}
                          borderRadius={50}
                        />
                      )}
                    </Pressable>
                  ))}
                </HStack>
              ))}
            </VStack>
          </VStack>
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
};
