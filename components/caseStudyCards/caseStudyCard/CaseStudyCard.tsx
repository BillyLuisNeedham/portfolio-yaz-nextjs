import React, { ReactNode, useState } from 'react'
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'
import { Box, Paper, Typography, Grid, ThemeProvider } from '@material-ui/core'
import { MIN_LANDSCAPE_MOBILE_WIDTH, SCREEN_WIDTH } from '../../../utils/constants/dimens'

interface Props {
  title: string
  subtitle: string
  theme: Theme
  image: ReactNode
  
}

const CaseStudyCard: React.FC<Props> = ({
  title,
  subtitle,
  theme,
  image,
}) => {
  const useStyles = makeStyles({
    root: {
      
    },
    paper: {
      padding: theme.spacing(2),
      margin: '1.5rem',
      textAlign: 'center',
      minHeight: '150px',
      backgroundColor: theme.palette.primary.main,
      borderRadius: "20px",
    },
    column: {
      minHeight: '150px',
    },
    text: {
      color: theme.palette.background.default,
    },
    textContainer: {
      marginBottom: theme.spacing(1),
    },
  })
  const classes = useStyles()

  const useMobileLayout: Boolean = SCREEN_WIDTH() < MIN_LANDSCAPE_MOBILE_WIDTH

  const titleComponent: ReactNode = (
    <Typography variant="h5" className={classes.text}>
      {title}
    </Typography>
  )

  const desktopLayout: ReactNode = (
    <Grid container direction="row" spacing={1}>
      <Grid
        container
        direction="column"
        justify="space-around"
        alignItems="center"
        xs
        className={classes.column}
      >
        <Grid item>
          <Box className={classes.textContainer}>{titleComponent}</Box>
          <Typography variant="body2" className={classes.text}>
            {subtitle}
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        xs
        className={classes.column}
      >
        <Grid item>{image}</Grid>
      </Grid>
    </Grid>
  )

  const mobileLayout: ReactNode = (
    <Grid 
    container 
    direction="column"
    justify="center"
    alignItems="center">
      <Grid item>
        {image}
      </Grid>
      <Grid item>
        {titleComponent}
      </Grid>
    </Grid>
  )

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Box p={1}>
            {useMobileLayout ? mobileLayout : desktopLayout}
          </Box>
        </Paper>
      </div>
    </ThemeProvider>
  )
}

export default CaseStudyCard
