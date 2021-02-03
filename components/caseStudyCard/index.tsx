import React from 'react'
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'
import { Box, Paper, Typography, Grid, ThemeProvider } from '@material-ui/core'

interface Props {
  title: string
  subtitle: string
  theme: Theme
  image: any
  
}

const CaseStudyCard: React.FC<Props> = ({ title, subtitle, theme, image }) => {
  const useStyles = makeStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      textAlign: 'center',
      minHeight: '150px',
      backgroundColor: theme.palette.primary.main
    },
    column: {
      minHeight: '150px',
    },
  })

  const classes = useStyles()

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <Paper className={classes.paper} >
          <Box p={1}>
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
                  <Typography variant="h5">{title}</Typography>
                  <Typography variant="subtitle1">{subtitle}</Typography>
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
                <Grid item>
                  <img alt={image} src={image} />
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </div>
    </ThemeProvider>
  )
}

export default CaseStudyCard
