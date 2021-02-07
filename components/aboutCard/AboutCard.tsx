import React from 'react'
import { Typography } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import NavBar from './navBar/NavBar'
import { NavRoutes } from '../../utils/constants/navRoutes'
import Image from 'next/image'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minHeight: '90vh',
    },
    footer: {
      position: 'absolute',
      bottom: 0,
    },
    picture:{
      boxShadow: '-20px -20px 0px -6px #402837',
      borderRadius: 50,
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
    <Box className={classes.root} p={1} borderRight={1}>
      <Box display="flex" justifyContent="flex-start">
        <Typography variant="body1">Logo</Typography>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Box className={classes.picture}>
          <Image
            className={classes.picture}
            src="/assets/images/Profile_Image2.png"
            alt="Profile picture of Yazmin Leigh"
            layout="intrinsic"
            width={248}
            height={271}
          />
        </Box>
        {spacer()}
        <Typography variant="h5">subtitle</Typography>
        {spacer()}
        <Typography variant="body1">body text</Typography>
        {spacer()}
      </Box>
      <Box display="flex" flexDirection="column" justifyContent="flex-start">
        <Typography variant="body1">
          email <b>address</b>
        </Typography>
        {spacer()}
        <NavBar activeRoute={activeRoute} onNavigateCallback={navToRoute} />
      </Box>
      <Box className={classes.footer}>
        <Typography variant="body1">Social Media</Typography>
      </Box>
    </Box>
  )
}

export default AboutCard
