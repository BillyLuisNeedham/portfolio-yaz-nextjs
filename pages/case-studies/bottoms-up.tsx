import React from 'react'
import { bottomsUpTheme } from '../../theme'
import { Theme, createStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
  })
)

interface Props {}

const BottomsUpPage: React.FC<Props> = (props: Props) => {
  const classes = useStyles()

  return (
    <ThemeProvider theme={bottomsUpTheme}>
      <div className={classes.root}>
        <Typography variant="h3" >
            BottomsUpPage
        </Typography>

      </div>
    </ThemeProvider>
  )
}

export default BottomsUpPage