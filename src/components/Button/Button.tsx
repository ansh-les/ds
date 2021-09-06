import React from "react"
import { createUseStyles } from "react-jss"

const useStyles = createUseStyles(theme => ({
  myButton: {
    fontSize: `${theme.typography.h1.fontSize}px`,
    "& span": {
      fontWeight: "bold"
    }
  },
  myLabel: {
    fontStyle: "italic"
  }
}))

export type ButtonProps = {
  children: React.ReactNode
  color: "primary" | "error"
}

const Button = ({ children }: ButtonProps) => {
  const classes = useStyles()
  return (
    <button className={classes.myButton}>
      <span className={classes.myLabel}>{children}</span>
    </button>
  )
}

export default Button
