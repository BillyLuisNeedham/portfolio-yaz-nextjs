
import React, { FunctionComponent, useEffect, useState } from 'react'
import { makeStyles, createStyles, Theme, ThemeProvider } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import AboutCard from '../components/aboutCard/AboutCard'
import { NavRoutes } from '../utils/constants/navRoutes'
import Box from '@material-ui/core/Box'
import { CaseStudyCards } from '../components/caseStudyCards/CaseStudyCards'
import About from '../pages/about';
import Blog from '../pages/blog'
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
      borderLeft: "1px solid black",
      background:"#F8F9FD",
      margin:0,
      padding:0,
      [theme.breakpoints.down('sm')]: {
        margin:"1rem",
        background:"none",
        borderLeft:"none",
      },
    },
    aboutcardbox:{
      margin:0,
      padding:0,

    }
  })
)

const Home:FunctionComponent<{ routeInitial?: number }> = ({ routeInitial = 0 }) => {
  const classes = useStyles()
  const [route, setRoute] = useState(routeInitial);


  function navigateToRoute(navRoutes: NavRoutes) {
    // console.log(`navigate to navRoute ${navRoutes}`)
    setRoute(navRoutes)
    console.log(`navigate to navRoute (usestate) ${route}`)
  }


  const x = true

  
  return SCREEN_WIDTH() < MIN_LANDSCAPE_MOBILE_WIDTH ? (
    // mob site
    <div className={classes.mobile}>
      <MobileNavBar
        onNavigateCallback={navigateToRoute}
        activeRoute={NavRoutes.Work}
        
      />
      <Box>
        <Box className={classes.aboutcardbox}>
          <AboutCard
            onNavigateCallback={navigateToRoute}
            activeRoute={route}
          />
        </Box>
        <Box className={classes.studycardsbox}>
          { route === NavRoutes.Work
            ? 
            <div>
              <Box p={2}>
                <Image
                  src="/assets/images/Group 68@2x.png"
                  width={300}
                  height={50}
                  layout="intrinsic"
                />
              </Box>
              <CaseStudyCards />
            </div>
            : route === NavRoutes.Contact
            ?<Blog/>
            : route === NavRoutes.AboutMe
            ?<About/>
            :route === NavRoutes.Resume
            ?<Blog/>
            :null
            }
          
        </Box>
      </Box>
      <MobileFooter/>
    </div>
  ) : ( 
    // website
    <div className={classes.root}>
      <Box display="flex">
        <Box flex={1}>
          <AboutCard
            onNavigateCallback={navigateToRoute}
            activeRoute={route}
          />
        </Box>
        <Box flex={2} m={2} className={classes.studycardsbox}>
          { route === NavRoutes.Work
          ? <CaseStudyCards/>
          : route === NavRoutes.Contact
          ?<Blog/>
          : route === NavRoutes.AboutMe
          ?<About/>
          :route === NavRoutes.Resume
          ?<Blog/>
          :null
          }
        </Box>
      </Box>
    </div>
  )
}

export default Home
