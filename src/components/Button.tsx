import React from "react"
import { createUseStyles } from "react-jss"

// Create your Styles. Remember, since React-JSS uses the default preset,
// most plugins are available without further configuration needed.
const useStyles = createUseStyles(theme => ({
  myButton: {
    // @ts-ignore
    fontSize: theme.typography.h1.fontSize,
    // @ts-ignore
    color: theme.colors.red,
    "& span": {
      // jss-plugin-nested applies this to a child span
      fontWeight: "bold" // jss-plugin-camel-case turns this into 'font-weight'
    }
  },
  myLabel: {
    fontStyle: "italic"
  }
}))

// Define the component using these styles and pass it the 'classes' prop.
// Use this to assign scoped class names.
export const Button = ({ children }: any) => {
  const classes = useStyles()
  return (
    <button className={classes.myButton}>
      <span className={classes.myLabel}>{children}</span>
    </button>
  )
}
