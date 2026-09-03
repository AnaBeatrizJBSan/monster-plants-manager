export function formatDurationFromSeconds(totalSeconds: number) {
  const normalizedSeconds = Math.max(0, Math.floor(totalSeconds));
  const days = Math.floor(normalizedSeconds / 86_400);
  const hours = Math.floor((normalizedSeconds % 86_400) / 3600);
  const minutes = Math.floor((normalizedSeconds % 3600) / 60);
  const seconds = normalizedSeconds % 60;
  const time = [hours, minutes, seconds]
    .map((value) => value.toString().padStart(2, "0"))
    .join(":");

  return days > 0 ? `${days}d ${time}` : time;
}
