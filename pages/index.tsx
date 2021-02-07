import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import AboutCard from '../components/aboutCard/AboutCard'
import { NavRoutes } from '../utils/constants/navRoutes'
import Box from '@material-ui/core/Box'
import CaseStudyCard from '../components/caseStudyCard/CaseStudyCard'
import { bottomsUpTheme } from '../theme'
import Image from 'next/image'
const bottomsUpCardImg = require('../assets/images/bottomsUp/3_phone_mockup.png')


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
          <CaseStudyCard
            theme={bottomsUpTheme}
            title="Bottoms Up!"
            subtitle="End to end project for a Udacity course."
            image={
              <Image
                src={bottomsUpCardImg}
                alt="3 phones showing bottomsUp designs"
                layout="intrinsic"
                width={248}
                height={271}
              />
            }
          />
        </Box>
      </Box>
    </div>
  )
}

export default Home
