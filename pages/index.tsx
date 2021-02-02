import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import HeaderBar from '../components/headerBar'
import Link from 'next/link'
import AboutCard from '../components/aboutCard'
import Box from '@material-ui/core/Box'
import { NavRoutes } from '../utils/constants/navRoutes'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      minHeight: '95vh',
    },
    container: {
      minHeight: '95vh',
    },
  })
)

const Home = () => {
  const classes = useStyles()
  function navigateToRoute(navRoutes: NavRoutes) {
    console.log(`navigate to navRoute ${navRoutes}`)
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3} className={classes.container}>
        <Grid item xs className={classes.container}>
          <AboutCard 
          onNavigateCallback={navigateToRoute}
          activeRoute={NavRoutes.Work}
          />
        </Grid>
        <Grid item xs={6}>
          <p>hello world</p>
        </Grid>
      </Grid>
    </div>
  )
}

export default Home
