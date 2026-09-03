import { fetchMonsterPlantsFromHabbo } from "@/server/wired-monster-plant-service";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export function OPTIONS() {
  return new Response(null, { headers: corsHeaders });
}

export async function GET() {
  try {
    const plants = await fetchMonsterPlantsFromHabbo();

    return Response.json({ plants }, { headers: corsHeaders });
  } catch (error) {
    console.error("Unable to load Habbo monster plants", error);

    return Response.json(
      { message: "Unable to load monster plants right now." },
      { status: 500, headers: corsHeaders },
    );
  }
}
