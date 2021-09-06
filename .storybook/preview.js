import React from "react"
import { ThemeProvider } from "react-jss"
import { theme } from "../src/theme"
import CssBaseline from "../src/components/CssBaseline"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
}

export const decorators = [
  Story => (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Story />
    </ThemeProvider>
  )
]
