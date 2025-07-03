// app/home.tsx
import React from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  IconButton,
  Icon,
  Center,
  NativeBaseProvider,
  extendTheme,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";

const theme = extendTheme({}); // You can customize the theme here later

const Home = () => {
  return (
    <NativeBaseProvider theme={theme}>
      <Box safeArea flex={1} p={4} bg="white">
        <HStack justifyContent="space-between" alignItems="center" mb={4}>
          <Heading size="lg">Dashboard</Heading>
          <HStack space={2}>
            <IconButton
              icon={<Icon as={Ionicons} name="notifications-outline" />}
              borderRadius="full"
              _icon={{ color: "gray.600", size: "md" }}
            />
            <IconButton
              icon={<Icon as={Ionicons} name="settings-outline" />}
              borderRadius="full"
              _icon={{ color: "gray.600", size: "md" }}
            />
          </HStack>
        </HStack>

        <VStack space={4}>
          <Box p={4} bg="green.100" borderRadius="md">
            <Text bold fontSize="md">
              Guards Checked In
            </Text>
            <Heading size="2xl" color="green.800">
              12
            </Heading>
          </Box>

          <Box p={4} bg="blue.100" borderRadius="md">
            <Text bold fontSize="md">
              Last Report
            </Text>
            <Text color="blue.800">2 mins ago at Site A</Text>
          </Box>

          <Box p={4} bg="purple.100" borderRadius="md">
            <Text bold fontSize="md">
              Upcoming Shift
            </Text>
            <Text color="purple.800">13:00 - 21:00 | Guard: M. Dlamini</Text>
          </Box>
        </VStack>
      </Box>
    </NativeBaseProvider>
  );
};

export default Home;
