import React, { useState, useEffect } from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import AboutCard from '../components/aboutCard/AboutCard'
import { NavRoutes } from '../utils/constants/navRoutes'
import Box from '@material-ui/core/Box'
import { CaseStudyCards } from '../components/caseStudyCards/CaseStudyCards'
import { bottomsUpTheme } from '../theme'
import Image from 'next/image'


const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1,
      minHeight: '90vh',
    },
    container: {
      minHeight: '90vh',
    },
  })
)

const Home = () => {
  const classes = useStyles()

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

  function navigateToRoute(navRoutes: NavRoutes) {
    console.log(`navigate to navRoute ${navRoutes}`)
  }

  //TODO SORT OUT STYLING
  return (
    <div className={classes.root}>
      <Box display="flex">
        <Box flex={1}>
          <AboutCard
            onNavigateCallback={navigateToRoute}
            activeRoute={NavRoutes.Work}
          />
        </Box>
        <Box flex={2} m={2}>
          <CaseStudyCards screenWidth={screenWidth} />
        </Box>
      </Box>
    </div>
  )
}

export default Home
