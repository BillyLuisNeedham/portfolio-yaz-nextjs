import React, { useEffect, useState } from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import AboutCard from '../components/aboutCard'
import { NavRoutes } from '../utils/constants/navRoutes'
import Box from '@material-ui/core/Box'
import CaseStudyCard from '../components/caseStudyCard'
import { bottomsUpTheme } from '../theme'
import MobileNavBar from '../components/mobileNavBar'

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

  const [widowWidth, setWindowWidth]= useState(0)

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
// 400 needs changing with what ever is chosen
    (widowWidth < 400)
    ?<div className={classes.root}>
    <Box display="flex">
      <MobileNavBar
        onNavigateCallback={navigateToRoute}
        activeRoute={NavRoutes.Work}
      />
    
    </Box>
  </div>


    :<div className={classes.root}>
      <Box display="flex">
        <Box flex={1}>
          <AboutCard
            onNavigateCallback={navigateToRoute}
            activeRoute={NavRoutes.Work}
          />
        </Box>
        <Box flex={2} m={2}>
          <CaseStudyCard theme={bottomsUpTheme} title="Bottoms Up!" subtitle="End to end project for a Udacity course." />
        </Box>
      </Box>
    </div>
  )
}

export default Home
