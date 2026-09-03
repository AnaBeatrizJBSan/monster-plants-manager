import { HabboPublicAPI, Hotel, OrderBy, OrderDir, UserTargetKind } from "wired-api-wrapper-node";

import type { MonsterPlant } from "@/types/monster-plant";

const readKey = process.env.HABBO_WIRED_READ_KEY;
const writeKey = process.env.HABBO_WIRED_WRITE_KEY;
const hotel = (process.env.EXPO_PUBLIC_HABBO_HOTEL ?? "br") as keyof typeof Hotel;
const roomId = process.env.EXPO_PUBLIC_HABBO_ROOM_ID ?? "153844031";
const wellbeingVariableName = "remaining_wellbeing";
const holdersPageSize = 50;

function assertServerConfig() {
  if (!readKey || !writeKey || !roomId || !Number.isSafeInteger(Number(roomId))) {
    throw new Error(
      "Missing HABBO_WIRED_READ_KEY, HABBO_WIRED_WRITE_KEY, or EXPO_PUBLIC_HABBO_ROOM_ID.",
    );
  }
}

export async function fetchMonsterPlantsFromHabbo(): Promise<MonsterPlant[]> {
  assertServerConfig();

  const selectedHotel = Hotel[hotel.toUpperCase() as keyof typeof Hotel];

  if (!selectedHotel) {
    throw new Error(`Unsupported Habbo hotel: ${hotel}.`);
  }

  const api = HabboPublicAPI.fromHotel(selectedHotel);
  const variablesApi = api.variables(Number(roomId), readKey!, writeKey!);
  const petsApi = variablesApi.user();
  const holderCount = await petsApi.countHolders(
    wellbeingVariableName,
    UserTargetKind.Pets,
  );
  const pages = Math.ceil(holderCount.count / holdersPageSize);

  const responses = await Promise.all(
    Array.from({ length: pages }, (_, pageIndex) =>
      petsApi.listHolders(
        wellbeingVariableName,
        UserTargetKind.Pets,
        OrderBy.UpdateTime,
        OrderDir.Descending,
        pageIndex + 1,
        holdersPageSize,
      ),
    ),
  );

  const orderedPlants = responses.flatMap((response) =>
    response.items.flatMap((holder) => {
      if (!holder.pet) {
        return [];
      }

      const remainingWellbeingSeconds = Number(holder.variable.value);

      return [
        {
          plant: {
            id: String(holder.pet.id),
            name: holder.pet.name,
            remainingWellbeingSeconds: Number.isSafeInteger(remainingWellbeingSeconds)
              ? Math.max(remainingWellbeingSeconds, 0)
              : 0,
            imageUrl: `https://placehold.co/600x400/F4D36B/5A2A00?text=${encodeURIComponent(holder.pet.name)}`,
          },
          updatedAt: holder.variable.updateTime,
        },
      ];
    }),
  );

  return orderedPlants
    .sort((left, right) => Date.parse(right.updatedAt) - Date.parse(left.updatedAt))
    .map(({ plant }) => plant);
}
