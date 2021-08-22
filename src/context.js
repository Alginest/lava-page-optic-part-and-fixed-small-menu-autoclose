import React, { useContext, useState, useEffect } from 'react'

const AppContext = React.createContext()

export const AppProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  const closeMenu = () => {
    setIsMenuOpen(false)
  }
  return (
    <AppContext.Provider value={{ isMenuOpen, toggleMenu, closeMenu }}>
      {children}
    </AppContext.Provider>
  )
}

//hook

export const useGlobalContext = () => {
  return useContext(AppContext)
}
// Hook
export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  })
  useEffect(() => {
    // Handler to call on window resize
    const handleResize = () => {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    // Add event listener
    window.addEventListener('resize', handleResize)
    // Call handler right away so state gets updated with initial window size
    handleResize()
    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize)
  }, []) // Empty array ensures that effect is only run on mount
  return windowSize
}
