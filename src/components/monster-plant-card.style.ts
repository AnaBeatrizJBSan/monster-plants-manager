import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff9e8",
    borderColor: "#7f4715",
    borderCurve: "continuous",
    borderRadius: 24,
    borderWidth: 3,
    boxShadow: "0 8px 20px rgba(88, 42, 6, 0.16)",
    overflow: "hidden",
  },
  titleBar: {
    backgroundColor: "#e8b546",
    borderBottomColor: "#7f4715",
    borderBottomWidth: 3,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  title: {
    color: "#492400",
    fontSize: 20,
    fontWeight: "900",
    letterSpacing: 0.6,
    textTransform: "uppercase",
  },
  content: {
    gap: 16,
    padding: 16,
  },
  image: {
    backgroundColor: "#d0f1b3",
    borderColor: "#7bcf46",
    borderRadius: 18,
    borderWidth: 3,
    height: 180,
    width: "100%",
  },
  wellbeingPanel: {
    backgroundColor: "#f4d36b",
    borderColor: "#7f4715",
    borderCurve: "continuous",
    borderRadius: 18,
    borderWidth: 2,
    gap: 8,
    padding: 14,
  },
  wellbeingLabel: {
    color: "#6a3700",
    fontSize: 13,
    fontWeight: "800",
    letterSpacing: 1,
    textTransform: "uppercase",
  },
  wellbeingValue: {
    color: "#1b3f0d",
    fontSize: 28,
    fontVariant: ["tabular-nums"],
    fontWeight: "900",
  },
  seconds: {
    color: "#6a3700",
    fontSize: 13,
  },
});
