import React, { useEffect, useState } from 'react'

// small devices (landscape phones)
export const MIN_LANDSCAPE_MOBILE_WIDTH = 576

// medium devices (tablets)
export const MIN_TABLET_WIDTH = 768

// large devices (desktops)
export const MIN_WIDTH_DESKTOP = 992


export const SCREEN_WIDTH =() =>{
    const [screenWidth, setScreenWidth] = useState<number | undefined>(undefined)

  function handleResize(): void {
    setScreenWidth(window.innerWidth)
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize)

      handleResize()
      return () => window.removeEventListener("resize", handleResize)
    }
  }, [])
  return screenWidth
};