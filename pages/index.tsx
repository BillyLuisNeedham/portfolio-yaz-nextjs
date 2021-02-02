import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import AboutCard from '../components/aboutCard'
import { NavRoutes } from '../utils/constants/navRoutes'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1,
      minHeight: '100vh',
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
      //TODO SORT OUT STYLING
      {/* <Grid container spacing={0} className={classes.container}>
        <Grid item xs className={classes.container}> */}
      <Box display="flex">
        <Box flex={1}>
          <AboutCard
            onNavigateCallback={navigateToRoute}
            activeRoute={NavRoutes.Work}
          />
        </Box>
        <Box flex={3}>
          {/* </Grid> */}
          {/* <Grid item xs={6}> */}
          <p>hello world</p>
        </Box>
      </Box>
      {/* </Grid> */}
      {/* </Grid> */}
    </div>
  )
}

export default Home
