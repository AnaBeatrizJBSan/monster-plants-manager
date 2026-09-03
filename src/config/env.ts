const hotel = process.env.EXPO_PUBLIC_HABBO_HOTEL ?? "br";
const roomId = process.env.EXPO_PUBLIC_HABBO_ROOM_ID ?? "153844031";
const monsterPlantsEndpoint =
  process.env.EXPO_PUBLIC_MONSTER_PLANTS_ENDPOINT ?? "";

export const env = {
  hotel,
  roomId,
  monsterPlantsEndpoint,
};
