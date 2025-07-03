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
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const theme = extendTheme({
  components: {
    Heading: {
      baseStyle: {
        fontWeight: "semibold",
      },
    },
  },
});

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
      <Box safeArea flex={1} p={4} bg="gray.100">
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

        {/* Main Content */}
        <VStack space={4}>
          {/* Clock + Check In/Out */}
          <Box
            p={5}
            bg="white"
            borderRadius="lg"
            shadow={2}
            borderWidth={1}
            borderColor="gray.200"
            alignItems="center"
          >
            <Text bold fontSize="md" color="coolGray.700" mb={2}>
              Current Time
            </Text>
            <Heading
              size="xl"
              color="gray.900"
              mb={4}
              fontFamily="monospace"
              letterSpacing="md"
            >
              {formattedTime}
            </Heading>

            <HStack space={4}>
              <Button
                onPress={handleCheckIn}
                isDisabled={checkedIn}
                colorScheme="emerald"
                variant="solid"
              >
                Check In
              </Button>
              <Button
                onPress={handleCheckOut}
                isDisabled={!checkedIn}
                colorScheme="red"
                variant="outline"
              >
                Check Out
              </Button>
            </HStack>
          </Box>

          {/* Stats Blocks */}
          <Box
            p={4}
            bg="white"
            borderRadius="lg"
            shadow={1}
            borderWidth={1}
            borderColor="gray.200"
          >
            <HStack alignItems="center" space={2}>
              <Icon
                as={MaterialIcons}
                name="people"
                size="sm"
                color="emerald.600"
              />
              <Text bold fontSize="md" color="emerald.800">
                Guards Checked In
              </Text>
            </HStack>
            <Heading size="xl" color="emerald.700" mt={2}>
              12
            </Heading>
          </Box>

          <Box
            p={4}
            bg="white"
            borderRadius="lg"
            shadow={1}
            borderWidth={1}
            borderColor="gray.200"
          >
            <HStack alignItems="center" space={2}>
              <Icon
                as={MaterialIcons}
                name="report"
                size="sm"
                color="blue.500"
              />
              <Text bold fontSize="md" color="blue.800">
                Last Report
              </Text>
            </HStack>
            <Text color="blue.700" mt={1}>
              2 mins ago at Site A
            </Text>
          </Box>

          <Box
            p={4}
            bg="white"
            borderRadius="lg"
            shadow={1}
            borderWidth={1}
            borderColor="gray.200"
          >
            <HStack alignItems="center" space={2}>
              <Icon
                as={Ionicons}
                name="calendar-outline"
                size="sm"
                color="purple.500"
              />
              <Text bold fontSize="md" color="purple.800">
                Upcoming Shift
              </Text>
            </HStack>
            <Text color="purple.700" mt={1}>
              13:00 – 21:00 | Guard: M. Dlamini
            </Text>
          </Box>
        </VStack>
      </Box>
    </NativeBaseProvider>
  );
};

export default Home;
