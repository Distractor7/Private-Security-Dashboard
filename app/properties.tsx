// app/screens/PropertiesScreen.tsx
import React from "react";
import { Box, Heading, Text } from "native-base";

const PropertiesScreen = () => {
  return (
    <Box safeArea flex={1} p={4} bg="gray.100">
      <Heading size="lg" mb={2} color="coolGray.800">
        Properties
      </Heading>
      <Text fontSize="md" color="coolGray.600">
        Here you'll manage the list of assigned sites or properties.
      </Text>
    </Box>
  );
};

export default PropertiesScreen;
