const colors = {
  surface: {
    50: "#F8FAFC",
    100: "#F1F5F9",
    200: "#E2E8F0",
    300: "#CBD5E1"
  },
  onSurface: {
    50: "#F8FAFC",
    100: "#F1F5F9",
    200: "#E2E8F0",
    300: "#CBD5E1",
    400: "#94A3B8",
    500: "#64748B",
    600: "#475569",
    700: "#334155",
    800: "#1E293B",
    900: "#0F172A"
  },
  primary: {
    50: "#EDF0FE",
    100: "#DAE0FD",
    200: "#B5C2FB",
    300: "#90A3FA",
    400: "#6B85F8",
    500: "#4666F6",
    600: "#3852C5",
    700: "#2A3D94",
    800: "#1C2962",
    900: "#0E1431"
  },
  secondary: {
    50: "#F8FAFC",
    100: "#F1F5F9",
    200: "#E2E8F0",
    300: "#CBD5E1",
    400: "#94A3B8",
    500: "#64748B",
    600: "#475569",
    700: "#334155",
    800: "#1E293B",
    900: "#0F172A"
  },
  success: {
    50: "#F2F8F5",
    100: "#A0C7B5",
    200: "#138D75"
  },
  warning: {
    50: "#FEFCE8",
    500: "#EAB308",
    600: "#CA8A04"
  },
  critical: {
    50: "#FEF2F2",
    700: "#B53B3B",
    800: "#991B1B"
  }
} as const
export type Colors = typeof colors

export function createColors() {
  return colors
}
