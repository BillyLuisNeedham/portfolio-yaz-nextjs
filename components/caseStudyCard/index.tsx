import React from 'react'
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'
import { Box, Paper, Typography, Grid } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      textAlign: 'center',
      minHeight: '150px',
    },
    column: {
      minHeight: '150px',
    },
  })
)

interface Props {
  title: string
  subtitle: string
  //   theme: Theme
}

const CaseStudyCard: React.FC<Props> = ({ title, subtitle }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
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
                <Typography variant="h5">Pic</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </div>
  )
}

export default CaseStudyCard
