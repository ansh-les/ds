// import { createTheme } from "@material-ui/styles"
import { CSSProperties } from "./types/utils"

const suraasaColors = {
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

export type SuraasaColors = typeof suraasaColors
// // const baseTheme =

// export const theme = ({
//   typography: {
//     fontFamily: "Inter",

//     h1: {
//       fontSize: "4rem", // 64px
//       fontWeight: 700,
//       lineHeight: "2.5rem",
//       letterSpacing: "-1.28px"
//     },
//     h2: {
//       fontSize: "2.50rem", // 40px
//       fontWeight: 700,
//       letterSpacing: "-0.08rem",
//       '@media (min-width: 1024px)': {
//         fontSize: "1.75rem" // 28px
//       }
//     },

//     /**
//      * SemiBold
//      */
//     h5: {
//       fontSize: "1rem", // 16px
//       fontWeight: 600
//     },
//     subtitle1: {
//       fontSize: "1rem", // 16px
//       fontWeight: 400
//     },
//     body1: {
//       fontSize: "1rem", // 16px
//       lineHeight: "20.08px",
//       letterSpacing: 0
//     },
//     body2: {
//       fontSize: "0.875rem" // 14px
//     },
//     button: {
//       fontSize: "0.9375rem", // 15px
//       textTransform: "none"
//     },
//     fontWeightBold: 600
//   },
//   palette: {
//     background: {
//       default: "#fff"
//     },
//     primary: {
//       main: "#315EFB"
//     },
//     error: {
//       main: "#CE3E3E"
//     },
//     /**
//      * Suraasa Design System
//      */
//     system: suraasaColors
//   },
//   props: {
//     MuiButtonBase: {
//       // Globally disabled ripple effect
//       disableRipple: true
//     }
//   }
// })

export const breakpoints = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920
}

export type Breakpoints = {
  xs: number
  sm: number
  md: number
  lg: number
  xl: number
}

export const theme: Theme = {
  breakpoints,
  typography: {
    h1: {
      fontSize: "10rem",
      "@media (max-width: 959.95px)": {
        fontSize: "1rem"
      }
    }
  },
  colors: suraasaColors
}

export type Theme = {
  breakpoints: Breakpoints
  typography: {
    h1: CSSProperties
  }
  colors: SuraasaColors
}
