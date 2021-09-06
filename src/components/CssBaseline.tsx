import React from "react"
import { createUseStyles } from "react-jss"
import { Theme } from "theme"

export const html = {
  WebkitFontSmoothing: "antialiased", // Anti-aliasing.
  MozOsxFontSmoothing: "grayscale", // Anti-aliasing.
  // Change from `box-sizing: content-box` so that `width`
  // is not affected by `padding` or `border`.
  boxSizing: "border-box"
}

export const body = (theme: Theme) => ({
  // color: theme.colors.primary[500],
  ...theme.typography.body1,
  backgroundColor: theme.colors.surface[50],
  "@media print": {
    // Save printer ink.
    backgroundColor: "#fff"
  }
})

export const useStyles = createUseStyles(theme => ({
  "@global": {
    html,
    "*, *::before, *::after": {
      boxSizing: "inherit",
      margin: 0,
      padding: 0
    },
    "strong, b": {
      // TODO: use theme
      fontWeight: 700
    },
    body: {
      margin: 0, // Remove the margin in all browsers.
      ...body(theme),
      // Add support for document.body.requestFullScreen().
      // Other elements, if background transparent, are not supported.
      "&::backdrop": {
        backgroundColor: theme.colors.surface[50]
      }
    }
  }
}))

type Props = {
  /**
   * You can wrap a node.
   */
  children?: React.ReactNode
}

/**
 * Kickstart an elegant, consistent, and simple baseline to build upon.
 */
function CssBaseline(props: Props) {
  useStyles()

  const { children = null } = props
  return <React.Fragment>{children}</React.Fragment>
}

// if (process.env.NODE_ENV !== "production") {
//   // eslint-disable-next-line
//   CssBaseline["propTypes" + ""] = exactProp(CssBaseline.propTypes)
// }

export default CssBaseline
