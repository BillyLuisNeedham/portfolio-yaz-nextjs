
import React, { FunctionComponent, useEffect, useState, ReactNode } from 'react'
import { makeStyles, createStyles, Theme, ThemeProvider } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import AboutCard from '../components/aboutCard/AboutCard'
import { NavRoutes } from '../utils/constants/navRoutes'
import Box from '@material-ui/core/Box'
import { CaseStudyCards } from '../components/caseStudyCards/CaseStudyCards'
import About from '../pages/about';
import Blog from '../pages/blog';
import Contact from '../pages/contact';
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
      [theme.breakpoints.up('lg')]: {
        maxWidth:"1440px",
      },
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
    workBar:{
      minWidth: '80vw'
    },
    studycardsbox: {
      borderLeft: "1px solid black",
      background:"#F8F9FD",
        margin:0,
        padding:0,
      [theme.breakpoints.down('lg')]: {
        maxWidth:"64vw",
        borderLeft: "1px solid black",
      },
      [theme.breakpoints.down('sm')]: {
        minWidth:"90vw",
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
interface RouteProps{
  routeInitial: number
}

const Home = ({ routeInitial = 0}:RouteProps) => {
  const classes = useStyles()
  const [route, setRoute] = useState(routeInitial);


  function navigateToRoute(navRoutes: NavRoutes) {
    // console.log(`navigate to navRoute ${navRoutes}`)
    setRoute(navRoutes)
    console.log(`navigate to navRoute (usestate) ${route}`)
  }

  const mobileSiteMain: ReactNode =(
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
              <Box className={classes.workBar}>
                <Image
                  src="/assets/images/Group 68@2x.png"
                  width={600}
                  height={100}
                  layout="intrinsic"
                />
              </Box>
              <CaseStudyCards />
            </div>
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
  )


  const mobileSite :ReactNode =(
    <div>
      {route === NavRoutes.Contact
      ?<Contact/>
      : route === NavRoutes.Resume
      ?<Blog/>
      :mobileSiteMain   
      }
    </div>
    
  )
  
  const webSiteMain: ReactNode = (
    <Box className={classes.root}>
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
          ?<Contact/>
          : route === NavRoutes.AboutMe
          ?<About/>
          :null
          }
        </Box>
      </Box>
    </Box>
  )

  const webSite :ReactNode =(
    <div>
      {route === NavRoutes.Resume
      ?<Blog/>
      :webSiteMain   
      }
    </div>
  )

  return SCREEN_WIDTH() < MIN_LANDSCAPE_MOBILE_WIDTH ? (
    // mob site
    mobileSite
  ) : ( 
    // website
    webSite
  )
}

export default Home
