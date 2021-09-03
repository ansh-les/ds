// global.d.ts

declare global {
  namespace Jss {
    export interface Theme {
      breakpoints: {
        xs: number
        sm: number
        md: number
        lg: number
        xl: number
      },
      colors: {
        red: string
      },
      typography: {
        h1: {
          fontSize: string,
          xs: {
            fontSize: string,
          }
        }
      }
    }
  }
}

export {}