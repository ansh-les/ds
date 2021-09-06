import React from "react"
import clsx from "clsx"
import { createUseStyles } from "react-jss"
import { Variant } from "utils/createTypography"

const useStyles = createUseStyles(theme => ({
  h1: theme.typography.h1,
  h2: theme.typography.h2,
  h3: theme.typography.h3,
  h4: theme.typography.h4,
  h5: theme.typography.h5,
  h6: theme.typography.h6,
  subtitle1: theme.typography.subtitle1,
  button: theme.typography.button,
  body1: theme.typography.body1,
  body2: theme.typography.body2
}))

export type TypographyProps = {
  variant?: Variant
  children: React.ReactNode
}

type ComponentRoot = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span"

const defaultVariantMapping: Record<Variant, ComponentRoot> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "p",
  body1: "p",
  body2: "p",
  button: "span"
} as const

const Typography = ({ variant = "body1", ...props }: TypographyProps) => {
  const classes = useStyles()
  const Component = defaultVariantMapping[variant] || "span"

  return (
    <Component
      className={clsx({
        [classes[variant]]: true
      })}
      {...props}
    />
  )
}

export default Typography
