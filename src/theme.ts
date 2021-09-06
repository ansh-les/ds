// import { createTheme } from "@material-ui/styles"
import { createBreakpoints, ThemeBreakpoints } from "utils/createBreakpoints"
import { TypographyOptions, createTypography } from "utils/createTypography"
import { createColors, Colors } from "utils/createColors"

export const breakpoints = createBreakpoints()
export const colors = createColors()
export const typography = createTypography()

export const theme: Theme = {
  breakpoints,
  typography,
  colors
}

export interface Theme {
  breakpoints: ThemeBreakpoints
  typography: TypographyOptions
  colors: Colors
}
