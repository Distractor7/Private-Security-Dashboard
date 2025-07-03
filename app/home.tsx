import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { Text, Card, Layout, useTheme } from "@ui-kitten/components";

const DashboardCard = ({
  title,
  value,
}: {
  title: string;
  value: string | number;
}) => (
  <Card style={styles.card}>
    <Text category="h6">{title}</Text>
    <Text category="s1" appearance="hint">
      {value}
    </Text>
  </Card>
);

export default function HomeScreen() {
  const theme = useTheme();

  return (
    <Layout style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        {/* Header */}
        <Text category="h4" style={styles.header}>
          Welcome, Jordan 👋
        </Text>
        <Text category="s1" appearance="hint" style={styles.subheader}>
          Here’s what’s happening today:
        </Text>

        {/* Stats Cards */}
        <View style={styles.grid}>
          <DashboardCard title="On Duty" value="8 Guards" />
          <DashboardCard title="Check-ins Today" value="24" />
          <DashboardCard title="Incidents" value="3" />
          <DashboardCard title="Zones Covered" value="12" />
        </View>

        {/* Placeholder for more */}
        <Text category="label" style={{ marginTop: 32 }}>
          📍 More coming soon: map view, incident feed, guard timeline...
        </Text>
      </ScrollView>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
  },
  scroll: {
    paddingVertical: 32,
  },
  header: {
    marginBottom: 4,
    fontWeight: "bold",
  },
  subheader: {
    marginBottom: 24,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 12,
  },
  card: {
    width: "47%",
    marginBottom: 12,
    borderRadius: 12,
  },
});
