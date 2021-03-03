import React from 'react'
import { ThemeProvider, Typography } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import NavBar from './navBar/NavBar'
import { NavRoutes } from '../../utils/constants/navRoutes'
import Image from 'next/image'
import {MIN_LANDSCAPE_MOBILE_WIDTH, SCREEN_WIDTH} from '../../utils/constants/dimens'
import {SUBTITLE, BODY_TEXT } from '../../public/assets/strings/about-card-data'
import Footer from '../Footer/Footer'
import Link from 'next/link';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin:0,
      padding: "0.5rem 1rem 0 2rem",
      minHeight: '100vh',
      display:'flex',
      flexDirection:"column",
      justifyContent:'space-around',
      borderRight: "1px solid black",
      [theme.breakpoints.down('sm')]: {
        minHeight:0,
        marginTop: "3rem",
        borderRight: "none",
      },
    },
    footer: {
      bottom: 0,
    },
    picture:{
      boxShadow: '-20px -20px 0px -6px #402837',
      borderRadius: 50,
    },
    bgimg:{
      overflow: "hidden",
      zIndex: -1,
      position: "fixed",
      opacity: 0.1,
      left: "-164px" ,
      top: "-220px" ,
      [theme.breakpoints.down('sm')]: {
        position: "absolute",
        left: "-250px" ,
        top: "-175px" ,
      },

    },
    bgimg2:{
      overflow: "hidden",
      zIndex: -1,
      position: "fixed",
      opacity: 0.1,
      left: "250px" ,
      bottom: "-200px" ,
      [theme.breakpoints.down('sm')]: {
        position: "absolute",
        left: "0px" ,
        bottom: "-700px" ,
      },

    },
  })
)

interface IAboutCardProps {
  activeRoute: NavRoutes
  onNavigateCallback: (navRoutes: NavRoutes) => void
}

const AboutCard: React.FC<IAboutCardProps> = ({ activeRoute }) => {
  const classes = useStyles()
  const spacer = () => <Box p={1} />
  function navToRoute(navRoutes: NavRoutes) {
    // TODO update with call when built out
    console.log(`navToRoute clicked: ${navRoutes}`)
  }

  return (
    <div>
      <div className={classes.bgimg}>
        <Image
        alt="background"
        src="/assets/images/Flower1.png"
        height={636}
        width={625}
        objectFit="cover"
        layout="fixed"
        />
      </div>
      
      
      {(SCREEN_WIDTH() < MIN_LANDSCAPE_MOBILE_WIDTH)
      ? //mobile page
      <Box className={classes.root} p={4} >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Box className={classes.picture}>
            <Image 
              className={classes.picture}
              src="/assets/images/Profile_Image2.png"
              alt="Profile picture of Yazmin Leigh"
              layout="intrinsic"
              width={248}
              height={271}
              quality={100}
              />
          </Box >
          {spacer()}
          <Typography color="secondary" variant="h5">{SUBTITLE}</Typography>
          {spacer()}
          <Typography color="primary" variant="body1">{BODY_TEXT}</Typography>
          {spacer()}
        </Box>

          <Box
            display="flex"
            flexDirection="column"
            justifyContent="flex-start"
          >
        </Box>
      </Box>
      :// web page
      <Box className={classes.root}>
        <Box display="flex" justifyContent="flex-start">
        <Image
          src="/Logo_Grey.png"
          alt="Logo Yazmin Leigh"
          layout="intrinsic"
          width={37}
          height={48}
          quality={100}
          />
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
        <Box className={classes.picture}>
          <Image 
            className={classes.picture}
            src="/assets/images/Profile_Image2.png"
            alt="Profile picture of Yazmin Leigh"
            layout="intrinsic"
            width={248}
            height={271}
            quality={100}
            />
        </Box >
        {spacer()}
        <Typography color="secondary" variant="h5">{SUBTITLE}</Typography>
        {spacer()}
        <Typography color="primary" variant="body1">{BODY_TEXT}</Typography>
        {spacer()}
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="flex-start"
        >
          <p style={{ fontWeight:"bold", color:"#402837",}}>
            Or E-mail me on &nbsp;
            <Link href="mailto:yazminleigh33@gmail.com" >
                yazminleigh33@gmail.com 
            </Link>
          </p>
          {spacer()}
          <NavBar 
          activeRoute={activeRoute}
          onNavigateCallback={navToRoute} />
        </Box>
        <Box className={classes.footer}>
          <Footer/>
        </Box>
      </Box>
    }
    <div className={classes.bgimg2}>
      <Image
      alt="background"
      src="/assets/images/Flower2.png"
      layout="fixed"
      height={636}
      width={625}
      objectFit="cover"
      />
    </div>
  </div>
  )
}

export default AboutCard
