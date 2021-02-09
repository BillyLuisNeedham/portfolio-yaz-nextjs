import React from 'react'
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'
import { ThemeProvider, Typography } from '@material-ui/core'
import { psdsTheme } from '../../theme'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
  })
)

interface Props {}

const PSDSPage: React.FC<Props>= (props: Props) => {
  const classes = useStyles()

  return (
    <ThemeProvider theme={psdsTheme}>
      <div className={classes.root}>
        <Typography variant="h3">PSDS case study</Typography>
      </div>
    </ThemeProvider>
  )
}

export default PSDSPage