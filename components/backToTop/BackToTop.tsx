import React, { FunctionComponent, ReactElement } from 'react'
import { makeStyles } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import Box from '@material-ui/core/Box'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'
import Link from '@material-ui/core/Link'
import { ThemeProvider } from '@material-ui/core'
import { Theme } from '@material-ui/core/styles'



interface Props {
    theme: Theme
}

export default function BackToTop({theme}:Props): ReactElement {
  const classes = useStyles()

  return (
    <ThemeProvider theme={theme}>
      <Box className={classes.root}>
        <IconButton>
          <Link href="#">
            <ArrowUpwardIcon fontSize='default' classes={{root: classes.arrow}}/>
          </Link>
        </IconButton>
      </Box>
      </ThemeProvider>
  )
}


const useStyles = makeStyles((theme) => ({
    root: {
      position: 'fixed',
      bottom: 20,
      right: 20,
      backgroundColor:theme.palette.info.main,
      borderRadius:'50%',
    },
    arrow:{
      color:'white'
    },
  }))


  