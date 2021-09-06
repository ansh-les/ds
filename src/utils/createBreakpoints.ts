export const breakpoints = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920
} as const
export type Breakpoints = typeof breakpoints
// type BreakpointValues = Breakpoints[keyof Breakpoints]

// Sorted ASC by size. That's important.
export const keys: Array<BreakpointKeys> = ["xs", "sm", "md", "lg", "xl"]
type BreakpointKeys = keyof Breakpoints

// @media is inclusive by the CSS specification.
export function createBreakpoints() {
  const unit = "px"
  const step = 5

  const values = breakpoints

  function up(key: BreakpointKeys) {
    const value = values[key]
    return `@media (min-width:${value}${unit})`
  }

  function down(key: BreakpointKeys) {
    const endIndex = keys.indexOf(key) + 1
    const upperBound = values[keys[endIndex]]

    if (endIndex === keys.length) {
      // xl down applies to all sizes
      return up("xs")
    }

    return `@media (max-width:${upperBound - step / 100}${unit})`
  }

  function between(start: BreakpointKeys, end: BreakpointKeys) {
    const endIndex = keys.indexOf(end)

    if (endIndex === keys.length - 1) {
      return up(start)
    }

    return (
      `@media (min-width:${values[start]}${unit}) and ` +
      `(max-width:${values[keys[endIndex + 1]] - step / 100}${unit})`
    )
  }

  function only(key: BreakpointKeys) {
    return between(key, key)
  }

  return {
    keys,
    values,
    up,
    down,
    between,
    only
  }
}

export type ThemeBreakpoints = ReturnType<typeof createBreakpoints>
