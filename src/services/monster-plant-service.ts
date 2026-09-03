import { AxiosError } from "axios";

import { apiClient } from "@/lib/api-client";
import type { MonsterPlant } from "@/types/monster-plant";

type MonsterPlantApiResponse = {
  plants: MonsterPlant[];
};

const mockPlants: MonsterPlant[] = [
  {
    id: "monstera-alpha",
    name: "Monstera Alpha",
    remainingWellbeingSeconds: 14652,
    imageUrl: "https://placehold.co/600x400/F4D36B/5A2A00?text=Monstera+Alpha",
  },
  {
    id: "venus-vine",
    name: "Venus Vine",
    remainingWellbeingSeconds: 9240,
    imageUrl: "https://placehold.co/600x400/7BCF46/17370B?text=Venus+Vine",
  },
  {
    id: "prickle-pop",
    name: "Prickle Pop",
    remainingWellbeingSeconds: 4788,
    imageUrl: "https://placehold.co/600x400/F6B95E/5B2600?text=Prickle+Pop",
  },
];

export async function fetchMonsterPlants() {
  if (!apiClient.defaults.baseURL) {
    return mockPlants;
  }

  try {
    const response = await apiClient.get<MonsterPlantApiResponse>("");
    return response.data.plants;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(
        error.response?.data?.message ??
          "Your monster plants endpoint did not respond correctly.",
      );
    }

    throw new Error("Unexpected error while loading monster plants.");
  }
}
