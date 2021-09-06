import { breakpoints } from "theme"

export type Variant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "subtitle1"
  | "body1"
  | "body2"
  | "button"

export interface FontStyle
  extends Required<{
    fontFamily: React.CSSProperties["fontFamily"]
    fontSize: number
    fontWeightRegular: React.CSSProperties["fontWeight"]
    fontWeightMedium: React.CSSProperties["fontWeight"]
    fontWeightSemiBold: React.CSSProperties["fontWeight"]
    fontWeightBold: React.CSSProperties["fontWeight"]
  }> {}

export type TypographyOptions = Record<Variant, React.CSSProperties> & FontStyle

export function createTypography(): TypographyOptions {
  return {
    fontFamily: "Inter",
    fontSize: 16,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightSemiBold: 600,
    fontWeightBold: 700,

    h1: {
      fontSize: "4rem", // 64px
      fontWeight: 700,
      lineHeight: "2.5rem",
      letterSpacing: "-1.28px"
    },
    h2: {
      fontSize: "2.50rem", // 40px
      fontWeight: 700,
      letterSpacing: "-0.08rem",
      [breakpoints.only("xs")]: {
        fontSize: "1.75rem" // 28px
      }
    },
    h3: {
      fontSize: "1.5rem", // 24px
      fontWeight: 700,
      letterSpacing: "-0.48px",
      [breakpoints.down("md")]: {
        fontSize: "1.375rem" // 22px
      }
    },

    h4: {
      fontSize: "1.25rem", // 20px
      fontWeight: 700,
      lineHeight: "1.375rem",
      letterSpacing: "-0.4px",
      [breakpoints.down("md")]: {
        fontSize: "1.125rem" // 18px
      }
    },

    /**
     * SemiBold
     */
    h5: {
      fontSize: "1rem", // 16px
      fontWeight: 600
    },
    h6: {
      fontSize: "1rem", // 16px
      fontWeight: 600
    },
    subtitle1: {
      fontSize: "1rem", // 16px
      fontWeight: 400
    },
    body1: {
      fontSize: "1rem", // 16px
      lineHeight: "20.08px",
      letterSpacing: 0
    },
    body2: {
      fontSize: "0.875rem" // 14px
    },
    button: {
      fontSize: "0.9375rem", // 15px
      textTransform: "none"
    }
  }
}
