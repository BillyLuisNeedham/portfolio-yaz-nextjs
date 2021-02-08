import React, { useEffect, useState } from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import AboutCard from '../components/aboutCard/AboutCard'
import { NavRoutes } from '../utils/constants/navRoutes'
import Box from '@material-ui/core/Box'
import CaseStudyCard from '../components/caseStudyCard'
import { bottomsUpTheme } from '../theme'
import MobileNavBar from '../components/mobileNavBar/MobileNavBar'
import {MIN_LANDSCAPE_MOBILE_WIDTH} from '../utils/constants/dimens'
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
    mobile:{
      display: 'flex',
      flexDirection:'column',
      justifyContent: 'space-around',
      height: 'auto',
    }
  })
)



const Home = () => {

  const [windowWidth, setWindowWidth]= useState(0)

  const classes = useStyles()
  function navigateToRoute(navRoutes: NavRoutes) {
    console.log(`navigate to navRoute ${navRoutes}`)
  }

   React.useEffect(() => {
     setWindowWidth(window.outerWidth)
   })

   const x =true

  //TODO SORT OUT STYLING
  return (
    (windowWidth < MIN_LANDSCAPE_MOBILE_WIDTH)
    ?<div className={classes.mobile}>
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
          <CaseStudyCard theme={bottomsUpTheme} title="Bottoms Up!" subtitle="End to end project for a Udacity course." />
        </Box>
    </Box>
  </div>


    :<div className={classes.root}>
      <Box display="flex">
        <Box flex={1}>
          <AboutCard
            windowWidth={windowWidth}
            onNavigateCallback={navigateToRoute}
            activeRoute={NavRoutes.Work}
          />
        </Box>
        <Box flex={2} m={2}>
          {
          //TODO restore to cards when done building
}
          {/* <CaseStudyCard theme={bottomsUpTheme} title="Bottoms Up!" subtitle="End to end project for a Udacity course." /> */}
          <CaseStudyDivider title="Test Title" />
        </Box>
      </Box>
    </div>
  )
}

export default Home
