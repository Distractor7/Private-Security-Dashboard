// app/screens/ReportsScreen.tsx
import React from "react";
import { Box, Heading, Text } from "native-base";

const ReportsScreen = () => {
  return (
    <Box safeArea flex={1} p={4} bg="gray.100">
      <Heading size="lg" mb={2} color="coolGray.800">
        Reports
      </Heading>
      <Text fontSize="md" color="coolGray.600">
        This is where guard incident reports and shift activity will appear.
      </Text>
    </Box>
  );
};

export default ReportsScreen;
