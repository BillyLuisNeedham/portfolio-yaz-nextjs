
import React, { useEffect, useState } from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import AboutCard from '../components/aboutCard/AboutCard'
import { NavRoutes } from '../utils/constants/navRoutes'
import Box from '@material-ui/core/Box'
import { CaseStudyCards } from '../components/caseStudyCards/CaseStudyCards'
import { bottomsUpTheme } from '../theme'
import Image from 'next/image'
import MobileNavBar from '../components/mobileNavBar/MobileNavBar'
import { MIN_LANDSCAPE_MOBILE_WIDTH } from '../utils/constants/dimens'
import CaseStudyDivider from '../components/CaseStudyDivider/CaseStudyDivider'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1,
      minHeight: '90vh',
    },
    container: {
      minHeight: '90vh',
    },
    mobile: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      height: 'auto',
    },
  })
)

const Home = () => {
  const [windowWidth, setWindowWidth] = useState(0)

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

  React.useEffect(() => {
    setWindowWidth(window.outerWidth)
  })

  const x = true

  //TODO SORT OUT STYLING
  return windowWidth < MIN_LANDSCAPE_MOBILE_WIDTH ? (
    <div className={classes.mobile}>
      <MobileNavBar
        onNavigateCallback={navigateToRoute}
        activeRoute={NavRoutes.Work}
      />
      <Box>
        <Box>
          <AboutCard
            windowWidth={windowWidth}
            onNavigateCallback={navigateToRoute}
            activeRoute={NavRoutes.Work}
          />
        </Box>
        <Box>
          <CaseStudyCards screenWidth={screenWidth} />
        </Box>
      </Box>
    </div>
  ) : (
    <div className={classes.root}>
      <Box display="flex">
        <Box flex={1}>
          <AboutCard
            windowWidth={windowWidth}
            onNavigateCallback={navigateToRoute}
            activeRoute={NavRoutes.Work}
          />
        </Box>
        <Box flex={2} m={2}>
          <CaseStudyCard
            theme={bottomsUpTheme}
            title="Bottoms Up!"
            subtitle="End to end project for a Udacity course."
          />
          <CaseStudyCards screenWidth={screenWidth} />
        </Box>
      </Box>
    </div>
  )
}

export default Home
