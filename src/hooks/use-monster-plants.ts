import { useQuery } from "@tanstack/react-query";

import { fetchMonsterPlants } from "@/services/monster-plant-service";

export function useMonsterPlants() {
  return useQuery({
    queryKey: ["monster-plants"],
    queryFn: fetchMonsterPlants,
    staleTime: 30 * 1000,
    refetchInterval: 30 * 1000,
  });
}
