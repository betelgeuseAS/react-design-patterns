import { useContext } from 'react'

import { ThemeContext } from './ThemeProvider'

export const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext)

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <div style={{ backgroundColor: theme === 'light' ? '#fff' : '#000' }}>
      <button onClick={toggleTheme}>Change Theme</button>
    </div>
  )
}
