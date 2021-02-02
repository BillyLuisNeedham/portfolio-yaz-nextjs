import React from 'react'
import { Typography } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minHeight: '90vh',
    },
    footer: {
      position: 'absolute',
      bottom: 0,
    },
  })
)

interface Props {}

const AboutCard: React.FC<Props> = (props: Props) => {
  const classes = useStyles()
  const spacer = () => <Box p={1} />

  return (
    <Box className={classes.root}>
      <Box display="flex" justifyContent="flex-start" m={1} p={1}>
        <Typography variant="body1">Logo</Typography>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        m={1}
        p={1}
      >
        <Typography variant="h4">Profile pic</Typography>
        {spacer()}
        <Typography variant="h5">subtitle</Typography>
        {spacer()}
        <Typography variant="body1">body text</Typography>
        {spacer()}
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="flex-start"
        m={1}
        p={1}
      >
        <Typography variant="body1">
          email <b>address</b>
        </Typography>
        {spacer()}
        <Typography variant="body1">nav components</Typography>
      </Box>
      <Box className={classes.footer}>
        <Typography variant="body1">Social Media</Typography>
      </Box>
    </Box>
  )
}

export default AboutCard
