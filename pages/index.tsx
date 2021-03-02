
import React, { useEffect, useState } from 'react'
import { makeStyles, createStyles, Theme, ThemeProvider } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import AboutCard from '../components/aboutCard/AboutCard'
import { NavRoutes } from '../utils/constants/navRoutes'
import Box from '@material-ui/core/Box'
import { CaseStudyCards } from '../components/caseStudyCards/CaseStudyCards'
import { bottomsUpTheme } from '../theme'
import Image from 'next/image'
import MobileNavBar from '../components/mobileNavBar/MobileNavBar'
import { MIN_LANDSCAPE_MOBILE_WIDTH ,SCREEN_WIDTH } from '../utils/constants/dimens'
import CaseStudyDivider from '../components/CaseStudyDivider/CaseStudyDivider'
import MobileFooter from '../components/mobileNavBar/MobileFooter'
import AppBar from '@material-ui/core/AppBar';
import { Button, Toolbar } from '@material-ui/core';
import {mobFooter} from "../theme/index"


const useStyles = makeStyles((theme: Theme) =>
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
    studycardsbox: {
      [theme.breakpoints.down('sm')]: {
        margin:"1rem",
      },
      
    },
  })
)

const Home = () => {

  const classes = useStyles()


  function navigateToRoute(navRoutes: NavRoutes) {
    console.log(`navigate to navRoute ${navRoutes}`)
  }


  const x = true

  //TODO SORT OUT STYLING
  return SCREEN_WIDTH() < MIN_LANDSCAPE_MOBILE_WIDTH ? (
    <div className={classes.mobile}>
      <MobileNavBar
        onNavigateCallback={navigateToRoute}
        activeRoute={NavRoutes.Work}
      />
      <Box>
        <Box>
          <AboutCard
            onNavigateCallback={navigateToRoute}
            activeRoute={NavRoutes.Work}
          />
        </Box>
        <Box className={classes.studycardsbox}>
          <Box p={2}>
          <Image
            src="/assets/images/Group 68@2x.png"
            width={300}
            height={50}
            layout="intrinsic"
          />
          </Box>
          
          <CaseStudyCards />
        </Box>
      </Box>
      <MobileFooter/>
    </div>
  ) : (
    <div className={classes.root}>
      <Box display="flex">
        <Box flex={1}>
          <AboutCard
            onNavigateCallback={navigateToRoute}
            activeRoute={NavRoutes.Work}
          />
        </Box>
        <Box flex={2} m={2} className={classes.studycardsbox}>
          <CaseStudyCards/>
        </Box>
      </Box>
    </div>
  )
}

export default Home
