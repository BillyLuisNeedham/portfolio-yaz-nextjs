import React, { FunctionComponent, ReactElement } from 'react'
import { makeStyles } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import Box from '@material-ui/core/Box'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'
import Link from '@material-ui/core/Link'

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: 20,
    right: 20,
    backgroundColor:'#30553833',
    borderRadius:'50%',
  },
  arrow:{
    color:'white'
  },
}))

interface Props {}

export default function BackToTop(): ReactElement {
  const classes = useStyles()

  return (
    <>
      <Box className={classes.root}>
        <IconButton>
          <Link href="#">
            <ArrowUpwardIcon fontSize='default' classes={{root: classes.arrow}}/>
          </Link>
        </IconButton>
      </Box>
    </>
  )
}
