import React from 'react'
import { createContext } from 'react'


export const ThemeDataContext = createContext()

const ThemeContext = ({children}) => {
  return (
    <div>
      <ThemeDataContext.Provider value='Roxy'>
        {children}
      </ThemeDataContext.Provider>
    </div>
  )
}

export default ThemeContext
