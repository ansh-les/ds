import { Theme as MainTheme } from "theme"

declare global {
  namespace Jss {
    export interface Theme extends MainTheme {}
  }
}

export {}
