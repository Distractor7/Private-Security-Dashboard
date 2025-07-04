// app/navigation/DrawerNavigator.tsx
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../home"; // your dashboard screen
import ReportsScreen from "../reports";
import PropertiesScreen from "../properties";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: true,
        }}
      >
        <Drawer.Screen name="Dashboard" component={Home} />
        <Drawer.Screen name="Reports" component={ReportsScreen} />
        <Drawer.Screen name="Properties" component={PropertiesScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigator;
