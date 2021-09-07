import React from "react"
import { createUseStyles } from "react-jss"

const useStyles = createUseStyles(theme => ({
  myButton: {
    padding: "10px 15px",
    fontSize: `${theme.typography.h1.fontSize}px`
  },
  myLabel: {
    fontWeight: "bold"
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
