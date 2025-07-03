// app/home.tsx
import React, { useState, useEffect } from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  IconButton,
  Icon,
  Button,
  NativeBaseProvider,
  extendTheme,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";

const theme = extendTheme({}); // Customize if needed

const Home = () => {
  const [time, setTime] = useState(new Date());
  const [checkedIn, setCheckedIn] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCheckIn = () => setCheckedIn(true);
  const handleCheckOut = () => setCheckedIn(false);

  const formattedTime = time.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  return (
    <NativeBaseProvider theme={theme}>
      <Box safeArea flex={1} p={4} bg="white">
        {/* Top Navigation */}
        <HStack justifyContent="space-between" alignItems="center" mb={4}>
          <Heading size="lg" color="coolGray.800">
            Dashboard
          </Heading>
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

        {/* Dashboard Stats */}
        <VStack space={4}>
          <Box
            p={5}
            bg="coolGray.100"
            borderRadius="md"
            shadow={0}
            mt={4}
            backgroundColor="white"
            alignItems="center"
            borderWidth={1}
            borderColor="coolGray.300"
          >
            <Text bold fontSize="md" color="coolGray.700" mb={2}>
              Current Time
            </Text>
            <Heading size="xl" color="coolGray.800" mb={4}>
              {formattedTime}
            </Heading>

            <HStack space={4}>
              <Button
                onPress={handleCheckIn}
                isDisabled={checkedIn}
                colorScheme="success"
                variant="solid"
              >
                Check In
              </Button>
              <Button
                onPress={handleCheckOut}
                isDisabled={!checkedIn}
                colorScheme="danger"
                variant="outline"
              >
                Check Out
              </Button>
            </HStack>
          </Box>

          <Box p={4} bg="green.100" borderRadius="md">
            <Text bold fontSize="md" color="green.800">
              Guards Checked In
            </Text>
            <Heading size="2xl" color="green.800">
              12
            </Heading>
          </Box>

          <Box p={4} bg="blue.100" borderRadius="md">
            <Text bold fontSize="md" color="blue.800">
              Last Report
            </Text>
            <Text color="blue.800">2 mins ago at Site A</Text>
          </Box>

          <Box p={4} bg="purple.100" borderRadius="md">
            <Text bold fontSize="md" color="purple.800">
              Upcoming Shift
            </Text>
            <Text color="purple.800">13:00 - 21:00 | Guard: M. Dlamini</Text>
          </Box>

          {/* Clock and Check-In/Out Section */}
        </VStack>
      </Box>
    </NativeBaseProvider>
  );
};

export default Home;
