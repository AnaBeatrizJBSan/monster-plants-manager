import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  scrollContent: {
    gap: 16,
    padding: 16,
  },
  hero: {
    borderColor: "#8e5317",
    borderCurve: "continuous",
    borderRadius: 24,
    borderWidth: 3,
    boxShadow: "0 6px 18px rgba(95, 45, 0, 0.18)",
    gap: 10,
    padding: 18,
  },
  heroTitle: {
    color: "#613000",
    fontSize: 28,
    fontWeight: "900",
    letterSpacing: 1,
    textTransform: "uppercase",
  },
  heroDescription: {
    color: "#7a4a15",
    fontSize: 15,
    lineHeight: 22,
  },
  refreshButton: {
    alignSelf: "flex-start",
    backgroundColor: "#7bcf46",
    borderCurve: "continuous",
    borderRadius: 999,
    color: "#17370b",
    fontSize: 13,
    fontWeight: "800",
    overflow: "hidden",
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  statusCard: {
    backgroundColor: "#fff5d5",
    borderColor: "#8e5317",
    borderCurve: "continuous",
    borderRadius: 22,
    borderWidth: 3,
    padding: 20,
  },
  statusText: {
    color: "#613000",
    fontSize: 16,
  },
  errorCard: {
    backgroundColor: "#ffe0d1",
    borderColor: "#8e5317",
    borderCurve: "continuous",
    borderRadius: 22,
    borderWidth: 3,
    gap: 8,
    padding: 20,
  },
  errorTitle: {
    color: "#6e1e00",
    fontSize: 16,
    fontWeight: "800",
  },
  errorText: {
    color: "#6e1e00",
    fontSize: 14,
  },
});
