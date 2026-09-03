import { Image } from "expo-image";
import { Text, View } from "react-native";

import { formatDurationFromSeconds } from "@/lib/formatters";
import type { MonsterPlant } from "@/types/monster-plant";

import { styles } from "./monster-plant-card.style";

type MonsterPlantCardProps = {
  plant: MonsterPlant;
};

export function MonsterPlantCard({ plant }: MonsterPlantCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.titleBar}>
        <Text selectable style={styles.title}>
          {plant.name}
        </Text>
      </View>

      <View style={styles.content}>
        <Image
          source={plant.imageUrl}
          contentFit="cover"
          style={styles.image}
        />

        <View style={styles.wellbeingPanel}>
          <Text selectable style={styles.wellbeingLabel}>
            Remaining Wellbeing
          </Text>
          <Text selectable style={styles.wellbeingValue}>
            {formatDurationFromSeconds(plant.remainingWellbeingSeconds)}
          </Text>
          <Text selectable style={styles.seconds}>
            {plant.remainingWellbeingSeconds.toLocaleString()} seconds
          </Text>
        </View>
      </View>
    </View>
  );
}
