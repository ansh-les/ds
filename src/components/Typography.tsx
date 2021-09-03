import React from "react"
import { createUseStyles } from "react-jss"

const useStyles = createUseStyles(theme => ({
  root: theme.typography.h1
}))

type TypographyProps = {
  variant?: keyof typeof defaultVariantMapping
  children: React.ReactNode
}

const defaultVariantMapping = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "h6",
  subtitle2: "h6",
  body1: "p",
  body2: "p"
} as const

const Typography = ({ variant = "h1", ...props }: TypographyProps) => {
  const classes = useStyles()
  const Component = defaultVariantMapping[variant] || "span"

  return <Component className={classes.root} {...props} />
}

export default Typography
