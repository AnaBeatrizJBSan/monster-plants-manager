import { Stack } from "expo-router";
import { useState } from "react";
import { ScrollView, Text, TextInput, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { MonsterPlantCard } from "@/components/monster-plant-card";
import { useMonsterPlants } from "@/hooks/use-monster-plants";
import { styles } from "@/screens/home/style";

export default function HomeScreen() {
  const { data, error, isLoading, refetch, isRefetching } = useMonsterPlants();
  const [searchQuery, setSearchQuery] = useState("");
  const normalizedQuery = searchQuery.trim().toLocaleLowerCase();
  const filteredPlants = data?.filter((plant) =>
    plant.name.toLocaleLowerCase().includes(normalizedQuery),
  );

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

        <View style={styles.searchCard}>
          <Text style={styles.searchLabel}>Find a monster plant</Text>
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            clearButtonMode="while-editing"
            onChangeText={setSearchQuery}
            placeholder="Search by plant name"
            placeholderTextColor="#9b7646"
            style={styles.searchInput}
            value={searchQuery}
          />
        </View>

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

        {filteredPlants?.map((plant) => (
          <MonsterPlantCard key={plant.id} plant={plant} />
        ))}

        {data && filteredPlants?.length === 0 ? (
          <View style={styles.emptyCard}>
            <Text style={styles.emptyText}>
              No monster plants match "{searchQuery}".
            </Text>
          </View>
        ) : null}
      </ScrollView>
    </>
  );
}
