const localMonsterPlantImages: Record<string, number> = {
  "22000774": require("../../assets/monster-plants/22000774.png"),
  "22000835": require("../../assets/monster-plants/22000835.png"),
  "22000839": require("../../assets/monster-plants/22000839.png"),
  "22000840": require("../../assets/monster-plants/22000840.png"),
};

export function getMonsterPlantImage(id: string, fallbackImageUrl: string) {
  return localMonsterPlantImages[id] ?? fallbackImageUrl;
}
