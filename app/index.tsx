import { Stack } from "expo-router";
import { ScrollView, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { MonsterPlantCard } from "@/components/monster-plant-card";
import { useMonsterPlants } from "@/hooks/use-monster-plants";
import { styles } from "@/screens/home/style";

export default function HomeScreen() {
  const { data, error, isLoading, refetch, isRefetching } = useMonsterPlants();

  return (
    <>
      <Stack.Screen options={{ title: "Monster Plants" }} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={styles.scrollContent}
      >
        <LinearGradient
          colors={["#fff4ca", "#f1c358"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.hero}
        >
          <Text
            selectable
            style={styles.heroTitle}
          >
            Habbo Greenhouse
          </Text>
          <Text
            selectable
            style={styles.heroDescription}
          >
            Track each monster plant’s wellbeing countdown in one place. The
            cards below are ready for live WIRED data once your backend endpoint
            is connected.
          </Text>
          <Text
            onPress={() => {
              void refetch();
            }}
            selectable
            style={styles.refreshButton}
          >
            {isRefetching ? "Refreshing..." : "Refresh List"}
          </Text>
        </LinearGradient>

        {isLoading ? (
          <View style={styles.statusCard}>
            <Text selectable style={styles.statusText}>
              Loading monster plants...
            </Text>
          </View>
        ) : null}

        {error ? (
          <View style={styles.errorCard}>
            <Text selectable style={styles.errorTitle}>
              Could not load the monster plants.
            </Text>
            <Text selectable style={styles.errorText}>
              {error.message}
            </Text>
          </View>
        ) : null}

        {data?.map((plant) => (
          <MonsterPlantCard key={plant.id} plant={plant} />
        ))}
      </ScrollView>
    </>
  );
}
