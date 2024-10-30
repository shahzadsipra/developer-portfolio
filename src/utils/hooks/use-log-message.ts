import { useEffect } from 'react'

/**
 * Log the portfolio Github repo.
 */
export const useLogMessage = (): void => {
  useEffect(() => {
    console.info(
      `%c
        _____         _     ____  _      _ 
        |_   _|___ ___| |__ |  _ \(_) __ (_)
          | |/ _ \ __| '_ \ | | | | |/ _|| |
          | |  __/ (__| | | | |_| | | (_|| |
          |_|\___|\___|_| |_|____/|_|\__,_|
        Check out my portfolio's code on Github:
        https://github.com/shahzadsipra/developer-portfolio.git
        `,
      'color:yellow;font-weight:bold'
    )
  }, [])
}
